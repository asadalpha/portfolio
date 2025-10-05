"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

interface MinimalArrowButtonProps {
  label: string;
  onClick?: ComponentProps<"button">["onClick"];
  className?: string;
  hoverColor?: string;
  baseColor?: string;
}

export default function MinimalArrowButton({
  label,
  onClick,
  className = "",
  hoverColor = "rgba(255,255,255,0.9)",
  baseColor = "rgba(255,255,255,0.7)",
}: MinimalArrowButtonProps) {
  const buttonVariants = {
    rest: { color: baseColor, borderColor: baseColor },
    hover: { color: hoverColor, borderColor: hoverColor },
    tap: { scale: 0.97 },
  } as const;

  const arrowVariants = {
    rest: { x: 0 },
    hover: { x: 8 },
  } as const;

  const textVariants = {
    rest: { opacity: 1, x: 0 },
    hover: { opacity: 1, x: 2, transition: { type: "spring", stiffness: 200 } },
  } as const;

  return (
    <motion.button
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      onClick={onClick}
      className={[
        "relative inline-flex items-center gap-3",
        "rounded-full border px-6 py-2.5 font-medium",
        "transition-colors duration-300 bg-transparent",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className,
      ].join(" ")}
    >
      <motion.span
        variants={textVariants}
        className="text-base tracking-wide"
      >
        {label}
      </motion.span>

      <motion.svg
        variants={arrowVariants}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1"
      >
        <path
          d="M12 5l6 6m0 0-6 6m6-6H6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </motion.button>
  );
}
