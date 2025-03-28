import React from "react";
import Me from "../assets/Me.png"; 

function Hero() {
  return (
    <div className="flex items-center justify-between h-screen px-32">
      {/* Left Side - Text */}
      <div className="text-left">
        <h1 className="text-8xl font-preahvihear font-bold leading-tight animate-fade-in-up">
          Hi <br />
          I'm <span className="text-purple-500">Pushpesh</span>
        </h1>
        <p className="text-2xl text-gray-400 max-w-xl mt-6 animate-fade-in-down">
          Full-Stack Developer crafting clean & efficient web solutions.
        </p>
      </div>

      {/* Right Side - Larger Image, Adjusted Position */}
      <div className="mr-10"> 
        <img src={Me} alt="me" className="w-[400px] h-[400px] object-cover rounded-full" />
      </div>
    </div>
  );
}

export default Hero;
