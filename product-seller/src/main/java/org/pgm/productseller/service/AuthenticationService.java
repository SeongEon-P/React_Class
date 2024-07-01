package org.pgm.productseller.service;

import org.pgm.productseller.model.User;

public interface AuthenticationService {
    public User signInAndReturnJWT(User signInRequest);
}
