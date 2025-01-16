interface Product{
    id: number;
    name: string;
    description: string;
    price: number
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
    console.log("id:"+ id)
    const results = await fetch(`${API_URL}/products/${id}`);
    
    console.log("i get here")

    if(!results.ok){
        throw new Error("failed to fetch product");
    }

    return results.json();
}

