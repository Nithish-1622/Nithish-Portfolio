import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaGraduationCap, FaUsers, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import acsLogo from "../assets/ACS-logo.png";
import kiceLogo from "../assets/kice-logo.jpg";
import nitGoaLogo from "../assets/NIT_Goa_Logo.png";

// Company logos
const logos = {
  ibm: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  nitGoa: new URL("../assets/NIT_Goa_Logo.png", import.meta.url).href,
  autom: new URL("../assets/ACS-logo.png", import.meta.url).href,
  kice: new URL("../assets/kice-logo.jpg", import.meta.url).href,
  sriEshwar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNrhOdasEW-nw2QGWfW8p61_zk0lGWcr-P960hBTvbvgroYQblgEQA3fyIs98GFCU6pQ&usqp=CAU",
};

const techStack = [
  { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" },
  { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "Electron.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" },
  { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
  { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
  { name: "Apache Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "RabbitMQ", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "LLaMA / AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/meta/meta-original.svg" },
];

const Experience = () => {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for the timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Combined Work Experience Items (User Specified Order)
  const workExperience = [
    {
      icon: <FaBriefcase className="text-purple-500" />,
      role: "Web Developer",
      company: "KICE INFOSYSTEMS Pvt Ltd",
      period: "2024",
      logo: logos.kice,
      description:
        "Developed a comprehensive ecommerce website named G-STORE for Garment Outlet Located at Tirupur with enhancing user experience and driving online sales through a responsive and visually appealing design.",
      skills: ["React.js", "MongoDB", "Node.js", "Express.js"],
      color: "bg-purple-500",
      link: "https://kiceinfosystems.com/",
    },
    {
      icon: <FaGraduationCap className="text-indigo-500" />,
      role: "Student Mentor",
      company: "Sri Eshwar College of Engineering",
      period: "Jan 2020 - Present",
      logo: logos.sriEshwar,
      description:
        "Guided students in leadership, teaching, and mentoring to help them excel academically and professionally.",
      skills: ["Leadership", "Teaching", "Mentoring"],
      color: "bg-indigo-500",
    },
    {
      icon: <FaUsers className="text-teal-500" />,
      role: "Center for International Relations - Student Co-ordinator, Student Affairs",
      company: "Sri Eshwar College of Engineering",
      period: "Jun 2021 - Present",
      logo: logos.sriEshwar,
      description:
        "Played a key role in the Center for International Relations as Student Lead, managing student affairs, organizing events, and fostering global collaborations.",
      skills: [
        "International Relations",
        "Student Affairs",
        "Event Organization",
      ],
      color: "bg-teal-500",
    },
    {
      icon: <FaBriefcase className="text-amber-500" />,
      role: "Software Developer",
      company: "Autom Consultancy Services",
      period: "November 2024 - March 2025",
      logo: logos.autom,
      description:
        "Engineered scalable full-stack web applications, robust RESTful APIs, database schemas, and client consultancy solutions with high performance.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      color: "bg-amber-500",
    },
    {
      icon: <FaBriefcase className="text-blue-500" />,
      role: "AI/ML Intern",
      company: "National Institute of Technology, Goa",
      period: "April 2025 - June 2025",
      logo: logos.nitGoa,
      description:
        "Researched and developed advanced Machine Learning models, algorithm optimization, and data analytics pipelines under institutional academic guidance.",
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Analytics", "Algorithms"],
      color: "bg-blue-500",
    },
    {
      icon: <FaBriefcase className="text-emerald-500" />,
      role: "AI Intern",
      company: "1M1B with IBM",
      period: "July 2025 - Present",
      logo: logos.ibm,
      description:
        "Architecting real-world AI applications, RAG pipelines, and intelligent automation solutions using IBM AI tools, Watson, and modern LLM frameworks.",
      skills: ["AI Automation", "LLMs", "RAG Pipelines", "IBM Watson", "Python"],
      color: "bg-emerald-500",
    },
  ];

  const certifications = [
    {
      domain: "Python",
      cert: "Advanced Diploma in Python Programming ADPP",
      org: "CSC",
      date: "Mar 2022",
      url: "#",
    },
    {
      domain: "HTML & CSS",
      cert: "Web Developer Bootcamp",
      org: "Udemy",
      date: "Oct 2022",
      url: "#",
    },
    {
      domain: "REST API",
      cert: "BackEnd RestAPI Mastery",
      org: "Udemy",
      date: "Sep 2023",
      url: "#",
    },
    {
      domain: "Machine Learning",
      cert: "Supervised Machine Learning",
      org: "Stanford University",
      date: "Aug 2023",
      url: "#",
    },
    {
      domain: "Algorithms",
      cert: "Deep Dive into Algorithm Design Paradigms",
      org: "Udemy",
      date: "Feb 2023",
      url: "#",
    },
  ];

  return (
    <div id="experiences" className="py-10 px-2 sm:py-14 sm:px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        
        {/* Work Experience Timeline */}
        <div className="mt-12 sm:mt-20" ref={timelineRef}>
          <center>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white shadow-subtle-pill mb-3 mx-auto flex justify-center w-fit">
            <span className="w-2 h-2 rounded-full bg-slate-900"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">
              WHAT I'VE DONE SO FAR
            </span>
          </div>
          </center>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-10 sm:mb-16 text-slate-950">
            Work Experience.
          </h2>

          <div className="relative">
            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 opacity-30"></div>
            
            {/* Mobile Progress Line */}
            <motion.div 
              className="md:hidden absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"
              style={{
                height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.6))"
              }}
            />
            
            {/* Animated SVG Pathway - Desktop Only */}
            <svg
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#09090b" stopOpacity="1" />
                  <stop offset="25%" stopColor="#2563eb" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#059669" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="#d97706" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.7" />
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background Pathway Line */}
              <path
                d={`M ${window.innerWidth / 2} 0 ${workExperience.map((_, i) => {
                  const y = (i + 1) * 280;
                  const x = i % 2 === 0 
                    ? window.innerWidth / 2 - 120 
                    : window.innerWidth / 2 + 120;
                  return `Q ${x} ${y - 140} ${window.innerWidth / 2} ${y}`;
                }).join(' ')}`}
                stroke="#cbd5e1"
                strokeWidth="3"
                fill="none"
                opacity="0.5"
              />
              
              {/* Animated Progress Pathway */}
              <motion.path
                d={`M ${window.innerWidth / 2} 0 ${workExperience.map((_, i) => {
                  const y = (i + 1) * 280;
                  const x = i % 2 === 0 
                    ? window.innerWidth / 2 - 120 
                    : window.innerWidth / 2 + 120;
                  return `Q ${x} ${y - 140} ${window.innerWidth / 2} ${y}`;
                }).join(' ')}`}
                stroke="url(#pathGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                style={{
                  pathLength: smoothProgress,
                }}
              />
              
              {/* Animated Glowing Dot along Pathway */}
              <motion.g
                style={{
                  x: useTransform(smoothProgress, (val) => {
                    const totalLength = workExperience.length;
                    const currentIndex = Math.floor(val * totalLength);
                    const progress = (val * totalLength) % 1;
                    const isEven = currentIndex % 2 === 0;
                    const offset = isEven ? -120 : 120;
                    return window.innerWidth / 2 + offset * Math.sin(progress * Math.PI);
                  }),
                  y: useTransform(smoothProgress, (val) => {
                    return val * (workExperience.length * 280);
                  })
                }}
              >
                <motion.circle
                  r="15"
                  fill="none"
                  stroke="#09090b"
                  strokeWidth="2"
                  opacity="0.3"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <circle r="10" fill="#09090b" opacity="0.3" />
                <circle r="6" fill="#ffffff" filter="url(#glow)" />
                <circle r="4" fill="#09090b" />
              </motion.g>
            </svg>

            {/* Pathway Cards */}
            <div className="flex flex-col gap-10">
              {workExperience.map((exp, index) => {
                const cardProgress = (index + 1) / workExperience.length;
                const isActive = scrollProgress >= cardProgress - 0.25 && scrollProgress <= cardProgress + 0.1;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between md:mb-12`}
                    style={{ zIndex: 2 }}
                  >
                    {/* Mobile Timeline Dot */}
                    <motion.div 
                      className="md:hidden absolute left-8 transform -translate-x-1/2 z-10"
                      style={{ zIndex: 10, top: "24px" }}
                    >
                      <motion.div
                        className="w-4 h-4 rounded-full bg-white relative border-2"
                        animate={{
                          borderColor: isActive ? "#09090b" : "#d1d5db",
                          scale: isActive ? 1.2 : 1,
                          boxShadow: isActive 
                            ? "0 0 12px rgba(9, 9, 11, 0.6)"
                            : "0 0 0 rgba(0, 0, 0, 0)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="absolute inset-0.5 rounded-full bg-slate-900"
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 0.5
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Pathway Card Item */}
                    <motion.div
                      className={`w-full md:w-5/12 ml-12 md:ml-0 p-5 sm:p-6 md:p-8 bg-white/90 backdrop-blur-xs border-2 border-slate-900 rounded-2xl shadow-brutalist-sm transition-all duration-300 group relative overflow-hidden ${
                        index % 2 === 0
                          ? "md:mr-auto md:ml-0"
                          : "md:ml-auto md:mr-0"
                      } ${exp.link ? 'cursor-pointer' : ''}`}
                      animate={{
                        scale: isActive ? 1.04 : 1,
                        boxShadow: isActive 
                          ? "5px 5px 0px #09090b" 
                          : "3px 3px 0px #09090b"
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      whileHover={{ 
                        y: -4,
                        boxShadow: "6px 6px 0px #09090b"
                      }}
                      onClick={() => exp.link && window.open(exp.link, '_blank')}
                    >
                      {/* Active card accent bar */}
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-950 rounded-l-2xl"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-900 p-1.5 flex items-center justify-center shrink-0 shadow-subtle-pill overflow-hidden">
                            {exp.logo ? (
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              exp.icon
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-extrabold text-base sm:text-lg md:text-xl text-slate-950 group-hover:text-slate-800 transition-colors flex items-center gap-2">
                              <span>{exp.role}</span>
                              {exp.link && <FaExternalLinkAlt className="text-xs text-slate-400" />}
                            </h3>
                            <p className="text-slate-600 text-xs sm:text-sm font-semibold">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <div className="h-px flex-1 bg-slate-200"></div>
                          <span className="font-mono text-xs font-bold text-slate-900 px-3 py-1 bg-slate-100 border border-slate-300 rounded-full">
                            {exp.period}
                          </span>
                          <div className="h-px flex-1 bg-slate-200"></div>
                        </div>
                        
                        <p className="text-slate-700 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-5 font-normal">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs font-mono font-bold px-2.5 py-1 bg-slate-900 text-white rounded-full border border-slate-900 hover:bg-white hover:text-slate-900 transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Desktop Timeline Dot on Pathway */}
                    <motion.div 
                      className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10"
                      style={{ zIndex: 10 }}
                    >
                      <motion.div
                        className="w-5 h-5 rounded-full bg-white relative"
                        animate={{
                          borderColor: isActive ? "#09090b" : "#cbd5e1",
                          scale: isActive ? 1.4 : 1,
                          boxShadow: isActive 
                            ? "0 0 16px rgba(9, 9, 11, 0.6)"
                            : "0 0 0 rgba(0, 0, 0, 0)"
                        }}
                        style={{
                          borderWidth: "4px",
                          borderStyle: "solid"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="absolute inset-1 rounded-full bg-slate-950"
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 0.5
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technical Stack Section */}
        <div className="mt-20 sm:mt-32 mb-10 sm:mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-2 border-slate-900 rounded-3xl p-8 sm:p-12 bg-white/90 backdrop-blur-xs shadow-brutalist">
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 mb-4 sm:mb-6 leading-tight">
                My technical stack <br />
                includes <span className="text-slate-700">various</span> <br />
                <span className="text-slate-500">technologies and tools</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 font-normal">
                Explore the technologies I utilize to drive innovation in my projects.
              </p>
              <a
                href="mailto:nithish.s2024aids@sece.ac.in"
                className="inline-block bg-slate-950 text-white font-mono text-sm font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-brutalist-sm hover:bg-slate-800 transition duration-300 transform hover:scale-105"
              >
                Connect with me!
              </a>
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white border border-slate-300 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center hover:border-slate-900 hover:shadow-brutalist-sm transition-all duration-200 group"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain mb-2 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-slate-900 font-mono font-bold text-[11px] sm:text-xs text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20 sm:mt-32 mb-8">
          <div className="w-full mx-auto bg-white/90 backdrop-blur-xs rounded-3xl border-2 border-slate-900 p-6 sm:p-10 shadow-brutalist">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-slate-950 mb-2 sm:mb-4 tracking-tight">
              Certifications
            </h2>
            <p className="text-base sm:text-lg text-center text-slate-600 mb-6 sm:mb-10 font-medium">
              List of certifications and their details
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-300">
              <table className="min-w-full text-xs sm:text-base text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-300 font-mono text-xs text-slate-800 uppercase">
                    <th className="px-4 sm:px-6 py-3.5 font-bold">Domain</th>
                    <th className="px-4 sm:px-6 py-3.5 font-bold">Certification</th>
                    <th className="px-4 sm:px-6 py-3.5 font-bold">Issuing Organization</th>
                    <th className="px-4 sm:px-6 py-3.5 font-bold">Issue Date</th>
                    <th className="px-4 sm:px-6 py-3.5 font-bold">Credential URL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {certifications.map((cert, i) => (
                    <tr
                      key={i}
                      className="transition-colors hover:bg-slate-50 font-sans"
                    >
                      <td className="px-4 sm:px-6 py-4 font-mono font-bold text-slate-900">{cert.domain}</td>
                      <td className="px-4 sm:px-6 py-4 font-medium text-slate-900">{cert.cert}</td>
                      <td className="px-4 sm:px-6 py-4 text-slate-600 font-medium">{cert.org}</td>
                      <td className="px-4 sm:px-6 py-4 text-slate-500 font-mono text-xs">{cert.date}</td>
                      <td className="px-4 sm:px-6 py-4">
                        <a
                          href={cert.url}
                          className="font-mono text-xs font-bold text-slate-900 underline hover:text-slate-600 transition"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Credential Link
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
