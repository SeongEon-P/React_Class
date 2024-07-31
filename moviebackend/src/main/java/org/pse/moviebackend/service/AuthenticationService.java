package org.pse.moviebackend.service;

import org.pse.moviebackend.model.User;

public interface AuthenticationService {
    public User signInAndReturnJWT(User signInRequest);
}
