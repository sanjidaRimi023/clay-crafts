import React from "react";
import { getProducts } from "../actions/productAction";
import ProductCard from "../components/ProductCard";


export default async function ProductsPage() {
  const products = await getProducts();
  
  if (!products || products.length === 0) {
    return <p className="text-center mt-10">No products found.</p>;
  }
   
  const plainProducts = products.map((product) => ({
    ...product,
    _id: product._id.toString(),

  }));

  return (
    <div className="bg-[#FAF3E0] min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 playfair mb-4">
          Our Collections
        </h1>
        <p className="text-lg text-center text-gray-800 roboto mb-12">
          Discover handcrafted pieces made with passion.
        </p>

        {/* Products Grid */}
        <div className="roboto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {plainProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}