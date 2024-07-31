package org.pse.moviebackend.service;

import org.pse.moviebackend.model.Role;
import org.pse.moviebackend.model.User;

import java.util.Optional;

public interface UserService {
    User saveUser(User user);
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    void changeRole(Role newRole, String username);
}
