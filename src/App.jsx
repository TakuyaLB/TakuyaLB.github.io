import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, BookOpen, FileText } from "lucide-react";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "Brief description of project 1",
      fullDescription:
        "Detailed description of project 1. This is where you'd include comprehensive information about the project, methodology, results, and impact.",
      image: "/images/project1.jpg",
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "Brief description of project 2",
      fullDescription:
        "Detailed description of project 2. Include technical details, challenges overcome, and key achievements.",
      image: "/images/project2.jpg",
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "Brief description of project 3",
      fullDescription:
        "Detailed description of project 3. Explain the context, your role, and the outcomes.",
      image: "/images/project3.jpg",
    },
    // add more dummy projects to test scrolling
    {
      id: 4,
      title: "Project Title 4",
      description: "Brief description of project 4",
      fullDescription: "Detailed description of project 4",
      image: "/images/project1.jpg",
    },
    {
      id: 5,
      title: "Project Title 5",
      description: "Brief description of project 5",
      fullDescription: "Detailed description of project 5",
      image: "/images/project2.jpg",
    },
    {
      id: 6,
      title: "Project Title 6",
      description: "Brief description of project 6",
      fullDescription: "Detailed description of project 6",
      image: "/images/project3.jpg",
    },
  ];

  const publications = [
    {
      title: "Paper Title 1",
      authors: "Your Name, Co-author 1, Co-author 2",
      venue: "Conference / Journal 2024",
      link: "#",
    },
    {
      title: "Paper Title 2",
      authors: "Co-author 1, Your Name",
      venue: "Conference / Journal 2023",
      link: "#",
    },
  ];

  /* ---------------- HOME ---------------- */
  const renderHome = () => {
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.5 },
      }),
    };

    return (
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[200px] md:max-w-[240px] rounded-lg overflow-hidden mb-4"
        >
          <img
            src="/images/profile.jpg"
            alt="Your Name"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          custom={1}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-4 mb-4"
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-125 duration-200"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-transform transform hover:scale-125 duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-transform transform hover:scale-125 duration-200"
          >
            <BookOpen size={18} />
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-600 transition-transform transform hover:scale-125 duration-200"
          >
            <FileText size={18} />
          </a>
        </motion.div>

        <motion.h1
          custom={2}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-3xl font-semibold mb-1"
        >
          Your Name
        </motion.h1>

        <motion.p
          custom={3}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-gray-600 mb-6"
        >
          Your Title / Position
        </motion.p>

        <motion.div
          custom={4}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-left text-gray-700 leading-relaxed mb-8"
        >
          <p className="mb-4">
            Welcome to my portfolio. I am a [your role] specializing in
            [your field].
          </p>
          <p>
            I am currently [your current position] at [your institution/company].
            My work focuses on [brief description of your work and its impact].
          </p>
        </motion.div>

        <motion.div
          custom={5}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="w-full border-t border-gray-200 mb-6"
        />

        <motion.div
          custom={6}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center"
        >
          <h2 className="text-lg font-semibold mb-3">Research Interests</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-left">
            <li>Space Robotics</li>
            <li>Robotic Manipulation</li>
            <li>Reinforcement Learning</li>
            <li>Motion Planning</li>
          </ul>
        </motion.div>
      </div>
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
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover flex-shrink-0"
            />
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
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-semibold mb-6">Publications</h1>
      <div className="space-y-4">
        {publications.map((pub, i) => (
          <a
            key={i}
            href={pub.link}
            className="block border rounded-lg p-4 hover:shadow-lg transition transform hover:scale-105"
          >
            <h3 className="font-semibold">{pub.title}</h3>
            <p className="text-sm text-gray-700">{pub.authors}</p>
            <p className="text-sm text-gray-500 italic">{pub.venue}</p>
          </a>
        ))}
      </div>
    </motion.div>
  );

  /* ---------------- PROJECT DETAIL ---------------- */
  const renderProjectDetail = () => (
    <motion.div
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

      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="w-full rounded-lg mb-4"
      />

      <p className="text-gray-700 leading-relaxed">
        {selectedProject.fullDescription}
      </p>
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
                currentPage === page ||
                (page === "projects" && currentPage === "project-detail")
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

      {/* Main content */}
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
