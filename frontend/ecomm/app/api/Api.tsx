import axios from "axios";
import { ok } from "node:assert";
import { json } from "node:stream/consumers";

interface Product{
    id: number;
    name: string;
    desription: string;
    price: number;
    brand:string;
    category: string;
    date: Date;
    available: boolean;
    releaseDate: string;
}

const API_URL = 'http://localhost:8080/api';

export async function getProducts(): Promise<Product[]> {
    const results = await fetch(`${API_URL}/products`);

    if(!results.ok){
        throw new Error('failed to fetch products')
    }

    return results.json();
    
}

export async function getProduct(id: number):Promise<Product>{
    
    const results = await fetch(`${API_URL}/products/${id}`);
    
    if(!results.ok){
        throw new Error("failed to fetch product");
    }

    return results.json();
}

