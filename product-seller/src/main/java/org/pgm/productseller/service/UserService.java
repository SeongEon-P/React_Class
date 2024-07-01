package org.pgm.productseller.service;

import org.pgm.productseller.model.Role;
import org.pgm.productseller.model.User;

import java.util.Optional;

public interface UserService {
    User saveUser(User user);
    Optional<User> findByUsername(String username);
    void changeRole(Role newRole, String username);
}
