"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";

interface ParagraphProps {
  paragraph: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <p
      ref={container}
      className="
        flex flex-wrap justify-center text-center text-white 
        text-[20px] sm:text-[28px] md:text-[36px] lg:text-[40px]   // 👈 responsive text sizes
        leading-tight sm:leading-snug md:leading-none
        p-4 sm:p-6 md:p-10 
        max-w-[1280px] mx-auto
      "
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-2 sm:mr-3 mt-2 sm:mt-3">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
