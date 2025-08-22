import React from "react";
import { ClipboardList, LayoutTemplate, Rocket, LifeBuoy } from "lucide-react";
import ServiceCard from "./service-card";

const Services = () => {
  const ServicesSteps = [
   {
    id: 1,
    icon: <ClipboardList size={48} className="text-white" />,
    title: "Custom Orders",
    description:
      "We craft unique pottery pieces based on your style and preferences, ensuring each item is truly one-of-a-kind.",
    imageUrl: "https://i.ibb.co.com/7dGFcQbV/colleagues-working-office-relaxed-atmosphere.jpg",
   overlayColor: "bg-[#E2725B]/85",
  },
  {
    id: 2,
    icon: <LayoutTemplate size={48} className="text-white" />,
    title: "Handcrafted Design",
    description:
      "Every piece is handmade with care, using traditional techniques combined with modern aesthetics.",
    imageUrl: "https://i.ibb.co.com/DHtdNGyy/design-html-web-design-template-concept.jpg",
    overlayColor: "bg-[#8B0000]/80",
  },
  {
    id: 3,
    icon: <Rocket size={48} className="text-white" />,
    title: "Workshops & Classes",
    description:
      "Join our pottery workshops to learn the art of clay shaping, glazing, and firing directly from skilled artisans.",
    imageUrl: "https://i.ibb.co.com/whntjNhp/side-view-attractive-hispanic-software-developer-programming-using-computer-while-working-from-home.jpg",
    overlayColor: "bg-[#6B8E23]/80",
  },
  {
    id: 4,
    icon: <LifeBuoy size={48} className="text-white" />,
    title: "Care & Support",
    description:
      "We provide guidance on how to care for your pottery to keep it durable and beautiful for years.",
    imageUrl: "https://i.ibb.co.com/zH0M5nNz/concentrated-bearded-call-center-operator-working.jpg",
    overlayColor: "bg-[#40E0D0]/75",
  },
];


  return (
    <section className="w-full py-16 sm:py-24 bg-[#FAF3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-gray-800 playfair sm:text-4xl font-bold xtrabold tracking-tight">
            How We Work
          </h2>
          <p className="mt-4 roboto max-w-2xl text-gray-700 mx-auto text-lg">
            Our streamlined Services ensures quality and efficiency from start to
            finish.
          </p>
        </div>

        {/* Services Steps Grid */}
        <div className="roboto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          {ServicesSteps.map((step, index) => (
            <div
              key={step.id}
              className={`transition-transform duration-300 ${
                index === 1 || index === 3 ? "lg:-translate-y-10" : ""
              }`}
            >
              <ServiceCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                imageUrl={step.imageUrl}
                overlayColor={step.overlayColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
