import React, { useState } from "react";
import { FaReact, FaPython, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiFlask, SiMongodb, SiArduino } from "react-icons/si";

// Unique placeholder images for each project (replace with your own if available)

// Tech stack icon mapping
const techIcons = {
  React: FaReact,
  Python: FaPython,
  JS: FaJs,
  TensorFlow: SiTensorflow,
  Flask: SiFlask,
  Node: FaNodeJs,
  MongoDB: SiMongodb,
  Arduino: SiArduino,
  Express: FaNodeJs,
};

const projectsData = [
  {
    title: "Legal Query AI",
    description:
      "This project presents a smart legal AI platform that interprets natural language queries with 100% precision, using a powerful Llama-based RAG architecture via Ollama. It offers 5 line structured, scenario-specific outputs.It delivers jurisdiction-aware, legally authenticated results with versatile perspectives & real-time relevance.",
    // image: placeholderImages[5],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://play.google.com/store/apps/details?id=com.vijayguhan.fourtrip",
    
  },
  {
    title: "TaskRise",
    description:
      "A task management platform for academic institutions enabling HoDs to assign tasks to faculty with role-based authentication, real-time tracking, submission workflows, calendar integration, and analytics dashboards. Features responsive design, JWT authentication, file uploads, and comprehensive reporting",
    // image: placeholderImages[5],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://taskrise-nithish.vercel.app/",
    sample: [
      { label: "Email", value: "mmohammedmustafa" },
      { label: "Password", value: "1234", role: "HOD" },
      { label: "Email", value: "gshobana" },
      { label: "Password", value: "1234", role: "Faculty" },
    ],
  },
  {
    title: "FloatChat – AI Powered Conversational Interface:",
    description:
      "An AI-driven conversational platform utilizing advanced Llama-based RAG architecture via Ollama. It provides context-aware, multi-perspective responses with real-time data integration, ensuring accurate and relevant interactions across various scenarios.",
    // image: placeholderImages[5],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://play.google.com/store/apps/details?id=com.vijayguhan.fourtrip",
    
  },
    {
    title: "MailMate - Email Management Application",
    description:
      "Built a web-based email management platform enabling users to compose, send, receive, and organize emails with secure authentication through traditional login and Google OAuth integration, providing a streamlined alternative to conventional email clients.",
    // image: placeholderImages[5],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://play.google.com/store/apps/details?id=com.vijayguhan.fourtrip",
    
  },

  {
    title: "TalentVault",
    description:
      "Built an AI-powered Resume Repository platform that centralizes candidate data and enables recruiters to semantically search, analyze, and rank resumes using natural language.Transforms raw resumes into structured talent intelligence, significantly reducing manual screening time.",
    // image: placeholderImages[1],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://talent-vault-eight.vercel.app/",
    sample: [
      { label: "Email", value: "anuj@gmail" },
      { label: "Password", value: "anuj@123" },
    ],
  },
  {
    title: "LeadFlow CRM",
    description:
      "Lead Management System to streamline lead marketing, tracking, and follow-up. Features lead categorization, WhatsApp marketing, file upload via Cloudinary, and role-specific access for Super Admin, Admin, and Telecallers.",
    // image: placeholderImages[2],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://acs-lead.vercel.app/",
    sample: [
      { label: "Super Admin Email", value: "vijayguhan10@gmail.com" },
      { label: "Password", value: "1234" },
      { label: "Admin Email", value: "manish10@gmail.com" },
      { label: "Password", value: "1234" },
    ],
  },
  {
    title: "MetalliSense",
    description:
      "MetalliSense is an AI-powered foundries that optimizes alloy composition in real time.It analyzes spectrometer data to detect deviations and recommend precise alloy corrections. With explainable AI, it provides clear reasoning behind every suggestion.The system reduces material waste, re-trials, and improves overall quality consistency.",
    // image: placeholderImages[3],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://lms-frontend-ten-hazel.vercel.app/",
    sample: [
      { label: "Admin Username", value: "24GVRADMIN001" },
      { label: "Password", value: "1234" },
      { label: "Manager Username", value: "24Gilbarco002" },
      { label: "Password", value: "123" },
      { label: "Employee Username", value: "24Gilbarco003" },
      { label: "Password", value: "user@123" },
    ],
  },
  {
    title: "Revozen - Tyre Fitment Center",
    description:
      "Comprehensive tyre management and fitment center software for inventory, customer tracking, and service scheduling, streamlining operations for automotive businesses.",
    // image: placeholderImages[4],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://revozen-partner.vercel.app",
    sample: [
      { label: "Admin Panel", value: "https://revozen-admin1.vercel.app" },
      { label: "Admin Email", value: "pavithran@gmail.com" },
      { label: "Admin Password", value: "1234" },
      { label: "Fitment Panel", value: "https://revozen-partner.vercel.app" },
      { label: "Fitment Email", value: "ram@gmail.com" },
      { label: "Fitment Password", value: "1234" },
      { label: "Individual User Email", value: "manishrahul1705@gmail.com" },
      { label: "Individual Password", value: "1234567890" },
    ],
  },
  {
    title: "StockVision (HDFC)",
    description:
      "The platform visualizes real-time actual prices overlapped with AI-predicted trends and confidence bands on a professional dashboard.Includes deep analytics such as pattern discovery, sector influence, and model performance tracking with real-time updates.",
    // image: placeholderImages[5],
    techs: ["React Native", "Node", "Express", "MongoDB"],
    link: "https://bse-stocks.vercel.app",
    
  },
];

