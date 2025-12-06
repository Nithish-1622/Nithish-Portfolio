import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Home = () => {
  const typewriterRef = useRef(null);
  const roles = [
    "A Full Stack Developer",
    "A Software Architect",
    "A Problem Solver",
  ];

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typewriterRef.current.innerText = currentRole.substring(
          0,
          charIndex - 1
        );
        charIndex--;
        typingSpeed = 50;
      } else {
        typewriterRef.current.innerText = currentRole.substring(
          0,
          charIndex + 1
        );
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <div className="sm:mt-3  xl:mt-2 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 sm:h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="text-[1rem] xs:text-[1.1rem] sm:text-[1.3rem] text-gray-600 font-medium tracking-wider flex items-center justify-center">
          LET'S BUILD SOMETHING TOGETHER
          <span
            role="img"
            aria-label="handshake"
            className="ml-2 transform hover:scale-110 transition-transform inline-block"
          >
            🤝
          </span>
        </div>

        <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-[4rem] font-extrabold mt-8 text-gray-800 tracking-wide leading-tight">
          Hi, I'm{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-black">
           NITHISH S
          </span>
          <span
            role="img"
            aria-label="waving hand"
            className="inline-block animate-wave"
          >
            👋
          </span>
        </h1>

        <div className="mt-8 flex justify-center">
          <h2
            ref={typewriterRef}
            className="text-base xs:text-lg sm:text-2xl md:text-[2.5rem] font-bold text-gray-700 tracking-wider inline-block border-r-4 border-blue-500 pr-2 min-h-[40px] sm:min-h-[50px] animate-pulse-border"
          >
            A T
          </h2>
        </div>

        <p className="mt-8 sm:mt-10 mx-auto max-w-full sm:max-w-3xl text-sm xs:text-base sm:text-lg md:text-[1.25rem] text-gray-600 font-normal leading-relaxed backdrop-blur-sm bg-white bg-opacity-50 p-4 sm:p-6 rounded-xl shadow-sm">
          As a competitive programming enthusiast, I revel in dissecting
          intricate algorithms and optimizing performance metrics, all while
          architecting dynamic back-end frameworks that drive cutting-edge
          software innovations.
        </p>

        <div className="mt-8  flex justify-center gap-4 sm:gap-6 flex-wrap">
          {/* Social Icons */}
          <a
            href="https://www.linkedin.com/in/nithish-s-2298421b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077b5] text-2xl sm:text-[2.2rem] hover:scale-110 transition-transform hover:opacity-80"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/NithishS365"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-2xl sm:text-[2.2rem] hover:scale-110 transition-transform hover:opacity-80"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/SNithish35980?t=9Ah7yv9MQJ4TWkrdH2MXvw&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-2xl sm:text-[2.2rem] hover:scale-110 transition-transform hover:opacity-80"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/nithish_1622?igsh=MTJmN3N6ZGhhbGY1aQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fd5949] text-2xl sm:text-[2.2rem] hover:scale-110 transition-transform hover:opacity-80"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Download Resume Button */}
        <div className="mt-6 mb-20 flex justify-center">
          <a
            href="https://drive.usercontent.google.com/u/0/uc?id=1oYvNeYVdURx8CuzqJAFBDocKVukiP66i&export=download"
            className="bg-black hover:bg-grey-800 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-200 text-base sm:text-lg"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
  );
}; 

export default Home;
