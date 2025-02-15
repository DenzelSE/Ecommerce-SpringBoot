import Link from "next/link";

interface Product{
    id: number;
    name: string;
    desription: string;
    price: number;
    category: string;
    releaseDate: string;
    available: boolean;
    brand:string;
}

export default function ProductCardID({product}: {product: Product}){
    
    return(
        <Link href={`/product/${product.id}`}>
            <div className="border rounded-lg p-4 shadow-md">
                <p className="text-gra-600 mb-2">{product.id}</p>
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gra-600 mb-2">{product.price.toFixed(2)}</p>
                <p className="text-gra-600">{product.category}</p>
                <p className="text-gra-600 mb-2">{product.desription}</p>
                <p className="text-gra-600 mb-2">{product.brand}</p>
                <p className="text-gra-600 mb-2">{product.releaseDate}</p>
                <p className="text-gra-600 mb-2">{product.available}</p>

            </div>
        </Link>
    )
}