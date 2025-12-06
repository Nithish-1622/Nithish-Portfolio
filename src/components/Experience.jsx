import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaGraduationCap, FaUsers } from "react-icons/fa";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Import your organization logos
const logos = {
  tnGovt: "https://www.tn.gov.in/sites/default/files/logo.png",
  justice: "https://www.moj.gov.in/sites/all/themes/moj2017/logo.png",
  vuega: "https://vuega.org/wp-content/uploads/2022/02/vuega-logo.png",
  karpagam: "https://www.karpagaresearch.com/assets/img/logo.png",
  srm: "https://www.srmist.edu.in/wp-content/uploads/2023/01/srm-logo.png",
  svce: "https://svce.ac.in/wp-content/themes/svce/assets/img/logo.png",
  sriEshwar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNrhOdasEW-nw2QGWfW8p61_zk0lGWcr-P960hBTvbvgroYQblgEQA3fyIs98GFCU6pQ&usqp=CAU",
  gilbarco:
    "https://www.gilbarco.com/us/sites/gilbarco.com.us/themes/gvr_v3_us/logo.svg",
  isaii: "https://framerusercontent.com/images/Xqva2SIUa2CAXuGIcHtb2NFUAVM.png",
};
const techStack = [
  {
    name: "C++",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
  },
  {
  name: "Python",
  logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
  name: "Java",
  logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express",
    logo: "https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png",
  },
  {
    name: "React Native",
    logo: "https://cink.es/wp-content/uploads/2024/02/react-native-apps-jpg-1.webp",
  },
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/800px-Amazon_Web_Services_Logo.svg.png",
  },
  {
  name: "MongoDB",
  logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
},
{
  name: "Firebase",
  logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
},


{
  name: "LLaMA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/640px-Meta-Logo.png",
},

];

