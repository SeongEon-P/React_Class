package com.example.shopbackend.service;

import com.example.shopbackend.model.Purchase;
import com.example.shopbackend.model.User;
import com.example.shopbackend.repository.PurchaseRepository;
import com.example.shopbackend.repository.UserRepository;
import com.example.shopbackend.repository.projection.PurchaseItem;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PurchaseServiceImpl implements PurchaseService {
    private final UserRepository userRepository;
    private final PurchaseRepository purchaseRepository;

    @Override
    public Purchase savePurchase(Purchase purchase) {
        purchase.setPurchaseTime(LocalDateTime.now());
        return purchaseRepository.save(purchase);
    }

    @Override
    public List<PurchaseItem> findPurchaseItemsOfUser(String username) {
        User user = userRepository.findByUsername(username).orElseThrow();
        return purchaseRepository.findAllPurchaseOfUser(user.getId());
    }
}
