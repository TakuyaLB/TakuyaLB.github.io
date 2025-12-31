import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, BookOpen, FileText } from "lucide-react";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: "Project 1", description: "Brief description", fullDescription: "Full details", image: "/images/project1.jpg" },
    { id: 2, title: "Project 2", description: "Brief description", fullDescription: "Full details", image: "/images/project2.jpg" },
    { id: 3, title: "Project 3", description: "Brief description", fullDescription: "Full details", image: "/images/project3.jpg" },
    { id: 4, title: "Project 4", description: "Brief description", fullDescription: "Full details", image: "/images/project1.jpg" },
    { id: 5, title: "Project 5", description: "Brief description", fullDescription: "Full details", image: "/images/project2.jpg" },
    { id: 6, title: "Project 6", description: "Brief description", fullDescription: "Full details", image: "/images/project3.jpg" },
    { id: 7, title: "Project 7", description: "Brief description", fullDescription: "Full details", image: "/images/project1.jpg" },
    { id: 8, title: "Project 8", description: "Brief description", fullDescription: "Full details", image: "/images/project2.jpg" },
    { id: 9, title: "Project 9", description: "Brief description", fullDescription: "Full details", image: "/images/project3.jpg" },
  ];

  const publications = [
    { title: "Paper 1", authors: "You et al.", venue: "Journal 2024", link: "#" },
    { title: "Paper 2", authors: "You et al.", venue: "Journal 2023", link: "#" },
    { title: "Paper 3", authors: "You et al.", venue: "Conference 2022", link: "#" },
  ];

  /* ---------------- HOME ---------------- */
  const renderHome = () => {
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
    };

    return (
      <motion.div key="home" className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:gap-8 text-center md:text-left"
        initial="hidden" animate="visible" variants={{ hidden: {}, visible: {} }}
      >
        {/* Left column: picture + info stacked */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center md:items-start mb-8 md:mb-0"
        >
          <div className="max-w-[200px] md:max-w-[240px] rounded-lg overflow-hidden mb-4">
            <img src="/images/profile.jpg" alt="Your Name" className="w-full h-auto object-cover" />
          </div>

          <motion.div custom={1} variants={itemVariants} initial="hidden" animate="visible" className="flex gap-4 mb-4">
            {[
              { icon: Linkedin, href: "https://linkedin.com", color: "text-blue-600" },
              { icon: Github, href: "https://github.com", color: "text-gray-900" },
              { icon: BookOpen, href: "https://scholar.google.com", color: "text-blue-600" },
              { icon: FileText, href: "/cv.pdf", color: "text-red-600" },
            ].map(({ icon: Icon, href, color }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 hover:${color} transition-transform duration-200 transform hover:scale-125`}
              >
                <Icon size={24} />
              </a>
            ))}
          </motion.div>

          <motion.h1 custom={2} variants={itemVariants} initial="hidden" animate="visible" className="text-2xl md:text-3xl font-semibold mb-1">
            Your Name
          </motion.h1>

          <motion.p custom={3} variants={itemVariants} initial="hidden" animate="visible" className="text-gray-600 mb-6">
            Your Title / Position
          </motion.p>
        </motion.div>

        {/* Right column: main text content */}
        <motion.div custom={4} variants={itemVariants} initial="hidden" animate="visible" className="text-gray-700 leading-relaxed">
          <p className="mb-4">Welcome to my portfolio. I am a [your role] specializing in [your field].</p>
          <p>I am currently [your current position] at [your institution/company]. My work focuses on [brief description of your work and its impact].</p>

          <div className="w-full border-t border-gray-200 my-6" />

          <div className="w-full flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-3">Research Interests</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-left">
              <li>Space Robotics</li>
              <li>Robotic Manipulation</li>
              <li>Reinforcement Learning</li>
              <li>Motion Planning</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  /* ---------------- PROJECTS ---------------- */
  const renderProjects = () => (
    <motion.div
      key="projects"
      className="max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer h-[250px] md:h-[280px] flex flex-col"
            onClick={() => {
              setSelectedProject(project);
              setCurrentPage("project-detail");
            }}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover flex-shrink-0" />
            <div className="p-4 flex-1">
              <h3 className="font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  /* ---------------- PUBLICATIONS ---------------- */
  const renderPublications = () => (
    <motion.div
      key="publications"
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-semibold mb-6">Publications</h1>
      <div className="space-y-4">
        {publications.map((pub, i) => (
          <a key={i} href={pub.link} className="block border-b pb-3 hover:shadow-md transition-shadow duration-200">
            <div className="p-2">
              <h3 className="font-semibold text-gray-800">{pub.title}</h3>
              <p className="text-sm text-gray-700">{pub.authors}</p>
              <p className="text-sm text-gray-500 italic">{pub.venue}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );

  /* ---------------- PROJECT DETAIL ---------------- */
  const renderProjectDetail = () => (
    <motion.div
      key="project-detail"
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <button
        onClick={() => {
          setSelectedProject(null);
          setCurrentPage("projects");
        }}
        className="text-blue-600 hover:text-blue-800 mb-4 text-sm"
      >
        ← Back to Projects
      </button>

      <h1 className="text-2xl font-semibold mb-4">{selectedProject.title}</h1>
      <img src={selectedProject.image} alt={selectedProject.title} className="w-full rounded-lg mb-4" />
      <p className="text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
    </motion.div>
  );

  /* ---------------- LAYOUT ---------------- */
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-center gap-12">
          {["home", "projects", "publications"].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`relative text-lg font-medium ${
                currentPage === page || (page === "projects" && currentPage === "project-detail")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-black"
              } transition-colors duration-200
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                after:origin-left after:scale-x-0 after:bg-black after:transition-transform
                after:duration-300 hover:after:scale-x-100`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      <main className="flex-1 px-4 py-10">
        <AnimatePresence mode="wait">
          {currentPage === "home" && renderHome()}
          {currentPage === "projects" && !selectedProject && renderProjects()}
          {currentPage === "project-detail" && selectedProject && renderProjectDetail()}
          {currentPage === "publications" && renderPublications()}
        </AnimatePresence>
      </main>

      <footer className="border-t text-center text-xs text-gray-600 py-4">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
