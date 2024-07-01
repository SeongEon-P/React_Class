package org.pgm.productseller.service;

import org.pgm.productseller.model.Purchase;
import org.pgm.productseller.repository.projection.PurchaseItem;

import java.util.List;

public interface PurchaseService {
    Purchase savePurchase(Purchase purchase);
    List<PurchaseItem> findPurchaseItemsOfUser(String username);
}
