package com.denzel.Ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.denzel.Ecommerce.model.Product;
import com.denzel.Ecommerce.service.ProductService;

import jakarta.persistence.Id;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {

    @Autowired  
    public ProductService service;
    
    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return service.getAllProducts();
    }

    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable int id){
        return service.geProductById(id);
    }
}
