package org.pse.moviebackend.controller;

import lombok.RequiredArgsConstructor;
import org.pse.moviebackend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/authentication")
@RequiredArgsConstructor
public class UsernameCheckController {

    private final UserService userService;

    @GetMapping("check-username")
    public ResponseEntity<Object> checkUsername(@RequestParam String username) {
        if (userService.findByUsername(username).isPresent()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
