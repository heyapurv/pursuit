import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import CommingSoon from "./CommingSoon";
import Image from "next/image";

export default function GradientAnim() {
  return (
    <BackgroundGradientAnimation>
      {/* Desktop View */}
      <div className="md:block hidden">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center my-5">
          <Image
  height={200}
  width={200}
  className="md:w-[180px] md:h-[180px] lg:w-[250px] lg:h-[250px]" 
  src="https://ssgmce.ac.in/pursuit2024/img/small-logo.png"
  alt="Pursuit Logo"
/>
          </div>
          <div className="absolute z-50 inset-0 flex items-center justify-center gap-10 text-white font-bold px-4 pointer-events-none text-center">
            <p className="text-6xl md:text-7xl lg:text-9xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              PURSUIT
            </p>
           
            <p className="text-6xl md:text-7xl lg:text-9xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              2025
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold pointer-events-none">
        <Image
  height={150}
  width={150}
  className="w-[120px] h-[120px] sm:w-[120px] sm:h-[120px]"
  src="https://ssgmce.ac.in/pursuit2024/img/small-logo.png"
  alt="Pursuit Logo"
/>

        <div className="flex gap-2 justify-center items-center my-10">
        <p className="text-5xl sm:text-[70px] bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 ">
            PURSUIT
          </p>
      
          <p className="text-5xl sm:text-[70px] bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            2025
          </p>
        </div>
       
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
