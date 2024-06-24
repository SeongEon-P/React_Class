package com.example.shopbackend.controller;


import com.example.shopbackend.model.Purchase;
import com.example.shopbackend.security.UserPrinciple;
import com.example.shopbackend.service.PurchaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/purchase")
public class PurchaseController {

    private final PurchaseService purchaseService;

    @PostMapping
    public ResponseEntity<Object> savePurchase(@RequestBody Purchase purchase) {
        return new ResponseEntity<>(purchaseService.savePurchase(purchase), HttpStatus.CREATED);
    }

    @GetMapping("/getList")
    public ResponseEntity<Object> getAllPurchaseOfUser(@AuthenticationPrincipal UserPrinciple userPrinciple) {
        System.out.println("-----------------------" + userPrinciple.getUsername());
        return ResponseEntity.ok(purchaseService.findPurchaseItemsOfUser(userPrinciple.getUsername()));
    }

}
