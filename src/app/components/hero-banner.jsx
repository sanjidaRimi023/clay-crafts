import Image from "next/image";
import React from "react";

export default function HeroBanner() {
  return (
    <>
    
      <section className="bg-gradient-to-r from-[#d3864c] to-[#ebada0] md:pt-24 pb-12 lg:py-20 overflow-hidden">
        <div className="container mx-auto relative px-4 lg:px-0">
        
          <div className="relative w-full lg:w-1/2 z-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold playfair text-stone-800">
              Bringing the earth's beauty to your home.
            </h1>
            <p className="text-lg mt-4 text-stone-700 max-w-lg mx-auto lg:mx-0">
              Adding warmth and charm with every handcrafted piece.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              <button className="bg-white text-[#d3864c] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-stone-100 transition-colors">
                Shop Now
              </button>
              <button className="text-white font-semibold py-2 px-6 rounded-md hover:bg-white/20 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div
            className="
            relative mt-16 w-full max-w-xl mx-auto                
            lg:absolute lg:mt-0 lg:-top-16 lg:right-0 lg:w-1/2 lg:max-w-none 
          "
          >
            <div className="bg-gradient-to-t from-[#c08b66] to-[#ebd8ca] p-8 rounded-t-full shadow-xl">
              <Image
                src="/bannerImg.png"
                width={600}
                height={600}
                alt="Pottery collection"
                className="w-full h-auto rounded" // ছবির কোণাও হালকা গোলাকার করা হলো
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
