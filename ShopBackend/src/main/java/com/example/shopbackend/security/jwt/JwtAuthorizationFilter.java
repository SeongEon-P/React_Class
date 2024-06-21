package com.example.shopbackend.security.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;


public class JwtAuthorizationFilter extends OncePerRequestFilter {
    //OncePerRequestFilterClass: Http Request의 한 번의 요청에 대해 한 번만 실행하는 Filter
    //예:컨트롤러에서 Forwarding이 발생하면 FilterChain이 다시 동작하여 인증처럼 딱 한번만
    //수행하도록하여 Logic이 불필요하게 여러번 수행될 수 있는 것을 막아줌
    @Autowired
    private JwtProvider jwtProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        Authentication authentication = jwtProvider.getAuthentication(request);

        if(authentication != null && jwtProvider.isTokenValid(request)) {
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
    }
}
