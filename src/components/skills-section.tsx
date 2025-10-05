"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const skills = [
  "Python",
  "C/C++",
  "Dart",
  "JavaScript",
  "React.js",
  "Next.js",
  "Flutter",
  "Kotlin",
  "MERN Stack",
  "AWS",
  "Firebase",
  "Supabase",
  "FastAPI",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Git & GitHub",
  "Tailwind CSS",
  "PostgreSQL",
  "Prisma",
]

export default function SkillsShowcase() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  return (
    <section className="min-h-screen p-6 relative px-6 pt-32">
      <div className="max-w-[750px] mx-auto">
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 0.5,
          }}
        >
          {skills.map((skill) => {
            const isActive = activeSkill === skill
            return (
              <motion.div
                key={skill}
                onMouseEnter={() => setActiveSkill(skill)}
                onMouseLeave={() => setActiveSkill(null)}
                layout
                initial={false}
                animate={{
                  backgroundColor: isActive
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(255, 255, 255, 0.04)",
                }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  mass: 0.5,
                  backgroundColor: { duration: 0.15 },
                }}
                className={`inline-flex items-center px-5 py-2 rounded-full text-base font-medium
                  whitespace-nowrap overflow-hidden ring-1 ring-inset backdrop-blur-md cursor-default
                  ${
                    isActive
                      ? "text-white ring-white/15"
                      : "text-zinc-300 ring-white/10"
                  }`}
              >
                {skill}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
