import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, BookOpen, FileText } from "lucide-react";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredWork = [
    {
      id: 1,
      title: "Legged Robotics",
      image: "/work/crawler_exploded.png",
      projectId: 1,
    },
    {
      id: 2,
      title: "VR Teleoperation",
      image: "/work/VR_teleop_interface.png",
      projectId: 3,
    },
    {
      id: 3,
      title: "Advanced Manufacturing",
      image: "/work/ECM_schematic.png",
      projectId: 2,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "The Crawler",
      description: "Robotic Studio Project",
      fullDescription: "This was our submission for the Fall 2025 iteration of Professor Hod Lipson's Robotic Studio class. We were provided with a servo kit and given complete design freedom to design and make any legged robot. We decided on a spider-like design, using two arms, each with a klann linkage driving a legged geartrain. We went for the extra credit on this project, using MuJoCo simulation and reinforcment learning to get the robot to crabwalk without using the geartrain. Check out the journey video below to see the results!",
      image: "/images/crawler.jpeg",
      youtubeId: "ApJUsBR98f8", // 👈 replace
      //codeLink: "https://github.com/yourname/project1",
      //docsLink: "https://yourdomain.com/project1-docs",
      //paperPdf: "/papers/project1.pdf", // 👈 NEW
    },
    {
      id: 2,
      title: "ECM Machine",
      description: "Advanced Manufacturing Project",
      fullDescription: "Team project to design and build a 1 dimensional ECM machine, using electrolysis to drill into aluminum workpieces. I focused on designing the stepper motor circuit on KiCAD, using an Arduino to move the tool at a calculated material removal rate. This also involved implemented safety protocols including an E-stop, fusing strategy and power supply bench validation.",
      image: "/images/ECM_machine.jpg",
      codeLink: "https://github.com/TakuyaLB/Advanced-Manufacturing-ECM/tree/main",
      docsLink: "https://docs.google.com/document/d/17x1_j_-dw3UFRonSccUwcB03QhM848My/edit?usp=sharing&ouid=100379280498855417303&rtpof=true&sd=true",
      //paperPdf: "/papers/project1.pdf", // 👈 NEW
    },
    {
      id: 3,
      title: "VR Teleoperation Framework",
      description: "IEEE CASE 2025 Publication",
      fullDescription: "This was a full framework for robotic teleoperation on systems designed for both locomotion and manipulation (loco-manipulation). The physical setup we used consisted of an Emika Franka manipulator attached to a Summit-XL mobile base, all controlled from a PC via Meta Quest 2 VR headset. After using a standard interface to drive the base to the site of the manipulation task, the manipulator uses the camera on the end effector to take pictures of the scene from various angles, sending the images with their respective camera positions to the PC. The PC uses these to generate a gaussian splat (3D model) of the scene. This 3D model and a URDF of the manipulator are exported into the Unity VR interface which the user interacts with via the Meta Quest 2. The user uses the novel VR interface to teleoperate the Franka arm via the one-to-one scene reconstruction in Unity. This effectiveness of this system was verified via numerous tests and a thorough user study. There is much room for future expansion, mostly in speeding up the model generation to real-time and applying this system to other setups such as a quadruped-based systems.",
      image: "/images/VR_teleop.jpg",
      youtubeId: "0sInd-0x-YA",
      codeLink: "https://github.com/RPL-CS-UCL/unity_meta_quest_ros",
      //docsLink: "https://yourdomain.com/project1-docs",
      paperPdf: "https://arxiv.org/pdf/2504.15229", // 👈 NEW
    },
    {
      id: 4,
      title: "Pollution Machine Learning",
      description: "Scientific Reports Publication",
      fullDescription: "This project was on using superstatistics and interpretable machine learning to investigate pollution in the river Thames, collaborating with Dr Benjamin Schaefer at the Karlsruhe Institute of Technology. We used dissolved oxygen levels as our pollution statistic, using gradient-boosting trees and SHAP values for interpretability and transformers for forecasting. I focused on the interpretability aspect of this project, attempting many different frameworks and methods before settling on the Light Gradient Boosting Machine for regression and SHapley Additive exPlanations to find feature importances.",
      image: "/images/pollution_ML.png",
      codeLink: "https://github.com/hurst0415/Water-quality-analysis-for-the-Thames-River",
      //docsLink: "https://yourdomain.com/project1-docs",
      paperPdf: "https://www.nature.com/articles/s41598-024-72084-w", // 👈 NEW
    },
  ];

  const publications = [
    { title: "Immersive Teleoperation Framework for Locomanipulation Tasks", authors: "Takuya Boehringer, Jonathan Embley-Riches, Karim Hammoud, Valerio Modugno, Dimitrios Kanoulas", venue: "IEEE CASE 2025", link: "https://arxiv.org/pdf/2504.15229" },
    { title: "Analyzing spatio-temporal dynamics of dissolved oxygen for the River Thames using superstatistical methods and machine learning", authors: "Hankun He, Takuya Boehringer, Benjamin Schaefer, Kate Heppell, Christian Beck", venue: "Scientific Reports 2024", link: "https://www.nature.com/articles/s41598-024-72084-w" },
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
      <motion.div
        key="home"
        className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:gap-8 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: {} }}
      >
        {/* Left column */}
        <motion.div
          custom={0}
          variants={itemVariants}
          className="flex flex-col items-center md:items-start mb-8 md:mb-0"
        >
          <div className="max-w-[200px] md:max-w-[240px] rounded-lg overflow-hidden mb-4">
            <img
              src="/images/profile.jpg"
              alt="Takuya Boehringer"
              className="w-full h-auto object-cover"
            />
          </div>

          <motion.h1
            custom={2}
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-1"
          >
            Takuya Boehringer
          </motion.h1>

          <motion.p
            custom={3}
            variants={itemVariants}
            className="text-gray-600 mb-6"
          >
            MS Mechanical Engineering Student at Columbia University
          </motion.p>

          <motion.div
            custom={4}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 mt-2"
          >
            {[
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/takuya-boehringer/",
                hover: "hover:text-blue-600",
              },
              {
                icon: Github,
                label: "GitHub",
                href: "https://github.com/TakuyaLB",
                hover: "hover:text-gray-900",
              },
              {
                icon: BookOpen,
                label: "Google Scholar",
                href: "https://scholar.google.com/citations?user=Cj-m--kAAAAJ&hl=de&oi=ao",
                hover: "hover:text-blue-600",
              },
              {
                icon: FileText,
                label: "CV",
                href: "/Takuya_CV.pdf",
                hover: "hover:text-red-600",
              },
            ].map(({ icon: Icon, label, href, hover }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 text-gray-600 transition-colors ${hover}`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </motion.div>

        </motion.div>

        {/* Right column */}
        <motion.div
          custom={4}
          variants={itemVariants}
          className="text-gray-700 leading-relaxed"
        >
          {/* ---- AFFILIATION LOGOS ---- */}
          <div className="flex justify-center items-center gap-12 mb-8">
            <img
              src="/images/rpl-logo.png"
              alt="UCL Robotics and Perception Lab"
              className="h-24 md:h-32 lg:h-36 max-w-[340px] object-contain"
            />
            <img
              src="/images/columbia_engineering_logo.jpg"
              alt="Columbia Engineering"
              className="h-24 md:h-32 lg:h-36 max-w-[340px] object-contain"
            />
          </div>

          <p className="mb-4">
            Welcome to my portfolio! I am a mechanical engineering master's student at Columbia University, on the robotics and control track.
          </p>

          <p>
            My background is in computer science, having worked on teleoperation systems and with experience in machine learning. However, my skills now encompass a much broader spectrum of the field of robotics, from mechanical design, mechatronics and control all the way up to simulation and reinforcement learning. I am specifically interested in the applications of robotics in aerospace contexts, from robotic cells in aerospace manufacturing to systems designed for space missions such as space-specific manipulators and lunar rovers.
          </p>

          <div className="w-full border-t border-gray-200 my-6" />
          
          {/* Selected Work */}
          <motion.div
            custom={5}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-8"
          >
            <h2 className="text-lg font-semibold mb-4">Selected Work</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featuredWork.map((work) => (
                <div
                  key={work.id}
                  onClick={() => {
                    setSelectedProject(
                      projects.find((p) => p.id === work.projectId)
                    );
                    setCurrentPage("project-detail");
                  }}
                  className="group cursor-pointer overflow-hidden rounded-lg border hover:shadow-md transition"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-2 text-sm text-gray-700 font-medium">
                    {work.title}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="w-full border-t border-gray-200 my-6" />

          <div className="w-full flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold mb-3">Research Interests</h2>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>Space Robotics</li>
              <li>Robotic Manipulation</li>
              <li>Reinforcement Learning</li>
              <li>Simulation</li>
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
    >
      <h1 className="text-2xl font-semibold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative border rounded-lg overflow-hidden cursor-pointer h-[250px] md:h-[280px] hover:shadow-lg transition"
            onClick={() => {
              setSelectedProject(project);
              setCurrentPage("project-detail");
            }}
          >
            {/* Project image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />

            {/* Bottom hover overlay */}
            <div
              className="
                absolute bottom-0 left-0 w-full
                bg-white/90 backdrop-blur
                px-4 py-3
                opacity-100 md:opacity-0
                translate-y-0 md:translate-y-2
                transition-all duration-300 ease-out
                md:group-hover:opacity-100
                md:group-hover:translate-y-0
              "
            >
              <h3 className="font-semibold text-gray-900 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">
                {project.description}
              </p>
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
    >
      <h1 className="text-2xl font-semibold mb-6">Publications</h1>
      <div className="space-y-4">
        {publications.map((pub, i) => (
          <a
            key={i}
            href={pub.link}
            className="block border-b pb-3 hover:shadow-md transition"
          >
            <h3 className="font-semibold">{pub.title}</h3>
            <p className="text-sm">{pub.authors}</p>
            <p className="text-sm italic text-gray-500">{pub.venue}</p>
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
    >
      <button
        onClick={() => {
          setSelectedProject(null);
          setCurrentPage("projects");
        }}
        className="text-blue-600 mb-4"
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

      <p className="text-gray-700 mb-8">
        {selectedProject.fullDescription}
      </p>

      {/* ---- YOUTUBE VIDEO ---- */}
      {selectedProject.youtubeId && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-3">Demo Video</h2>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border">
            <iframe
              src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?rel=0&modestbranding=1`}
              title="Project demo"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
      )}

      {/* ---- CODE / DOCS / PAPER LINKS ---- */}
      {(selectedProject.codeLink ||
        selectedProject.docsLink ||
        selectedProject.paperPdf) && (
        <div className="mt-12 flex flex-wrap gap-4">
          {selectedProject.codeLink && (
            <a
              href={selectedProject.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5
                border rounded-lg
                text-sm font-medium
                text-gray-700
                hover:text-black
                hover:border-gray-400
                hover:-translate-y-0.5
                transition
              "
            >
              <Github size={18} />
              Code
            </a>
          )}

          {selectedProject.docsLink && (
            <a
              href={selectedProject.docsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5
                border rounded-lg
                text-sm font-medium
                text-gray-700
                hover:text-black
                hover:border-gray-400
                hover:-translate-y-0.5
                transition
              "
            >
              <BookOpen size={18} />
              Docs
            </a>
          )}

          {selectedProject.paperPdf && (
            <a
              href={selectedProject.paperPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5
                border rounded-lg
                text-sm font-medium
                text-gray-700
                hover:text-black
                hover:border-gray-400
                hover:-translate-y-0.5
                transition
              "
            >
              <FileText size={18} />
              Paper (PDF)
            </a>
          )}
        </div>
      )}

    </motion.div>
  );

  /* ---------------- LAYOUT ---------------- */
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-center gap-12">
          {["home", "projects", "publications"].map((page) => (
            <button
              key={page}
              onClick={() => {
                setCurrentPage(page);
                setSelectedProject(null);
              }}
              className={`text-lg font-medium ${
                currentPage === page ||
                (page === "projects" && currentPage === "project-detail")
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
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
        © {new Date().getFullYear()} Takuya Boehringer
      </footer>
    </div>
  );
};

export default Portfolio;
