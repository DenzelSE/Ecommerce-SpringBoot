interface Product{
    id: number;
    name: string;
    description: string;
    price: number
}

const API_URL = 'http://localhost:8080/api';

export async function getProducts(): Promise<Product[]> {
    const res = await fetch(`${API_URL}/products`);

    if(!res.ok){
        throw new Error('failed to fetch products')
    }

    return res.json();
    
}
