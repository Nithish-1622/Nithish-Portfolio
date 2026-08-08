import React from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import profileImage from "../assets/Nith2.jpg";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pr-16 mb-10 lg:mb-0 z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            Welcome to My World of{" "}
            <span className="text-amber-700">Innovation</span>{" "}
            <span className="text-gray-800">and</span>{" "}
            <span className="text-gray-500">Creativity!</span>
          </h2>

          <p className="text-gray-600 mt-8 leading-relaxed">
            I’m Nithish S, an Artificial Intelligence and Data Science student passionate about building intelligent, user-focused applications that solve real-world problems. I enjoy working across full-stack development, AI, and RAG-based pipelines, creating systems that are both scalable and meaningful. With a strong interest in backend engineering, machine learning, and automation, I constantly explore new technologies, build projects, and refine my problem-solving skills. I believe in continuous learning and love turning innovative ideas into impactful digital solutions.
          </p>

          <div className="mt-8 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/nithish-s-2298421b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] text-2xl hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/NithishS365"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/SNithish35980?t=9Ah7yv9MQJ4TWkrdH2MXvw&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-2xl hover:scale-110 transition-transform"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/nithish_1622?igsh=MTJmN3N6ZGhhbGY1aQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fd5949] text-2xl hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
          </div>

          <button className="mt-8 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300 transform hover:scale-105">
            Get Connect
          </button>
        </div>

        {/* Right image section - responsive */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-64 sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden flex items-center justify-center">
            <img
              src={profileImage}
              alt="Nithish S"
              className="rounded-br-[10%] rounded-tl-[10%] w-[80%] h-auto object-cover "
            />
            <div className="absolute inset-0 to-transparent"></div>
          </div>
        </div>
      </div>


    

   
      
    </div>
  );
};

export default AboutMe;
