'use client';

import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/asadalpha' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/asadjawed07/' },
  { label: 'Instagram', url: 'https://instagram.com/asad_alpha_' },
  { label: 'Behance', url: 'https://www.behance.net/asadjawed1' },
  { label: 'LeetCode', url: 'https://leetcode.com/u/asadalpha/' },
];

export default function FooterSection() {
  return (
    <footer className="relative text-white py-16 px-6 md:px-24 lg:px-48">
      
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {socialLinks.map(({ label, url }, idx) => (
          <motion.a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-base md:text-lg tracking-wide transition-colors duration-300 relative group"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            {label}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </motion.div>

      <p className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Asad Jawed. May the source be with you.
      </p>
    </footer>
  );
}
