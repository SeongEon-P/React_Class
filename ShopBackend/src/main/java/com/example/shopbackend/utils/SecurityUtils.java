package com.example.shopbackend.utils;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.util.StringUtils;

public class SecurityUtils {
    private static final String ROLE_PREFIX = "ROLE_";

    private static final String AUTH_HEADER = "authorization";
    private static final String AUTH_TOKEN_TYPE = "Bearer";
    private static final String AUTH_TOKEN_PREFIX = AUTH_TOKEN_TYPE + " ";

    public static String extractAuthTokenFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTH_HEADER);

        if(StringUtils.hasLength(bearerToken) && bearerToken.startsWith(AUTH_TOKEN_PREFIX)) {
            return bearerToken.substring(7); // 토큰 부분만 잘라서 리턴
        }
        return null; //없을 경우
    }


    public static SimpleGrantedAuthority convertToAuthority(String role){
        String formatRole = role.startsWith(ROLE_PREFIX)? role: ROLE_PREFIX + role;
        return new SimpleGrantedAuthority(formatRole);
    }
}
