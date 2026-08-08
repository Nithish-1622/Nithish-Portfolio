import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { HiArrowRight, HiSparkles, HiArrowUp, HiCommandLine, HiXMark, HiCheckCircle } from "react-icons/hi2";

const Home = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [showFloatingDock, setShowFloatingDock] = useState(false);
  const typewriterRef = useRef(null);

  const roles = [
    "A Full Stack Developer",
    "A Software Architect",
    "A Problem Solver",
  ];

  // Typewriter effect for roles
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let timerId;

    const type = () => {
      const currentRole = roles[roleIndex];
      if (!typewriterRef.current) return;

      if (isDeleting) {
        typewriterRef.current.innerText = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typewriterRef.current.innerText = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1600; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400; // Pause before next
      }

      timerId = setTimeout(type, typingSpeed);
    };

    timerId = setTimeout(type, 800);
    return () => clearTimeout(timerId);
  }, []);

  // Show floating dock ONLY when user scrolls down past the hero section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowFloatingDock(true);
      } else {
        setShowFloatingDock(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const marqueeItems = [
    "FULL-STACK DEVELOPER",
    "OPEN SOURCE",
    "AI & BACKEND",
    "NATIONAL HACKATHON 2026",
    "SYSTEM ARCHITECTURE",
    "COMPETITIVE PROGRAMMING",
    "HIGH PERFORMANCE APPS",
  ];

  return (
    <section id="top" className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden pt-6 pb-28 border-b border-black/10">
      
      {/* Plus Crosshairs Scattered on Canvas Grid (Blueprint Technical Look) */}
      <div className="absolute top-12 left-1/6 text-black/20 font-mono text-sm pointer-events-none select-none">+</div>
      <div className="absolute top-12 right-1/4 text-black/20 font-mono text-sm pointer-events-none select-none">+</div>
      <div className="absolute top-1/3 left-12 text-black/20 font-mono text-sm pointer-events-none select-none">+</div>
      <div className="absolute top-1/3 right-12 text-black/20 font-mono text-sm pointer-events-none select-none">+</div>
      <div className="absolute bottom-1/3 left-1/3 text-black/20 font-mono text-sm pointer-events-none select-none">+</div>
      <div className="absolute bottom-1/3 right-1/3 text-black/20 font-mono text-sm pointer-events-none select-none">+</div>

      {/* 1. Giant Background Watermark ("NITHISH") Extending Down to Touch Marquee with Bottom Camouflage Fade */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <span className="watermark-camouflage text-[30vw] sm:text-[26vw] md:text-[24vw] font-black uppercase leading-none tracking-tighter select-none text-center transform -rotate-3 translate-y-8 sm:translate-y-12 md:translate-y-16">
          NITHISH
        </span>
      </div>

      {/* 2. Hero Content Stack */}
      <div className="relative z-10 max-w-5xl px-6 mx-auto text-center flex flex-col items-center justify-center my-auto py-8">
        
        {/* Availability / Status Badge Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border-2 border-black/80 bg-white shadow-brutalist-sm mb-6 transition-transform hover:scale-105 cursor-default">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-status-pulse"></span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black">
            ENGINEERING HIGH-PERFORMANCE SYSTEMS
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-extrabold text-slate-950 tracking-tight leading-[1.05] max-w-4xl">
          Hey, I'm Nithish
        </h1>

        {/* Dynamic Typewriter Roles Subheading */}
        <div className="mt-6 flex justify-center items-center min-h-[44px]">
          <h2
            ref={typewriterRef}
            className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-slate-900 tracking-wide inline-block border-r-4 border-slate-950 pr-2 animate-pulse"
          >
            A Full Stack Developer
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm sm:text-base border border-slate-300 shadow-subtle-pill hover:shadow-md hover:border-slate-400 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="text-base">🏆</span>
            <span className="tracking-tight font-medium">View Featured Projects</span>
            <span className="text-slate-500 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>

          <a
            href="https://drive.usercontent.google.com/u/0/uc?id=1oYvNeYVdURx8CuzqJAFBDocKVukiP66i&export=download"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 text-white font-bold text-sm sm:text-base border border-slate-950 shadow-md hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>📄 Download Resume</span>
          </a>
        </div>
      </div>

      {/* 3. Broader Angled Ticker Marquee Band (No Edge Clipping - Wide Viewport Bleed) */}
      <div className="w-full relative z-20 my-4 sm:my-6 overflow-hidden py-3">
        <div className="w-[135vw] -ml-[17.5vw] transform -rotate-3 bg-white/95 backdrop-blur-md py-4 sm:py-5 border-y-2 border-black/10 shadow-sm">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8 font-mono font-bold text-slate-600 text-sm sm:text-base md:text-lg tracking-widest uppercase">
                <span>{item}</span>
                <span className="text-black/40 font-mono font-light text-sm sm:text-base">+</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Left Vertical Tab (NAVBAR Label) */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex items-center">
        <div className="bg-black text-white px-2.5 py-5 rounded-r-xl shadow-lg border-y border-r border-black flex flex-col items-center cursor-pointer transition-transform hover:translate-x-0.5">
          <div className="transform -rotate-90 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-widest text-white">
            NAVBAR
          </div>
        </div>
      </div>

      {/* 5. Bottom Floating Footer Dock (Integrated Scroll To Top & Socials - Appears ONLY after scrolling below Hero) */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5 sm:gap-3 max-w-[95vw] transition-all duration-500 transform ${
          showFloatingDock
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Circular Social Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="https://www.linkedin.com/in/nithish-s-2298421b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-300 shadow-subtle-pill flex items-center justify-center text-slate-700 hover:text-black hover:border-slate-900 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/NithishS365"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-300 shadow-subtle-pill flex items-center justify-center text-slate-700 hover:text-black hover:border-slate-900 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/SNithish35980?t=9Ah7yv9MQJ4TWkrdH2MXvw&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-300 shadow-subtle-pill flex items-center justify-center text-slate-700 hover:text-black hover:border-slate-900 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/nithish_1622?igsh=MTJmN3N6ZGhhbGY1aQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-300 shadow-subtle-pill flex items-center justify-center text-slate-700 hover:text-black hover:border-slate-900 transition-all hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Central Floating Footer Capsule Bar with Scroll Up Trigger */}
        <div className="bg-white/95 backdrop-blur-md border border-slate-300 shadow-subtle-pill rounded-full px-4 sm:px-5 py-2.5 flex items-center gap-3">
          <span className="font-mono text-[11px] sm:text-xs font-medium text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            CRAFTED WITH <span className="text-red-500 text-sm">❤️</span> BY <strong className="text-slate-900 font-bold">NITHISH S</strong>
          </span>

          {/* Integrated Scroll Up Button inside Floating Footer */}
          <button
            onClick={scrollToTop}
            className="ml-1 px-2.5 py-1 rounded-full bg-slate-950 text-white font-mono text-[11px] font-bold flex items-center gap-1 hover:bg-slate-800 transition-transform hover:scale-105 cursor-pointer shadow-xs"
            aria-label="Scroll to Top"
            title="Scroll to Top"
          >
            <span>TOP</span>
            <HiArrowUp className="text-xs" />
          </button>
        </div>

        {/* Technical Specs Widget Trigger */}
        <button
          onClick={() => setIsWidgetOpen(!isWidgetOpen)}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white text-black border border-slate-300 shadow-subtle-pill flex items-center justify-center font-mono text-xs font-bold hover:bg-black hover:text-white transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shrink-0"
          aria-label="Toggle Technical Info"
          title="Toggle Technical Specs"
        >
          &gt;.&lt;
        </button>
      </div>

      {/* Technical Specs Drawer Modal */}
      {isWidgetOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-white border border-slate-300 shadow-2xl rounded-2xl p-6 transition-all animate-fade-in-down">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <div className="flex items-center gap-2 font-mono text-sm font-extrabold text-slate-900">
                <HiCommandLine className="text-lg" />
                <span>TECHNICAL SPECIFICATIONS</span>
              </div>
              <button
                onClick={() => setIsWidgetOpen(false)}
                className="p-1 rounded-lg border border-slate-200 hover:bg-black hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <HiXMark className="text-lg" />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500">DEVELOPER:</span>
                <span className="font-bold text-slate-900">NITHISH S</span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500">PRIMARY STACK:</span>
                <span className="font-bold text-slate-900">Java SpringBoot / Django / ReactJS</span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500">DOMAINS:</span>
                <span className="font-bold text-slate-900">Backend Arch / Distributed Sys</span>
              </div>
              <div className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500">STATUS:</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <HiCheckCircle /> AVAILABLE FOR ROLES
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsWidgetOpen(false)}
              className="mt-5 w-full bg-slate-900 text-white font-mono text-xs font-bold py-2.5 rounded-xl hover:bg-black transition-all cursor-pointer"
            >
              CLOSE SPECS [ESC]
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
