package com.example.shopbackend.service;

import com.example.shopbackend.model.Role;
import com.example.shopbackend.model.User;

import java.util.List;
import java.util.Optional;


public interface UserService {
    User saveUser(User user);

    Optional<User> findByUsername(String username);

    List<User> findAll();

    void changeRole(Role newRole, String username);
}
