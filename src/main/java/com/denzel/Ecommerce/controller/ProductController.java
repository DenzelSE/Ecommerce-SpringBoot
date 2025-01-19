package com.denzel.Ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.denzel.Ecommerce.model.Product;
import com.denzel.Ecommerce.service.ProductService;


@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {

    @Autowired  
    private ProductService service;
    
    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts(){
        return new ResponseEntity<>(service.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable int id){
        Product product = service.geProductById(id);
        if (product != null){
        return new ResponseEntity<>(product,HttpStatus.OK);

        }
        else{
        return new ResponseEntity<>(product,HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/products")
    public ResponseEntity<?> addProduct(@RequestPart Product prod, @RequestPart MultipartFile imageFile){

        try {
            Product product1 = service.addProduct(prod, imageFile);
            return new ResponseEntity<>(product1, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    } 

    @GetMapping("/products/{prodId}/image")
    public ResponseEntity<byte[]> getImageByproductId(@PathVariable int prodId){

        Product product = service.geProductById(prodId);
        byte[] imageFile = product.getImageData();

        return ResponseEntity.ok()
                    .contentType(MediaType.valueOf(product.getImageType()))
                    .body(imageFile);
    }

    @PutMapping("/products")
    public void updateProduct(@RequestBody Product prod){
        service.updateProduct(prod);
    }

    public void deleteProduct(@ PathVariable int id){
        service.deleteProduct(id);
    }
    
}