const Projects = () => {
  const [sampleOpen, setSampleOpen] = useState({
    open: false,
    data: null,
    title: "",
  });

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Projects.
        </h1>
        <p className="text-gray-600 mb-12 max-w-4xl">
          Explore some of my notable projects, showcasing innovations in
          technology and leadership. These initiatives reflect my commitment to
          harnessing advanced techniques for impactful solutions in various
          fields. Join me in discovering how I've combined creativity and
          technical expertise to drive positive change.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-xl bg-black relative group"
              style={{
                background:
                  "linear-gradient(135deg, #f8fafc 80%, #e0e7ff 100%)",
                border: "1px solid #e5e7eb",
              }}
            >
              {/* Gradient overlay for card, no image */}
              <div className="h-80 relative flex flex-col justify-center px-6 py-4">
                <h2 className="text-gray-900 text-2xl font-bold mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-sm">{project.description}</p>
                {/* Show Sample Login button if sample exists */}
                {project.sample && (
                  <button
                    type="button"
                    className="absolute top-4 right-4 bg-[#ffd700] text-black text-xs font-bold px-3 py-1 rounded-full shadow hover:bg-yellow-400 transition z-20"
                    onClick={() =>
                      setSampleOpen({
                        open: true,
                        data: project.sample,
                        title: project.title,
                      })
                    }
                  >
                    Sample Login
                  </button>
                )}
              </div>
              {/* Tech stack icons using react-icons */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {project.techs.map((tech, techIndex) => {
                  const IconComponent = techIcons[tech];
                  const bgColor =
                    tech === "Python"
                      ? "bg-blue-500"
                      : tech === "JS"
                      ? "bg-yellow-400"
                      : tech === "React"
                      ? "bg-cyan-400"
                      : tech === "TensorFlow"
                      ? "bg-orange-500"
                      : tech === "Flask"
                      ? "bg-gray-700"
                      : tech === "Node"
                      ? "bg-green-500"
                      : tech === "MongoDB"
                      ? "bg-green-700"
                      : tech === "Arduino"
                      ? "bg-teal-500"
                      : tech === "Express"
                      ? "bg-gray-800"
                      : "bg-gray-500";

                  return (
                    <span
                      key={techIndex}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${bgColor} transition-transform transform hover:scale-110`}
                      title={tech}
                    >
                      {IconComponent && (
                        <IconComponent className="text-white text-sm" />
                      )}
                    </span>
                  );
                })}
              </div>
              {/* View project button */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-md transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sample Login Modal */}
      {sampleOpen.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className="rounded-xl shadow-2xl p-7 w-full max-w-sm relative flex flex-col items-center"
            style={{
              background: "linear-gradient(135deg, #f8fafc 80%, #e0e7ff 100%)",
              border: "1px solid #e5e7eb",
            }}
          >
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold transition"
              onClick={() =>
                setSampleOpen({ open: false, data: null, title: "" })
              }
              aria-label="Close"
            >
              ×
            </button>
            <div className="text-xl font-bold text-gray-900 mb-2 text-center">
              {sampleOpen.title}
              
            </div>
            <div className="text-base text-[#ffd700] mb-4 font-semibold text-center">
              Sample Login / Info
            </div>
            <div className="text-gray-700 text-sm space-y-2 w-full">
              {sampleOpen.data.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-white/70 rounded px-3 py-2 mb-1"
                >
                  <span className="font-semibold">{item.label}:</span>
                  <div className="flex flex-col items-end">
                    <span className="font-mono break-all">{item.value}</span>
                    {item.role && (
                      <span className="text-xs text-blue-600 font-semibold mt-1">
                        ({item.role})
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Scroll to top button */}
      <div className="fixed right-8 bottom-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Projects;
