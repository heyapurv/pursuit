import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import CommingSoon from "./CommingSoon";
import HyperText from "../magicui/hyper-text";

export default function GradientAnim() {
  return (
    <BackgroundGradientAnimation>
      <div className="md:block hidden">
        <div className="  absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-8xl text-center md:text-4xl lg:text-9xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            PURSUIT
          </p>
          <p className=" md:mx-5 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            X
          </p>
          <p className="md:mx-5 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            2025
          </p>
          <div className="absolute mt-40 text-xl flex">
            {/* <CommingSoon/> */}
            <span className="mr-8">
              <HyperText
                className="text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                text="C"
              />
            </span>
            <span className="mx-8">
              <HyperText
                className="text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                text="O"
              />
            </span>
            <span className="mx-8">
              <HyperText
                className="text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                text="M"
              />
            </span>
            
            <span className="mx-8">
              <HyperText
                className="text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                text="I"
              />
            </span>
            <span className="mx-8">
              <HyperText
                className="text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                text="N"
              />
            </span>
            <span className="mx-8">
              <HyperText
                className="text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                text="G"
              />
            </span>
           <div className="ml-10  flex">
            
           <span className="mx-8">
              <HyperText
                className="text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                text="S"
              />
            </span>
            <span className="mx-8">
              <HyperText
                className="text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                text="O"
              />
            </span>
            <span className="mx-8">
              <HyperText
                className="text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                text="O"
              />
            </span>
            <span className="mx-8">
              <HyperText
                className="text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
                text="N"
              />
            </span>
           </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="  absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold pointer-events-none   ">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-[78px] ">
            PURSUIT
          </p>
          <p className=" mx-5 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-6xl my-5">
            X
          </p>
          <p className="mx- bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-[78px]">
            2025
          </p>
          <CommingSoon />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
