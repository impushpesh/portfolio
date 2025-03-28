import React from "react";
import Me from "../assets/Me.png"; 
import avatar from "../assets/avatar.png";
import space from "../assets/space.svg";

function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36 relative">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img src={avatar} alt="Avatar" width={40} height={40} className="img-cover" />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-green-500">
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 font-preahvihear">
            Hi, I'm Pushpesh, a full stack developer.
          </h2>
          <div className="text-lg text-zinc-700 leading-relaxed">
            <p>Passionate about crafting beautiful, functional experiences.</p>
            <p>Experienced in full stack development and modern web tech.</p>
            <p>Always learning and exploring innovative solutions.</p>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div
            className="absolute inset-0 z-[-1] rounded-full"
            style={{ background: 'radial-gradient(circle at center, #1d1a43 0%, #2a2651 50%, #403476 100%)' }}
          ></div>
          <figure className="w-full max-w-[480px] ml-auto overflow-hidden animate-float relative">
            <img src={space} alt="Floating Space" width={656} height={800} className="w-full" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
