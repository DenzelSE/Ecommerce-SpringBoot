package com.denzel.Ecommerce.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.denzel.Ecommerce.model.Product;
import com.denzel.Ecommerce.repository.ProductRepository;


@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;
    
    public List<Product> getAllProducts(){
        return repository.findAll();
    }

    public Product geProductById(int Id){
        return repository.findById(Id).orElse(null);
    }

    public Product addProduct(Product prod, MultipartFile imagFile) throws IOException{
        prod.setImageName(imagFile.getOriginalFilename());
        prod.setImageType(imagFile.getContentType());
        prod.setImageData(imagFile.getBytes());
        return repository.save(prod);
    }

    public void updateProduct(Product prod){
        repository.save(prod);
    }

    public void deleteProduct(int id){
        repository.deleteById(id);
    }
}
