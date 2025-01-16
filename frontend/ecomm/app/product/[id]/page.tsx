import { getProduct } from "@/app/api/Api";
import ProductCard from "../../components/ProductCard";


export default async function Product({params}:any) {
    const {id} = params;
    const product = await getProduct(id)

    return (
        <div>
            <p>Product</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProductCard key={product.id} product={product}/>
         
                </div>
        </div>
    )

}