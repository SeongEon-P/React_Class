package org.pgm.productseller.controller;

import lombok.RequiredArgsConstructor;
import org.pgm.productseller.model.Purchase;
import org.pgm.productseller.security.UserPrinciple;
import org.pgm.productseller.service.PurchaseService;
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
    public ResponseEntity<Object> savePurchase(@RequestBody Purchase purchase){
        return new ResponseEntity<>(purchaseService.savePurchase(purchase), HttpStatus.CREATED);
    }

    @GetMapping("/getList")
    public ResponseEntity<Object> getAllPurchasesOfUser(@AuthenticationPrincipal UserPrinciple userPrinciple){
         return ResponseEntity.ok(purchaseService.findPurchaseItemsOfUser(userPrinciple.getUsername()));
    }
}
