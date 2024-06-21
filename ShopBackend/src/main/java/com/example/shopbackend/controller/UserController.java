package com.example.shopbackend.controller;

import com.example.shopbackend.model.Role;
import com.example.shopbackend.security.UserPrinciple;
import com.example.shopbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PutMapping("change/{role}") //수정하는 거라서 PutMapping
    public ResponseEntity<Object> changeRole(@AuthenticationPrincipal UserPrinciple userPrinciple,
                                             @PathVariable Role role) {
        userService.changeRole(role, userPrinciple.getUsername());
        return ResponseEntity.ok(true);
    }
}
