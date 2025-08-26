import React from "react";
import { Eye, ShoppingCart } from "lucide-react";
import { getProducts } from "../actions/productAction";
import Link from "next/link";

export default async function NewProducts() {
  const data = await getProducts();

  return (
    <section
      className="py-16 md:py-24 bg-cover"
      style={{ backgroundImage: "url('/banner4.jpg')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-white md:text-5xl playfair font-bold">
            Our New Arrivals
          </h2>
          <p className="mt-4 text-white max-w-2xl mx-auto roboto">
            Discover our latest collection of handcrafted pottery, designed to
            bring warmth and elegance to your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 roboto">
          {data &&
            data.slice(0, 6).map((item) => (
              <div
                key={item._id}
                className="group bg-[#D4B996] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col"
              >
                {/* Image Container */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#4A2C2A]">
                    {item.name}
                  </h3>
                  <p className="text-sm mt-2 flex-grow">{item.detail}</p>
                  <div className="flex justify-between mt-4">
                    <div className="text-[#4A2C2A] font-bold text-lg">
                      $ {item.price} Only
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/products/${item._id.toString()}`}
                        className="p-2 rounded-md bg-red-500 hover:bg-red-600 transition-colors duration-300"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                      <button
                        className="p-2 rounded-md bg-red-500 hover:bg-red-600 transition-colors duration-300"
                        aria-label="Add to Cart"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
