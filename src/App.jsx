import React, { useState } from "react";
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

  const renderHome = () => (
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
      {/* Profile image */}
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden mb-4">
        <img
          src="/images/profile.jpg"
          alt="Your Name"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Social icons */}
      <div className="flex gap-4 mb-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900"
        >
          <Github size={18} />
        </a>
        <a
          href="https://scholar.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600"
        >
          <BookOpen size={18} />
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-600"
        >
          <FileText size={18} />
        </a>
      </div>

      {/* Name / title */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-1">
        Your Name
      </h1>
      <p className="text-gray-600 mb-6">Your Title / Position</p>

      {/* Bio */}
      <div className="text-left text-gray-700 leading-relaxed mb-8">
        <p className="mb-4">
          Welcome to my portfolio. I am a [your role] specializing in
          [your field]. My research interests include [interest 1],
          [interest 2], and [interest 3].
        </p>
        <p>
          I am currently [your current position] at [your
          institution/company]. My work focuses on [brief description of
          your work and its impact].
        </p>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-200 mb-6" />

      {/* Research interests */}
      <div className="w-full flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-3">
          Research Interests
        </h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-left">
          <li>Space Robotics</li>
          <li>Robotic Manipulation</li>
          <li>Reinforcement Learning</li>
          <li>Motion Planning</li>
        </ul>
      </div>
    </div>
  );

  /* ---------------- PROJECTS ---------------- */

  const renderProjects = () => (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer"
            onClick={() => {
              setSelectedProject(project);
              setCurrentPage("project-detail");
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProjectDetail = () => (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => {
          setSelectedProject(null);
          setCurrentPage("projects");
        }}
        className="text-blue-600 hover:text-blue-800 mb-4 text-sm"
      >
        ← Back to Projects
      </button>

      <h1 className="text-2xl font-semibold mb-4">
        {selectedProject.title}
      </h1>

      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="w-full rounded-lg mb-4"
      />

      <p className="text-gray-700 leading-relaxed">
        {selectedProject.fullDescription}
      </p>
    </div>
  );

  /* ---------------- PUBLICATIONS ---------------- */

  const renderPublications = () => (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Publications
      </h1>
      <div className="space-y-4">
        {publications.map((pub, i) => (
          <div key={i} className="border-b pb-3">
            <a
              href={pub.link}
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              {pub.title}
            </a>
            <p className="text-sm text-gray-700">{pub.authors}</p>
            <p className="text-sm text-gray-500 italic">
              {pub.venue}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  /* ---------------- LAYOUT ---------------- */

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b">
        <nav className="max-w-5xl mx-auto px-4 py-3 flex justify-center gap-8">
          {["home", "projects", "publications"].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`text-sm font-medium ${
                currentPage === page ||
                (page === "projects" &&
                  currentPage === "project-detail")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 px-4 py-10">
        {currentPage === "home" && renderHome()}
        {currentPage === "projects" && renderProjects()}
        {currentPage === "project-detail" && renderProjectDetail()}
        {currentPage === "publications" && renderPublications()}
      </main>

      {/* Footer */}
      <footer className="border-t text-center text-xs text-gray-600 py-4">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
