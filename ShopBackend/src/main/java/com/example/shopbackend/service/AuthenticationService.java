package com.example.shopbackend.service;

import com.example.shopbackend.model.User;

public interface AuthenticationService {
    User signInAndReturnJWT(User signInRequest); //interface에서는 public 생략해도됨. 그래서 public 적어도 회색으로 표시됨

}
