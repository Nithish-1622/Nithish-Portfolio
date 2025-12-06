import React from "react";
import { FaBriefcase, FaGraduationCap, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

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
  const workExperience = [
    {
      icon: <FaBriefcase className="text-amber-500" />,
      role: "Software Developer (LeaveEase)",
      company: "Gilbarco Veeder-Root Pvt Ltd",
      period: "2024",
      logo: logos.gilbarco,
      description:
        "Developed a Leave Management Software that automated the entire leave cycle, from application to manager approval, ensuring efficient tracking and streamlined workflows.",
      skills: ["React.js", "MongoDB", "Node.js", "Express.js"],
      color: "bg-amber-500",
    },
    {
      icon: <FaBriefcase className="text-blue-500" />,
      role: "Mobile App Developer (Isaii Ai)",
      company: "Isaii Ai",
      period: "2025",
      logo: logos.isaii,
      description:
        "Developed a feature-rich trip booking and management application using React Native, allowing users to seamlessly plan journeys, make reservations, and coordinate their trips in a unified platform.",
      skills: ["React Native", "Node.js", "Express.js", "MongoDB"],
      color: "bg-blue-500",
    },
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
      role: "Center for International Relations - Student Lead, Student Affairs",
      company: "Sri Eshwar College of Engineering",
      period: "Jun 2021 - Present",
      logo: logos.sriEshwar,
      description:
        "Led the Center for International Relations as Student Lead, managing student affairs, organizing events, and fostering global collaborations.",
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
        <div className="mt-12 sm:mt-20">
          <p className="text-center text-gray-500 uppercase tracking-wider text-xs sm:text-sm mb-2">
            What I've done so far
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
            Work Experience
          </h2>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            <div className="flex flex-col gap-10">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center justify-between md:mb-12`}
                >
                  <div
                    className={`w-full md:w-5/12 p-4 sm:p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${
                      index % 2 === 0
                        ? "md:mr-auto md:ml-0"
                        : "md:ml-auto md:mr-0"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cntain shadow-md"
                      />
                      <div>
                        <h3 className="font-bold text-base sm:text-lg">
                          {exp.role}
                        </h3>
                        <p className="text-gray-500 text-sm sm:text-base">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm mt-2">
                      {exp.period}
                    </p>
                    <p className="text-gray-600 mt-4 text-sm sm:text-base">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-white border-4 border-gray-200 z-10"></div>
                </motion.div>
              ))}
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
