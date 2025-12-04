import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Briefcase,
  User,
} from "lucide-react";
import DarkPic from "./assets/Profile-Picture.png";
import LightPic from "./assets/Light-Profile-Picture.png";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 1. Set the default theme (e.g., "light", "dark", "cupcake", "synthwave")
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // 2. Automatically update the HTML tag whenever the state changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // --- Data Section ---
  const projects = [
    {
      title: "GameHub-An engaging online game library",
      desc: "an engaging online library designed for discovering and supporting indie game developers. ",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      link: "https://game-hub-new.netlify.app",
      github: "https://github.com/AlFahad47/GameHub",
    },
    {
      title: "FinEase-Personal Finance Management App ",
      desc: "A modern, responsive personal finance management web application ...",
      tags: ["React", "Firebase", "Redux"],
      link: "https://fine-ease-new.netlify.app",
      github: "https://github.com/AlFahad47/FinEase-client",
    },
    {
      title: "eCommerce-A minimalist eCommerce application",
      desc: "A high-end, minimalist eCommerce application built with Next.js 16 (App Router) and MongoDB..",
      tags: ["Next.js", "NextAuth", "MongoDB", "Bcryptjs"],
      link: "#",
      github: "https://github.com/AlFahad47/eCommerce",
    },
  ];

  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Figma",
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js (Vite)",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "DaisyUI",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Firebase Auth",
        "MongoDB (Atlas)",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git & GitHub",
        "Vercel",
        "Postman & Axios",
        "Recharts",
        "Toastify",
      ],
    },
  ];

  return (
    // MAIN WRAPPER: DaisyUI handles colors via 'bg-base-100' and 'text-base-content'
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300 font-sans">
      {/* --- Navbar --- */}
      {/* Uses 'bg-base-100' with opacity for glass effect */}
      <nav className="fixed w-full z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-primary">Portfolio.</span>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="hover:text-primary transition">
                About
              </a>
              <a href="#skills" className="hover:text-primary transition">
                Skills
              </a>
              <a href="#projects" className="hover:text-primary transition">
                Projects
              </a>
              <a href="#contact" className="hover:text-primary transition">
                Contact
              </a>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="btn btn-ghost btn-circle"
              >
                {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn btn-ghost btn-circle"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-base-100 border-b border-base-300 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 hover:text-primary"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 hover:text-primary"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 hover:text-primary"
              >
                Projects
              </a>
              <button
                onClick={toggleTheme}
                className="btn btn-outline btn-sm mt-4"
              >
                {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}{" "}
                Toggle Theme
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section id="about" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            {/* <h2 className="text-lg text-primary font-medium tracking-wide">
              HELLO, I'M A DEVELOPER
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                experiences.
              </span>
            </h1>
            <p className="text-base-content/70 text-lg max-w-lg">
             MERN Developer | React.js, Node.js, MongoDB, Tailwind | Love shipping complete apps and lately obsessed with adding AI features | Open to junior/full-stack positions
            </p> */}

            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
              Full Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Developer
              </span>
            </h1>
            {/* <p className="max-w-xl text-xl text-base-content/60 mb-10 leading-relaxed">
            I craft accessible, pixel-perfect web experiences using 
            <span className="font-bold text-base-content"> React, Node.js </span>
            and modern UI architecture.
          </p> */}
            <p className="max-w-xl text-xl text-base-content/60 mb-10 leading-relaxed">
              MERN Developer |
              <span className="font-bold text-base-content">
                {" "}
                React.js, Node.js, MongoDB, Tailwind{" "}
              </span>
              | Love shipping complete apps and lately obsessed with adding{" "}
              <span className="font-bold text-base-content">
                {" "}
                AI features{" "}
              </span>{" "}
              | Open to junior/full-stack positions
            </p>

            <div className="flex space-x-4">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View Work
              </a>
            </div>
            <div className="flex space-x-6 pt-4 text-base-content/60">
              <a href="https://github.com/AlFahad47">
                <Github className="hover:text-primary cursor-pointer transition" />
              </a>
              <a href="https://www.linkedin.com/in/alhamimfahad/">
                <Linkedin className="hover:text-primary cursor-pointer transition" />
              </a>
              <a href="mailto:fahadmolladev@gmail.com">
                <Mail className="hover:text-primary cursor-pointer transition" />
              </a>
            </div>
          </div>

          {/* Hero Image / Illustration */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
            <div className="absolute top-0 right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl filter"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl filter"></div>

            <div className="relative z-10 bg-base-200 w-80 h-80 md:w-96 md:h-96 rounded-2xl rotate-3 hover:rotate-0 transition duration-500 shadow-2xl flex items-center justify-center border border-base-300">
              {theme === "light" ? (
                <img src={LightPic} className=" rounded-2xl" alt="" />
              ) : (
                <img src={DarkPic} className=" rounded-2xl" alt="" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 mb-12">
            <Code className="text-primary" />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl border border-base-300 hover:border-primary transition duration-300"
              >
                <div className="card-body">
                  <h3 className="card-title text-primary mb-4 border-b border-base-200 pb-2">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="badge badge-lg badge-outline hover:badge-primary p-4 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <Briefcase className="text-primary" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              // Uses 'card' class for automatic DaisyUI styling
              <a
                key={index}
                href={`${project.link}`}
                className="card bg-base-100 border border-base-300 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition duration-300 overflow-hidden cursor-pointer"
              >
                <div className="h-48 bg-base-200 relative overflow-hidden group ">
                  <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition duration-500 flex items-center justify-center ">
                    <ExternalLink className="text-white w-12 h-12 " />
                  </div>
                </div>

                <div className="card-body">
                  <h3 className="card-title text-xl font-bold group-hover:text-primary transition">
                    {project.title}
                  </h3>
                  <p className="text-base-content/70 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex justify-between">
                    <a
                      href={`${project.github}`}
                      className="btn btn-info  rounded-4xl"
                    >
                      GitHub Link
                    </a>
                    <a
                      href={`${project.link}`}
                      className="btn btn-primary rounded-4xl"
                    >
                      Live Link
                    </a>
                  </div>

                  <div className="card-actions justify-start mt-4">
                    {project.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="badge badge-outline badge-primary"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 bg-base-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-base-content/70 mb-8 text-lg">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
          <a
            href="mailto:fahadmolladev@gmail.com"
            className="btn btn-primary btn-lg rounded-full px-8"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded-t-xl">
        <aside>
          <p>
            © {new Date().getFullYear()} Fahad Molla. Built with React, Tailwind
            & DaisyUI.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Portfolio;
