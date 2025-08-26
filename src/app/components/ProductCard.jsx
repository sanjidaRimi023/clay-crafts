"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {

  if (!product) {
    return null; 
    }
    
  const [isFavorite, setIsFavorite] = useState(false);

    
const handleAddToCart = () => {
  Swal.fire({
    title: "Added to Cart!",
    text: `${product.name} has been added to your cart.`,
    icon: "success",
    confirmButtonColor: "#E2725B"
  });
    };
    
const toggleFavorite = () => {
  setIsFavorite(!isFavorite);
  if (!isFavorite) {
    toast.success("Added to Favorites ❤️");
  } else {
    toast("Removed from Favorites", { icon: "💔" });
  }
};

  return (
    <motion.div
      className="group relative w-full max-w-sm mx-auto overflow-hidden bg-[#8B5E3C] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
      layout
    >
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
         width={600} height={400}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        {/* Wishlist Button */}
        <motion.button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 z-10 p-2 bg-white/70 rounded-full backdrop-blur-sm transition hover:bg-white"
          whileTap={{ scale: 0.9 }}
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
            }`}
          />
        </motion.button>
      </div>

      <div className="p-4">
        {/* Category Tag */}
        <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wider text-[#eb3915] uppercase bg-[#ece1de] rounded-full">
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="mt-2 text-xl font-bold text-gray-800 dark:text-white truncate">
          {product.name}
        </h3>

        {/* Product Description */}
        <p className="mt-1 text-sm text-gray-300 h-10 overflow-hidden text-ellipsis">
          {product.description}
              </p>
              <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
            ${product.price}
          </span>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-4">
          
          <button onClick={handleAddToCart} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-900 bg-[#ece1de] rounded-lg hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900">
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
          <Link href={`/products/${product._id}`}>
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-[#E2725B] rounded-lg hover:bg-[#d45f49] transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
