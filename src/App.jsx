import React, { useState } from 'react';
import { Github, Linkedin, BookOpen, FileText } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample data - replace with your actual content
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "Brief description of project 1",
      fullDescription: "Detailed description of project 1. This is where you'd include comprehensive information about the project, methodology, results, and impact.",
      image: "images/project1.jpg"
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "Brief description of project 2",
      fullDescription: "Detailed description of project 2. Include technical details, challenges overcome, and key achievements.",
      image: "images/project2.jpg"
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "Brief description of project 3",
      fullDescription: "Detailed description of project 3. Explain the context, your role, and the outcomes.",
      image: "images/project3.jpg"
    }
  ];

  const publications = [
    {
      title: "Paper Title 1",
      authors: "Your Name, Co-author 1, Co-author 2",
      venue: "Conference/Journal Name 2024",
      link: "#"
    },
    {
      title: "Paper Title 2",
      authors: "Co-author 1, Your Name, Co-author 2",
      venue: "Conference/Journal Name 2023",
      link: "#"
    },
    {
      title: "Paper Title 3",
      authors: "Your Name, Co-author 1",
      venue: "Conference/Journal Name 2023",
      link: "#"
    }
  ];

  const renderHome = () => (
    <div className="w-full max-w-2xl mx-auto">
      {/* Profile Image - centered */}
      <div className="flex justify-center mb-3">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-lg overflow-hidden">
          <img src="/images/profile.jpg" alt="Your Name" className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Social Links - centered under image */}
      <div className="flex justify-center items-center gap-4 mb-4">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
          <Github size={18} />
        </a>
        <a href="https://scholar.google.com/citations?user=yourID" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <BookOpen size={18} />
        </a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
          <FileText size={18} />
        </a>
      </div>

      {/* Name and Title - centered */}
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-3xl font-bold mb-1">Your Name</h1>
        <p className="text-base md:text-lg text-gray-600">Your Title/Position</p>
      </div>
      
      {/* Bio text - left aligned but centered container */}
      <div className="text-left mb-6">
        <p className="text-gray-700 leading-relaxed mb-3 text-sm md:text-base">
          Welcome to my portfolio. I am a [your role] specializing in [your field]. 
          My research interests include [interest 1], [interest 2], and [interest 3].
        </p>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          I am currently [your current position] at [your institution/company]. 
          My work focuses on [brief description of your work and its impact].
        </p>
      </div>
      
      {/* Research Interests */}
      <div className="border-t border-gray-200 pt-5">
        <h2 className="text-lg md:text-xl font-bold mb-3">Research Interests</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
          <li>Space Robotics</li>
          <li>Robotic Manipulation</li>
          <li>Reinforcement Learning</li>
          <li>Motion Planning</li>
        </ul>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(project => (
          <div 
            key={project.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => {
              setSelectedProject(project);
              setCurrentPage('project-detail');
            }}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-3">
              <h3 className="text-base md:text-lg font-bold mb-1">{project.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProjectDetail = () => {
    if (!selectedProject) return null;
    
    return (
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => {
            setCurrentPage('projects');
            setSelectedProject(null);
          }}
          className="text-blue-600 hover:text-blue-800 mb-3 text-xs md:text-sm"
        >
          ← Back to Projects
        </button>
        <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{selectedProject.title}</h1>
        <img src={selectedProject.image} alt={selectedProject.title} className="w-full rounded-lg mb-3 md:mb-4" />
        <p className="text-gray-700 leading-relaxed text-sm md:text-base">{selectedProject.fullDescription}</p>
      </div>
    );
  };

  const renderPublications = () => (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Publications</h1>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <div key={index} className="border-b border-gray-200 pb-3">
            <h3 className="text-base md:text-lg font-bold mb-1">
              <a href={pub.link} className="text-blue-600 hover:text-blue-800">
                {pub.title}
              </a>
            </h3>
            <p className="text-gray-700 mb-1 text-xs md:text-sm">{pub.authors}</p>
            <p className="text-gray-600 italic text-xs md:text-sm">{pub.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="w-full px-4 py-2 md:py-3">
          <nav className="flex items-center justify-center space-x-5 md:space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`font-medium text-xs md:text-sm ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('projects')}
              className={`font-medium text-xs md:text-sm ${currentPage === 'projects' || currentPage === 'project-detail' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => setCurrentPage('publications')}
              className={`font-medium text-xs md:text-sm ${currentPage === 'publications' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Publications
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 md:px-8 py-6 md:py-10">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'projects' && renderProjects()}
        {currentPage === 'project-detail' && renderProjectDetail()}
        {currentPage === 'publications' && renderPublications()}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-8 md:mt-12">
        <div className="w-full px-4 py-3 md:py-4 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;