const Experience = () => {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for the timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  const workExperience = [
    {
      icon: <FaBriefcase className="text-amber-500" />,
      role: "Web Developer",
      company: "KICE INFOSYSTEMS Pvt Ltd",
      period: "2024",
      logo: logos.gilbarco,
      description:
        "Developed a comprehensive ecommerce website named G-STORE for Garment Outlet Located at Tirupur with enhancing user experience and driving online sales through a responsive and visually appealing design.",
      skills: ["React.js", "MongoDB", "Node.js", "Express.js"],
      color: "bg-amber-500",
      link: "https://kiceinfosystems.com/",
    },
    // {
    //   icon: <FaBriefcase className="text-blue-500" />,
    //   role: "Null",
    //   company: "PAVAKE",
    //   period: "2025",
    //   logo: logos.isaii,
    //   description:
    //     "Working",
    //   skills: ["React Native", "Node.js", "Express.js", "MongoDB"],
    //   color: "bg-blue-500",
    // },  
    {
      icon: <FaGraduationCap className="text-purple-500" />,
      role: "Student Mentor",
      company: "Sri Eshwar College of Engineering",
      period: "Jan 2020 - Present",
      logo: logos.sriEshwar,
      description:
        "Guided students in leadership, teaching, and mentoring to help them excel academically and professionally.",
      skills: ["Leadership", "Teaching", "Mentoring"],
      color: "bg-purple-500",
    },
    {
      icon: <FaUsers className="text-green-500" />,
      role: "Center for International Relations - Student Co-ordinator, Student Affairs",
      company: "Sri Eshwar College of Engineering",
      period: "Jun 2021 - Present",
      logo: logos.sriEshwar,
      description:
        "Played a key role in  the Center for International Relations as Student Lead, managing student affairs, organizing events, and fostering global collaborations.",
      skills: [
        "International Relations",
        "Student Affairs",
        "Event Organization",
      ],
      color: "bg-green-500",
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
      domain: "RestAPI",
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
    <div className="py-10 px-2 sm:py-14 sm:px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Work Experience Timeline */}
        <div className="mt-12 sm:mt-20" ref={timelineRef}>
          <p className="text-center text-gray-500 uppercase tracking-wider text-xs sm:text-sm mb-2">
            What I've done so far
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
            Work Experience
          </h2>

          <div className="relative">
            {/* Mobile Timeline - Simple Vertical Line */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 opacity-30"></div>
            
            {/* Mobile Progress Line */}
            <motion.div 
              className="md:hidden absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"
              style={{
                height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.6))"
              }}
            />
            
            {/* Animated SVG Path - Desktop Only */}
            <svg
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e40af" stopOpacity="1" />
                  <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#8b5cf6" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Background path with subtle glow */}
              <path
                d={`M ${window.innerWidth / 2} 0 ${workExperience.map((_, i) => {
                  const y = (i + 1) * 280;
                  const x = i % 2 === 0 
                    ? window.innerWidth / 2 - 120 
                    : window.innerWidth / 2 + 120;
                  return `Q ${x} ${y - 140} ${window.innerWidth / 2} ${y}`;
                }).join(' ')}`}
                stroke="#e0e7ff"
                strokeWidth="3"
                fill="none"
                opacity="0.4"
              />
              
              {/* Animated progress path */}
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
              
              {/* Animated glowing dot */}
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
                {/* Outer pulse ring */}
                <motion.circle
                  r="15"
                  fill="none"
                  stroke="#3b82f6"
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
                {/* Middle ring */}
                <circle
                  r="10"
                  fill="#3b82f6"
                  opacity="0.3"
                />
                {/* Inner bright dot */}
                <circle
                  r="6"
                  fill="#ffffff"
                  filter="url(#glow)"
                />
                <circle
                  r="4"
                  fill="#3b82f6"
                />
              </motion.g>
            </svg>

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
                          borderColor: isActive ? "#3b82f6" : "#d1d5db",
                          scale: isActive ? 1.2 : 1,
                          boxShadow: isActive 
                            ? "0 0 12px rgba(59, 130, 246, 0.8)"
                            : "0 0 0 rgba(0, 0, 0, 0)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600"
                          animate={{
                            opacity: isActive ? 1 : 0,
                            scale: isActive ? 1 : 0.5
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className={`w-full md:w-5/12 ml-12 md:ml-0 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl transition-all duration-500 group relative overflow-hidden ${
                        index % 2 === 0
                          ? "md:mr-auto md:ml-0"
                          : "md:ml-auto md:mr-0"
                      } ${exp.link ? 'cursor-pointer' : ''}`}
                      animate={{
                        scale: isActive ? 1.08 : 1,
                        boxShadow: isActive 
                          ? "0 25px 60px -12px rgba(59, 130, 246, 0.4), 0 0 30px rgba(99, 102, 241, 0.3)" 
                          : "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      whileHover={{ 
                        y: -8,
                        boxShadow: "0 30px 70px -15px rgba(59, 130, 246, 0.5)"
                      }}
                      onClick={() => exp.link && window.open(exp.link, '_blank')}
                    >
                      {/* Animated background gradient on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 rounded-2xl"
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Active card accent bar */}
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-l-2xl"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <motion.div
                            className="relative"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-md opacity-40"></div>
                            <img
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-contain bg-white p-1.5 sm:p-2 shadow-lg ring-2 ring-white"
                            />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                              {exp.role}
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
                          <p className="text-gray-500 text-xs sm:text-sm font-semibold tracking-wide">
                            {exp.period}
                          </p>
                          <div className="h-px flex-1 bg-gradient-to-l from-gray-300 to-transparent"></div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base mb-4 sm:mb-5">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-medium rounded-full border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all"
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ duration: 0.2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Enhanced Timeline Dot */}
                    <motion.div 
                      className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10"
                      style={{ zIndex: 10 }}
                    >
                      {/* Outer glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                          scale: isActive ? [1, 1.8, 1] : 1,
                          opacity: isActive ? [0.5, 0, 0.5] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                        style={{
                          background: "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0) 70%)",
                          width: "40px",
                          height: "40px",
                          left: "-17.5px",
                          top: "-17.5px"
                        }}
                      />
                      
                      {/* Main dot */}
                      <motion.div
                        className="w-5 h-5 rounded-full bg-white relative"
                        animate={{
                          borderColor: isActive ? "#3b82f6" : "#d1d5db",
                          scale: isActive ? 1.4 : 1,
                          boxShadow: isActive 
                            ? "0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)"
                            : "0 0 0 rgba(0, 0, 0, 0)"
                        }}
                        style={{
                          borderWidth: "4px",
                          borderStyle: "solid"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Inner gradient dot */}
                        <motion.div
                          className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600"
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Headings and CTA */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
                My technical stack <br />
                includes <span className="text-gray-700">various</span> <br />
                <span className="text-gray-400">technologies and tools</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8">
                Explore the technologies I utilize to drive innovation in my
                projects.
              </p>
              <a
                href="mailto:your@email.com"
                className="inline-block bg-black text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-800 transition"
              >
                Connect with me!
              </a>
            </div>
            {/* Right: Tech Grid */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="bg-white rounded-2xl shadow-xl flex flex-col items-center py-4 sm:py-6 px-2 hover:scale-105 hover:shadow-2xl transition-all duration-300"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-10 h-10 sm:w-14 sm:h-14 object-contain mb-2 sm:mb-3"
                      style={{
                        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))",
                      }}
                    />
                    <span className="text-gray-800 font-semibold text-xs sm:text-base">
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
          <div className="w-full mx-auto bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-4 sm:p-10 border border-gray-200">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-gray-900 mb-2 sm:mb-4 tracking-tight drop-shadow-lg">
              Certifications
            </h2>
            <p className="text-base sm:text-xl text-center text-gray-600 mb-6 sm:mb-10 font-medium">
              List of certifications and their details
            </p>
            <div className="overflow-x-auto rounded-2xl">
              <table className="min-w-full text-xs sm:text-lg text-left border-separate border-spacing-y-2">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
                    <th className="px-2 sm:px-6 py-2 sm:py-4 rounded-l-2xl font-bold text-gray-800">
                      Domain
                    </th>
                    <th className="px-2 sm:px-6 py-2 sm:py-4 font-bold text-gray-800">
                      Certification
                    </th>
                    <th className="px-2 sm:px-6 py-2 sm:py-4 font-bold text-gray-800">
                      Issuing Organization
                    </th>
                    <th className="px-2 sm:px-6 py-2 sm:py-4 font-bold text-gray-800">
                      Issue Date
                    </th>
                    <th className="px-2 sm:px-6 py-2 sm:py-4 rounded-r-2xl font-bold text-gray-800">
                      Credential URL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {certifications.map((cert, i) => (
                    <tr
                      key={i}
                      className={`transition-all duration-300 ${
                        i % 2 === 0
                          ? "bg-white/80 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-100"
                          : "bg-gray-50/80 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-100"
                      } shadow-sm rounded-2xl`}
                    >
                      <td className="px-2 sm:px-6 py-2 sm:py-4 rounded-l-2xl font-semibold text-gray-700">
                        {cert.domain}
                      </td>
                      <td className="px-2 sm:px-6 py-2 sm:py-4 font-medium text-gray-800">
                        {cert.cert}
                      </td>
                      <td className="px-2 sm:px-6 py-2 sm:py-4 text-gray-700">
                        {cert.org}
                      </td>
                      <td className="px-2 sm:px-6 py-2 sm:py-4 text-gray-500">
                        {cert.date}
                      </td>
                      <td className="px-2 sm:px-6 py-2 sm:py-4 rounded-r-2xl">
                        <a
                          href={cert.url}
                          className="text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-800 transition"
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
