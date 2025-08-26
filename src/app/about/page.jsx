import React from "react";
import { Hand, Leaf, Sparkles } from "lucide-react";
export default function About() {
  return (
    <>
      <section className="bg-[#D4B996] py-16 md:py-24 roboto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center flex flex-col items-center mb-12 md:mb-16">
            <h2
              className="font-playfair text-4xl md:text-5xl font-bold text-[#8B5E3C] mb-4"
              style={{ textShadow: "1px 1px 2px rgba(74, 44, 42, 0.1)" }}
            >
              The Story of Our Craft
            </h2>

            <p className="text-[#4A2C2A] mb-4 leading-relaxed">
              Every piece is shaped with care, tradition, and a love for the
              earth. Discover the story behind our art. Our journey began with a
              deep passion for the purity of clay and the art of handcrafting.
              We believe every piece of pottery tells a story—of the artisan's
              patience, the beauty of nature, and a craft passed down through
              generations. We blend modern design with traditional techniques to
              create pieces that bring a touch of artistry into your home. Each
              item is carefully handmade in our studio, ensuring its unique
              character and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
 
            <div className="bg-[#FAF3E0] p-8 rounded-lg shadow-md border border-[#4A2C2A]/20 transform hover:scale-105 hover:shadow-xl transition-transform duration-300">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-[#D4B996] p-4 rounded-full">
                  <Hand className="w-8 h-8 text-[#8B5E3C]" />
                </div>
              </div>
              <h4 className="font-playfair text-2xl font-semibold text-[#8B5E3C] mb-2">
                Handcrafted
              </h4>
              <p className="text-[#4A2C2A]">
                Each of our products is crafted by hand with care and skill,
                making every piece truly unique.
              </p>
            </div>

            {/* Value 2: Eco-Friendly */}
            <div className="bg-[#FAF3E0] p-8 rounded-lg shadow-md border border-[#4A2C2A]/20 transform hover:scale-105 hover:shadow-xl transition-transform duration-300">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-[#D4B996] p-4 rounded-full">
                  <Leaf className="w-8 h-8 text-[#6B8E23]" />
                </div>
              </div>
              <h4 className="font-playfair text-2xl font-semibold text-[#8B5E3C] mb-2">
                Eco-Friendly
              </h4>
              <p className="text-[#4A2C2A]">
                We use natural and sustainable materials, ensuring our craft is
                kind to the environment.
              </p>
            </div>

            {/* Value 3: Unique Designs */}
            <div className="bg-[#FAF3E0] p-8 rounded-lg shadow-md border border-[#4A2C2A]/20 transform hover:scale-105 hover:shadow-xl transition-transform duration-300">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-[#D4B996] p-4 rounded-full">
                  <Sparkles className="w-8 h-8 text-[#E2725B]" />
                </div>
              </div>
              <h4 className="font-playfair text-2xl font-semibold text-[#8B5E3C] mb-2">
                Unique Designs
              </h4>
              <p className="text-[#4A2C2A]">
                Our designs are a perfect blend of modern aesthetics and
                timeless tradition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
