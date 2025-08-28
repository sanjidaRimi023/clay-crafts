"use client";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 items-center bg-[#FAF3E0] justify-center min-h-screen">
      
        <div className="w-8 h-8 relative transform rotate-45">
          <div
            className="absolute  bg-[#E2725B] w-3.5 h-3.5 animate-ping"
            style={{
              top: 0,
              left: 0,
              animationDuration: "1.2s",
            }}
          ></div>
          <div
            className="absolute bg-[#E2725B] w-3.5 h-3.5 animate-ping"
            style={{
              top: 0,
              right: 0,
              animationDuration: "1.2s",
              animationDelay: "0.15s",
            }}
          ></div>
          <div
            className="absolute bg-[#E2725B] w-3.5 h-3.5 animate-ping"
            style={{
              bottom: 0,
              right: 0,
              animationDuration: "1.2s",
              animationDelay: "0.3s",
            }}
          ></div>
          <div
            className="absolute bg-[#E2725B] w-3.5 h-3.5 animate-ping"
            style={{
              bottom: 0,
              left: 0,
              animationDuration: "1.2s",
              animationDelay: "0.45s",
            }}
          ></div>
        </div>
          
           <p className="text-lg font-semibold text-[#a8754e]">
          Crafting beauty, please wait...
        </p>
    </div>
  );
}
