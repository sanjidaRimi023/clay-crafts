import Image from "next/image";
import React from "react";

export default function OurGallery() {
  return (
    <>
      <section className="bg-[#D4B996]">
        <div>
          <h2>A Glimpse of Our Creations</h2>
          <p>
            Every design tells a story—of earth, hands, and heart. Discover
            pottery that brings warmth and charm into your home
          </p>
          <div>
            <Image
              src="/bannerImg.png"
              width={600}
              height={600}
              alt="Pottery collection"
            //   className="w-full h-auto rounded"
            />
          </div>
        </div>
      </section>
    </>
  );
}
