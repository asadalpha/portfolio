'use client';
import { motion } from 'framer-motion';

const techItems = [
  'Python',
  'C/C++',
  'Dart',
  'Javascript',
  'React.js',
  'Next.js',
  'Flutter',
  'Kotlin',
  'MERN',
  'AWS',
  'Firebase',
  'Supabase',
  'FastAPI',
  'Docker',
  'Kubernetes',
  'CI/CD',
  'Git/Github',
  'Vercel',
  'Render',
  '.Net',
  'Android',
  'Web',
  'Backend',
  'Cloud',
  'Data Analytics',
];

export default function TechStackSection() {
  return (
    <section className="text-white py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-white/10 rounded-lg overflow-hidden">
          {techItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.015 }}
              className="bg-zinc-950 p-6 md:p-8 flex items-center justify-center text-center hover:bg-zinc-900 transition-colors duration-300"
            >
              <span className="text-sm md:text-base font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
