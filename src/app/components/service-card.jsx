import React from "react";
const ServiceCard = ({ icon, title, description, overlayColor }) => {

    return (
       <div 
      className="relative h-96 w-full overflow-hidden group"
      style={{
         backgroundImage: "url('/hand.jpg')" ,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Content Overlay */}
      <div className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center text-center p-6 text-white transition-all duration-300 ${overlayColor}  z-10`}>
        <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-base leading-relaxed opacity-90">
          {description}
        </p>
      </div>
      
    
      <span className="absolute top-0 left-0 w-1/2 h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out z-20"></span>
    </div>
  );
};

export default ServiceCard;
