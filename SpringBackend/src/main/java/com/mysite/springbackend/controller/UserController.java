package com.mysite.springbackend.controller;

import com.mysite.springbackend.entity.User;
import com.mysite.springbackend.exception.UserNotFoundException;
import com.mysite.springbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    public User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id){
        return userRepository.findById(id).orElseThrow(() ->new UserNotFoundException(id));
    }

}


