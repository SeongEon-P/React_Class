package com.example.shopbackend.controller;

import com.example.shopbackend.model.User;
import com.example.shopbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/home")
    public String Home() {
        return "Hello World";
    }

    @PostMapping("/user")
    public User newUser(@RequestBody User newUser) {
        return userService.saveUser(newUser);
    }

    @GetMapping("/users")
    public List<User> findAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/user/{username}")
    public Optional<User> getUserByUsername(@PathVariable String username) {
        return userService.findByUsername(username);
    }

    @PutMapping("user")
    public void changeRole(@RequestBody User user){
        userService.changeRole(user.getRole(), user.getUsername());
    }
}
