package org.pgm.productseller.service;

import org.pgm.productseller.model.Product;

import java.util.List;

public interface ProductService {
    Product saveProduct(Product product);
    void deleteProduct(Long id);
    List<Product> findAllProducts();
}
