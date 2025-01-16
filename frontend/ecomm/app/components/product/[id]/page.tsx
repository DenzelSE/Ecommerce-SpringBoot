import { getProduct } from "@/app/api/Api";
import ProductCard from "../../ProductCard";


export default async function Product(id:number) {
    console.log("callling")
    const product = getProduct(id)

    return (
        <div>
            <p>Product</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <ProductCard key={product.id} product={product}/> */}
                <h1>{(await product).name}</h1>
                </div>
        </div>
    )

}