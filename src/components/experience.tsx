"use client";

import data from "@/data/data.json";

type Experience = {
  role: string;
  company: string;
  dates: string;
  description: string;
};

export default function ExperienceSection() {
  const experiences: Experience[] = data.experiences;

  return (
    <section
      className="relative text-white py-20 px-6 md:px-24 lg:px-48"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <h2
        className="font-serif text-lg md:text-xl font-medium mb-32 text-center tracking-[0.15em]"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        [ EXPERIENCE ] 
      </h2>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-item group transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <div>
                <p className="font-sans text-xl font-semibold">{exp.company}</p>
                <p className="font-mono text-gray-400 text-sm">{exp.role}</p>
              </div>
              <p className="font-mono text-gray-400 text-sm mt-2 sm:mt-0 group-hover:text-gray-200 transition-all duration-300">
                {exp.dates}
              </p>
            </div>
            <p className="text-gray-300 text-sm mt-3 max-w-2xl leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
