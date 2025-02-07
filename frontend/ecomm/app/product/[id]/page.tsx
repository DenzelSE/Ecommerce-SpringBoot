import { getProduct } from "@/app/api/Api";
import ProductCard from "../../components/ProductCard";
import ProductCardID from "@/app/components/ProductCardID";


export default async function Product({params}:any) {
    const {id} = await params;
    const product = await getProduct(id)
    console.log(product);
    return (
        <div>
            <p>Product</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProductCardID key={product.id} product={product}/>
         
                </div>
        </div>
    )

}