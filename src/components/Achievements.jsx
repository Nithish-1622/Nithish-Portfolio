import React from "react";
import {
  FaMedal,
  FaTrophy,
  FaCrown,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFileAlt,
  FaAward,
  FaRocket,
  FaStar,
  FaLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: <FaFileAlt className="text-3xl text-blue-500" />,
    title: "Published 2* Patents",
    subtitle: "Software Development under SDG goals",
    desc: "Published two patents in software development, contributing to the United Nations Sustainable Development Goals.",
  },
  {
    icon: <FaTrophy className="text-3xl text-yellow-500" />,
    title: "Best Innovator – International Startup TN Hackathon",
    subtitle: "Awarded for Groundbreaking Solutions",
    desc: "Recognized as Best Innovator at the International Startup TN Hackathon for delivering impactful and innovative solutions.",
  },
  {
    icon: <FaCrown className="text-3xl text-yellow-400" />,
    title: "Youngest Entrepreneur & Top Software Developer",
    subtitle: "Excellence in Technology & Innovation",
    desc: "Honored as the Youngest Entrepreneur and Top Software Developer for outstanding achievements in technology and innovation.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-green-500" />,
    title: "Mentored 300+ Students",
    subtitle: "MERN Stack Development",
    desc: "Mentored over 300 students in MERN stack development, empowering the next generation of developers.",
  },
  {
    icon: <FaMedal className="text-3xl text-gray-700" />,
    title: "Dr. APJ Abdul Kalam Silver Innovator – 2024",
    subtitle: "National Recognition",
    desc: "Received the Dr. APJ Abdul Kalam Silver Innovator award in 2024 for exceptional innovation.",
  },
  {
    icon: <FaUserGraduate className="text-3xl text-purple-500" />,
    title: "Best Student Researcher – 2023",
    subtitle: "Academic Excellence",
    desc: "Honored as the Best Student Researcher of 2023 for outstanding research contributions.",
  },
  {
    icon: <FaTrophy className="text-3xl text-pink-400" />,
    title: "Winner of 3+ Hackathons",
    subtitle: "National Competitions (2023 & 2024)",
    desc: "Achieved top positions in more than four hackathons and internationally recognized Competetions.",
  },
  {
    icon: <FaStar className="text-3xl text-amber-500" />,
    title: "Best Frontend Developer",
    subtitle: "24-hour Hackathon",
    desc: "Winner of Best Frontend Developer for exceptional UI/UX expertise at a 24-hour hackathon.",
  },
];

export default function Achievements() {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-white min-h-screen">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
        Achievements.
      </h2>
      <p className="text-lg text-gray-700 mb-12 max-w-3xl">
        My journey is marked by innovation, leadership, and a passion for
        empowering others through technology and education.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              y: -18,
              scale: 1.06,
              boxShadow:
                "0 8px 32px 0 rgba(255, 193, 7, 0.25), 0 1.5px 16px 0 rgba(0,0,0,0.10)",
              border: "2px solid #FFD700",
              transition: { duration: 0.35, type: "spring", stiffness: 250 },
            }}
            className="relative bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 flex flex-col min-h-[250px] group transition-all duration-300"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.18, rotate: [0, 8, -8, 0] }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mb-4 self-start"
            >
              {ach.icon}
            </motion.div>
            <div className="font-black text-2xl mb-1 text-gray-900 whitespace-pre-line drop-shadow">
              {ach.title}
            </div>
            <div className="font-semibold text-gray-700 mb-2 whitespace-pre-line">
              {ach.subtitle}
            </div>
            <div className="text-gray-600 mb-3">{ach.desc}</div>
            {/* Glowing border effect */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                boxShadow: "0 0 0 4px #ffe066, 0 0 32px 0 #ffd70066",
                border: "2px solid #FFD700",
                zIndex: 1,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
