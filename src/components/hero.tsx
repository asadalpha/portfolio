"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./ui/button";
import { Caveat } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".hero-title", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      tl.from(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 30,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.6"
      );

      tl.from(
        ".hero-btn",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-white min-h-screen flex items-center justify-start px-6  overflow-hidden"
    >
      {/* Gradient Blob Background */}
      <span className="blob size-1/2 absolute top-20 right-0 blur-[100px]" />

      {/* Left aligned content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-start text-left space-y-8 pl-6">
        <h1 className="hero-title font-caveat text-gray-100 mb-4 text-3xl md:text-6xl xl:text-5xl font-bold">
          <span >
            Hi, I'm{" "}
            <span className=" transition-colors duration-300 hover:text-violet-400
">
              Asad
            </span>
          </span>
        </h1>

        <p className="hero-subtitle font-normal leading-relaxed text-lg md:text-xl xl:text-2xl mb-4 max-w-2xl text-gray-300">
          A Software Developer and UI Designer, crafting seamless experiences
          that connect user needs and business goals.
        </p>


        <div className="hero-btn mt-8">
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            label="Connect"
          />
        </div>
      </div>
    </section>
  );
}
