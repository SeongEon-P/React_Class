package org.pgm.productseller.service;

import lombok.RequiredArgsConstructor;
import org.pgm.productseller.model.Purchase;
import org.pgm.productseller.model.User;
import org.pgm.productseller.repository.PurchaseRepository;
import org.pgm.productseller.repository.UserRepository;
import org.pgm.productseller.repository.projection.PurchaseItem;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PurchaseServiceImpl implements PurchaseService{
    private final PurchaseRepository purchaseRepository;
    private final UserRepository userRepository;

    @Override
    public Purchase savePurchase(Purchase purchase) {
        purchase.setPurchaseTime(LocalDateTime.now());
        return purchaseRepository.save(purchase);
    }
    @Override
    public List<PurchaseItem> findPurchaseItemsOfUser(String username) {
        User user=userRepository.findByUsername(username).orElseThrow();
        return purchaseRepository.findAllPurchasesOfUser(user.getId());
    }
}
