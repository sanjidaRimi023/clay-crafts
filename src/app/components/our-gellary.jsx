'use client';
import React, { useEffect, useState } from 'react';
// Corrected import from 'framer-motion'
import { motion, AnimatePresence } from 'framer-motion';

// Your image data
const itemsData = [
  { image: "https://i.ibb.co/rRdNyDV7/2.jpg", title: "Terracotta Vase", description: "Hand-thrown with a rustic finish." },
  { image: "https://i.ibb.co/fV1N9N8b/3.jpg", title: "Cream Glazed Mug", description: "Perfect for your morning coffee." },
  { image: "https://i.ibb.co/1fzCn6mH/4.jpg", title: "Olive Green Planter", description: "A touch of nature for your home." },
  { image: "https://i.ibb.co/CK8QRmpB/5.jpg", title: "Minimalist Bowl Set", description: "Simple elegance for any table." },
  { image: "https://i.ibb.co/1fZyGDG6/8.jpg", title: "Earthenware Jug", description: "Inspired by traditional designs." },
  { image: "https://i.ibb.co/pBK5GC9J/9.jpg", title: "Decorative Plate", description: "A statement piece for any wall." },
  { image: "https://i.ibb.co/5W2KxRtm/7.jpg", title: "Sandy Beige Pot", description: "Subtle texture and a warm feel." },
  { image: "https://i.ibb.co/xKv0B0vf/11.jpg", title: "Turquoise Accent Dish", description: "A pop of vibrant color." },
  { image: "https://i.ibb.co/Hf6679Kw/12.jpg", title: "Clay Cooking Pot", description: "For slow-cooked, flavorful meals." },
  { image: "https://i.ibb.co/rK78FVnQ/13.jpg", title: "Rustic Serving Platter", description: "Hand-carved detailing." },
  { image: "https://i.ibb.co/Mx5k6TgZ/10.jpg", title: "Small Bud Vase", description: "Delicate form for single stems." },
];

// The interactive gallery strip component
function OurGallery({ items, setIndex, setOpen, index }) {
  // We set a default index to keep one image expanded initially
  const defaultIndex = 5;

  return (
    <motion.div 
      className="rounded-md w-fit mx-auto md:gap-2 gap-1 flex pb-20 pt-10"
     
      onMouseLeave={() => setIndex(defaultIndex)}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={`relative rounded-2xl overflow-hidden ${
            index === i
              ? 'w-[250px]' 
              : 'w-[14px] sm:w-[20px] md:w-[30px] xl:w-[50px]'
          } h-[250px] md:h-[300px] flex-shrink-0 object-cover transition-[width] ease-in-out duration-500 shadow-lg border-2 border-[#FAF3E0]`}
          onMouseEnter={() => setIndex(i)}
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.95 }}
        >
       
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover cursor-pointer"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400/D4B996/4A2C2A?text=Error'; }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function GallerySection() {
  const [index, setIndex] = useState(5); 
  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <section className="bg-[#D4B996] py-16 md:py-24 font-roboto relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        

        <div className="text-center mb-4 md:mb-8">
          <h2 
            className="font-playfair text-4xl md:text-5xl font-bold text-[#8B5E3C] mb-4"
            style={{ textShadow: '1px 1px 2px rgba(74, 44, 42, 0.1)' }}
          >
            From Our Hands to Your Home
          </h2>
          <p className="text-lg text-[#4A2C2A] max-w-3xl mx-auto">
            A glimpse into our studio's creations. Each piece is a unique blend of earth, water, and fire, crafted with passion.
          </p>
        </div>

        <OurGallery
          items={itemsData}
          index={index}
          setIndex={setIndex}
          setOpen={setOpen}
        />

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-[#4A2C2A]/50 backdrop-blur-md fixed inset-0 z-50 grid place-content-center cursor-pointer"
              onClick={() => setOpen(false)}
            >
        
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="w-[90vw] max-w-[500px] h-auto bg-[#FAF3E0] rounded-2xl shadow-2xl p-4 cursor-default"
              >
                <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-4">
                 
                  <img
                    src={itemsData[index].image}
                    alt={itemsData[index].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <article>
                  <h3 className="font-playfair text-2xl font-bold text-[#8B5E3C]">
                    {itemsData[index].title}
                  </h3>
                  <p className="text-md text-[#4A2C2A] mt-1">
                    {itemsData[index].description}
                  </p>
                </article>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
