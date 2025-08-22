"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <>
      <section className="bg-[#FAF3E0] py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 items-center">
          {/* Image with Framer Motion */}
        
            <Image
              src="/hand2.jpg"
              width={600}
              height={600}
              alt="Pottery collection"
              className="rounded-lg object-cover"
            />
      

          {/* Text Section */}
          <div className="text-gray-700 flex flex-col roboto justify-center">
            <h1 className="text-2xl md:text-4xl playfair mb-4">
              Discover the Beauty of Handmade Pottery
            </h1>
            <p className="mb-3">
              ClayCraft is your go-to destination for authentic, handcrafted
              pottery—where every piece is more than just art, it's a heritage.
              Our artisans carefully shape each creation with love, patience,
              and dedication, blending cultural tradition with modern design to
              bring the warmth of earth and elegance into your home.
            </p>
            <p className="mb-3">
              From everyday ceramics to timeless décor, every ClayCraft product
              tells a story—of the soil, of the hands that shaped it, and of the
              life it brings into your living spaces.
            </p>
            <p>
              Whether it's functional dinnerware or soulful home accents, our
              collections are designed to inspire your lifestyle and turn
              everyday living into an art form.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
