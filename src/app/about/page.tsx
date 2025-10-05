import ParralaxSection from "@/components/parralax-scroll";
import Word from "@/components/word";

export default function AboutPage() {
  const content =
    "As a software developer with expertise in frontend and mobile development, I have been building applications using React, Flutter, Next.js, and Tailwind CSS for the past two years. I have a strong foundation in JavaScript and am currently expanding my skills with TypeScript in React Native (Expo).";

  return (
    <main className="bg-black text-white min-h-screen pt-24"> 
      {/* ✅ Top Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I'm <span className="font-semibold text-white">Asad</span> — a passionate developer
          focused on creating clean, fast, and modern user experiences.  
          Here’s a quick overview of my journey and skills.
        </p>
      </section>

      {/* ✅ Word Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 mb-24">
        <Word paragraph={content} />
      </section>

      {/* ✅ Parallax Scroll Section */}
      <ParralaxSection />
    </main>
  );
}
