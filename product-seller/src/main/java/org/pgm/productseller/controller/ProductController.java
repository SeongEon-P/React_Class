package org.pgm.productseller.controller;

import lombok.RequiredArgsConstructor;
import org.pgm.productseller.model.Product;
import org.pgm.productseller.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/product")
public class ProductController {
    private final ProductService productService;

    @PostMapping
    public ResponseEntity<Object> saveProduct(@RequestBody Product product){
        return new ResponseEntity<>(productService.saveProduct(product) , HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Object> getAllProducts(){
        return new ResponseEntity<>(productService.findAllProducts(), HttpStatus.OK);
    }

    @DeleteMapping("{productId}")
    public ResponseEntity<Object> deleteProduct(@PathVariable  Long productId){
        productService.deleteProduct(productId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
