"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import data from "@/data/data.json";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  redirectedUrl: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.a
      href={project.redirectedUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group block relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* LEFT: Content */}
        <motion.div
          className="order-2 md:order-1 flex flex-col justify-between text-left p-6 md:p-8 h-full"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
        >
          <div>
            <motion.p
              className="font-mono text-xs text-gray-400 mb-2 tracking-wider uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
            >
              [{String(index + 1).padStart(2, "0")}]
            </motion.p>
            <motion.h2
              className="font-sans text-2xl sm:text-3xl font-bold mb-3 leading-tight"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
            >
              {project.title}
            </motion.h2>
            <motion.p
              className="font-mono text-sm text-gray-300 max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
            >
              {project.description}
            </motion.p>
          </div>

          {/* CTA at bottom */}
          <motion.div
            className="mt-6 inline-flex items-center gap-2 text-xs text-gray-400 font-mono uppercase tracking-wider opacity-70 group-hover:text-white group-hover:opacity-100 transition-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.6 }}
          >
            View Project
            <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image */}
        <motion.div
          className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: index * 0.15 + 0.3 }}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projects: Project[] = data.projects;

  return (
    <section
      ref={sectionRef}
      className="relative text-white py-20 px-6 md:px-16 lg:px-32"
    >
      {/* Section Title */}
      <motion.h2
        className="font-serif text-lg md:text-xl font-medium mb-32 text-center tracking-[0.15em]"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        [ SELECTED WORK ]
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="space-y-32 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
