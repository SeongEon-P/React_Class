package com.example.shopbackend.security.jwt;

import com.example.shopbackend.security.UserPrinciple;
import com.example.shopbackend.utils.SecurityUtils;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Arrays;
import java.util.Date;
import java.util.Set;
import java.util.stream.Collectors;


@Component
public class JwtProviderImpl implements JwtProvider {
    @Value("${app.jwt.secret}")
    private String JWT_SECRET;

    @Value("${app.jwt.expiration-in-ms}")
    private Long JWT_EXPIRATION_IN_MS;

    @Override
    public String generateToken(UserPrinciple auth) {
        String authorities = auth.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        Key key = Keys.hmacShaKeyFor(JWT_SECRET.getBytes(StandardCharsets.UTF_8));

        return Jwts.builder()
                .setSubject(auth.getUsername())
                .claim("roles", authorities)
                .claim("userId", auth.getId())
                .setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION_IN_MS))
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }


    @Override
    public Authentication getAuthentication(HttpServletRequest request) {
        Claims claims = extractClaims(request);
        if (claims == null) return null;
        String username = claims.getSubject();
        Long userId = claims.get("userId", Long.class);

        Set<GrantedAuthority> authorities = Arrays.stream(claims.get("roles").toString().split(","))
                .map(SecurityUtils::convertToAuthority)
                .collect(Collectors.toSet());

        UserDetails userDetails = UserPrinciple.builder()
                .username((username))
                .authorities(authorities)
                .id(userId)
                .build();
        if (username == null) {
            System.out.println("username null error");
            return null;
        }
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!"+userDetails.getUsername());
        System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!"+userDetails.getAuthorities());

        return new UsernamePasswordAuthenticationToken(userDetails, null, authorities);
    }


    @Override
    public boolean isTokenValid(HttpServletRequest request){
        Claims claims = extractClaims(request);

        if (claims == null) {
            System.out.println("claims null error");
            return false;
        }

        if(claims.getExpiration().before(new Date())) return false;
        return true;
    }



        private Claims extractClaims(HttpServletRequest request){
            String token = SecurityUtils.extractAuthTokenFromRequest(request);

            if(token == null){
                System.out.println("token null error");
                return null; //request에서 토큰을 가져오고, 토큰이 null이 아닐 경우에 시크릿키를 사용해 다시 암호를 풀어
                             //Claims (name/value 쌍으로 이루어진 값들) 형식으로 가져옴
            }
            Key key = Keys.hmacShaKeyFor(JWT_SECRET.getBytes(StandardCharsets.UTF_8));

            return Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
    }
}
