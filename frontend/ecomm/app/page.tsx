import Image from "next/image";
import { getProducts } from "./api/Api";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  const products = await getProducts();
  
  return (
    <div>
      <h2>Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) =>(
              <ProductCard key={product.id} product={product}/>))}
      </div>
    </div>
  );
}
