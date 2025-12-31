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
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-48 h-48 bg-gray-200 rounded-lg overflow-hidden mb-6">
          <img src="/images/profile.jpg" alt="Your Name" className="w-full h-full object-cover" />
        </div>
        
        {/* Social Links under image */}
        <div className="flex items-center gap-4 mb-6">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Github size={24} />
          </a>
          <a href="https://scholar.google.com/citations?user=yourID" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
            <BookOpen size={24} />
          </a>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600">
            <FileText size={24} />
          </a>
        </div>

        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <p className="text-xl text-gray-600 mb-6">Your Title/Position</p>
        
        <div className="max-w-3xl text-left">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to my portfolio. I am a [your role] specializing in [your field]. 
            My research interests include [interest 1], [interest 2], and [interest 3].
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            I am currently [your current position] at [your institution/company]. 
            My work focuses on [brief description of your work and its impact].
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Research Interests</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Space Robotics</li>
          <li>Robotic Manipulation</li>
          <li>Reinforcement Learning</li>
          <li>Motion Planning</li>
        </ul>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div 
            key={project.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => {
              setSelectedProject(project);
              setCurrentPage('project-detail');
            }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProjectDetail = () => {
    if (!selectedProject) return null;
    
    return (
      <div className="max-w-4xl">
        <button 
          onClick={() => {
            setCurrentPage('projects');
            setSelectedProject(null);
          }}
          className="text-blue-600 hover:text-blue-800 mb-4"
        >
          ← Back to Projects
        </button>
        <h1 className="text-4xl font-bold mb-6">{selectedProject.title}</h1>
        <img src={selectedProject.image} alt={selectedProject.title} className="w-full rounded-lg mb-6" />
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
        </div>
      </div>
    );
  };

  const renderPublications = () => (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Publications</h1>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-bold mb-2">
              <a href={pub.link} className="text-blue-600 hover:text-blue-800">
                {pub.title}
              </a>
            </h3>
            <p className="text-gray-700 mb-1">{pub.authors}</p>
            <p className="text-gray-600 italic">{pub.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-center space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`font-medium ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('projects')}
              className={`font-medium ${currentPage === 'projects' || currentPage === 'project-detail' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => setCurrentPage('publications')}
              className={`font-medium ${currentPage === 'publications' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Publications
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'projects' && renderProjects()}
        {currentPage === 'project-detail' && renderProjectDetail()}
        {currentPage === 'publications' && renderPublications()}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;