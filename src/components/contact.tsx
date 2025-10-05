"use client";

export default function ReachOutSection() {
  return (
    <section className="relative text-white py-24 px-6 md:px-24 lg:px-48 overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Heading */}
      <h2
        className="text-center font-serif text-lg md:text-xl font-medium mb-8 tracking-[0.15em]"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        [ LET&apos;S TALK ]
      </h2>

      {/* Description */}
      <p className="text-center text-gray-400 max-w-lg mx-auto mb-10">
        Want to collaborate, brainstorm, or just talk about cool projects?
        Schedule a quick call with me below.
      </p>

      {/* Button */}
      <div className="flex justify-center">
        <a
          href="https://cal.com/asadjawed"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-colors shadow-md"
        >
          Schedule a Call
        </a>
      </div>
    </section>
  );
}
