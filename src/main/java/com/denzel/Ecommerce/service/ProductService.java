package com.denzel.Ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.denzel.Ecommerce.model.Product;
import com.denzel.Ecommerce.repository.ProductRepository;


@Service
public class ProductService {

    @Autowired
    public ProductRepository repository;
    
    public List<Product> getAllProducts(){
        return repository.findAll();
    }

    public Product geProductById(int Id){
        return repository.findById(Id).get();
    }

    public void addProduct(Product prod){
        repository.save(prod);
    }

    public void updateProduct(Product prod){
        repository.save(prod);
    }

    public void deleteProduct(int id){
        repository.deleteById(id);
    }
}
