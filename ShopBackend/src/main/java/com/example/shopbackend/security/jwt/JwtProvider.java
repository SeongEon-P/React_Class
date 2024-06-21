package com.example.shopbackend.security.jwt;


import com.example.shopbackend.security.UserPrinciple;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.core.Authentication;


public interface JwtProvider {
    String generateToken(UserPrinciple auth);

    Authentication getAuthentication(HttpServletRequest request);

    boolean isTokenValid(HttpServletRequest request);

}
