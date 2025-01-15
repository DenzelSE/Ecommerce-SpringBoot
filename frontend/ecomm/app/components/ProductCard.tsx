
interface Product{
    id: number;
    name: string;
    description: string;
    price: number
}

export default function ProductCard({product}: {product: Product}){
    return(
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gra-600 mb-2">{product.price.toFixed(2)}</p>

        </div>
    )
}