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
  FileText,
  GraduationCap,
  Phone,
  Smartphone,
  BookOpen
} from "lucide-react";
import DarkPic from "./assets/Profile-Picture.png";
import LightPic from "./assets/Light-Profile-Picture.png";




const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // --- Theme Logic ---
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // --- Data Section ---
  
  // Projects with detailed info for the Modal
  const projects = [
    {
      title: "GameHub",
      shortDesc: "An engaging online library for discovering indie games.",
      fullDesc: "GameHub is a comprehensive platform designed to bridge the gap between indie developers and gamers. It features a robust review system, dynamic search, and user authentication.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind"],
      link: "https://game-hub-new.netlify.app",
      github: "https://github.com/AlFahad47/GameHub",
      challenges: "Implementing real-time search filtering with large datasets and managing complex state for user reviews.",
      futurePlans: "Integrating a payment gateway for direct game purchases and adding social community features.",
      image: "https://i.ibb.co/1J0dyyy0/22.png"
    },
    {
      title: "FinEase",
      shortDesc: "A modern, responsive personal finance management app.",
      fullDesc: "FinEase helps users track expenses, set budgets, and visualize financial health through interactive charts. It ensures data security and real-time updates.",
      tags: ["React", "Firebase", "Redux"],
      link: "https://fine-ease-new.netlify.app",
      github: "https://github.com/AlFahad47/FinEase-client",
      challenges: "Synchronizing data across devices using Firebase and ensuring Redux state persistence without performance lag.",
      futurePlans: "Adding AI-driven financial advice and recurring bill reminders.",
      image: "https://i.ibb.co/B5nRQ59r/rsz-capture2.png"
    },
    {
      title: "eCommerce App",
      shortDesc: "A minimalist eCommerce application built with Next.js 16.",
      fullDesc: "A high-performance eCommerce solution focusing on speed and SEO. Features include a shopping cart, secure checkout, and admin dashboard.",
      tags: ["Next.js", "NextAuth", "MongoDB", "Bcryptjs"],
      link: "https://ecommerce-zeta-eight-77.vercel.app",
      github: "https://github.com/AlFahad47/eCommerce",
      challenges: "Handling server-side rendering with Next.js App Router and managing secure sessions with NextAuth.",
      futurePlans: "Implementing Stripe payment integration and a user review system.",
      image: "https://i.ibb.co/s9b3ByKy/rsz-1capture3.png"
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "American International University-Bangladesh",
      year: "Jan 2018 - Mar 2023",
      desc: "Graduated with highest distinction. Completed 148 credits with a major focus on Software Engineering and Web Technologies.",
      cgpa:'CGPA :	3.99'
    },
  
  ];

  const experience = [
    {
      role: "Game Tester",
      company: "Thunderslab Studio - Game Testing Company",
      year: "Dec 2024 - May 2025",
      desc: "Conducted rigorous gameplay testing to identify bugs and reported technical issues to ensure high-quality releases.",
    },
   
  ];

 const skills = [
  {
    title: "Frontend",
    skills: [
      { 
        name: "React.js (Vite)", 
        level: 90,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
      },
      { 
        name: "JavaScript (ES6+)", 
        level: 85,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
      },
      { 
        name: "Tailwind CSS", 
        level: 95,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" 
      },
      { 
        name: "DaisyUI", 
        level: 90,
        img: "https://img.daisyui.com/images/daisyui-logo/daisyui-logomark.svg" 
      },
      { 
        name: "Responsive Design", 
        level: 85,
        img: "https://img.icons8.com/color/48/multiple-devices.png" 
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { 
        name: "Node.js", 
        level: 80,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
      },
      { 
        name: "Express.js", 
        level: 85,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
      },
      { 
        name: "RESTful APIs", 
        level: 85,
        img: "https://img.icons8.com/color/48/api-settings.png" 
      },
      { 
        name: "Firebase Auth", 
        level: 75,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
      },
      { 
        name: "MongoDB (Atlas)", 
        level: 80,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      { 
        name: "Git & GitHub", 
        level: 85,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
      },
      { 
        name: "Vercel", 
        level: 80,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" 
      },
      { 
        name: "Postman", 
        level: 85,
        img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" 
      },
      { 
        name: "Figma", 
        level: 70,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
      },
      { 
        name: "VS Code", 
        level: 95,
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
      },
    ],
  },
];
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300 font-sans">
      
      {/* --- Navbar --- */}
      <nav className="fixed w-full z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-primary">Portfolio.</span>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition font-medium">
                  {item}
                </a>
              ))}
              <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
                {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn btn-ghost btn-circle">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-base-100 border-b border-base-300 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 hover:text-primary font-medium"
                >
                  {item}
                </a>
              ))}
              <button onClick={toggleTheme} className="btn btn-outline btn-sm mt-4 w-full">
                {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
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
              <a
                href="/resume.pdf" // **Update this path!**
                download="Fahad_Molla_Resume.pdf"
                className="btn btn-accent" // Use a contrasting color like 'accent' or 'secondary'
              >
                Download Resume
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

      {/* --- About Me Section --- */}
      <section id="about" className="py-20 bg-base-200/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <User className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          
          <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body">
              <p className="text-lg leading-relaxed text-base-content/80">
                Hi! I'm a passionate developer who loves building things for the web. My journey started 
                when I discovered the magic of creating interactive UI elements, and I haven't looked back since.
              </p>
              <p className="text-lg leading-relaxed text-base-content/80 mt-4">
                I specialize in the <span className="font-bold text-primary">MERN stack</span> and enjoy solving 
                complex problems with clean, efficient code. When I'm not coding, you can find me playing video games,
                exploring new tech trends, or experimenting with AI tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      {/* <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-12 justify-center md:justify-start">
            <Code className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition border border-base-200">
                <div className="card-body">
                  <h3 className="card-title text-primary border-b border-base-200 pb-2 mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="badge badge-lg badge-outline hover:badge-primary p-3">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

<section id="skills" className="py-20 px-4 bg-base-100">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-center gap-2 mb-12 justify-center md:justify-start">
      <Code className="text-primary" size={28} />
      <h2 className="text-3xl font-bold">Technical Skills</h2>
    </div>

    <div className="space-y-12">
      {skills.map((category, index) => (
        <div key={index}>
          {/* Category Title */}
          <h3 className="text-2xl font-bold mb-6 text-primary border-l-4 border-primary pl-4">
            {category.title}
          </h3>

          {/* Grid of Skill Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {category.skills.map((skill, idx) => (
              <div
                key={idx}
                className="card bg-base-200/50 hover:bg-base-200 border border-base-300 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg group"
              >
                <div className="card-body p-6 flex flex-col items-center text-center">
                  
                  {/* Icon with hover effect */}
                  <div className="w-16 h-16 mb-4 p-2 bg-base-100 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={skill.img} 
                      alt={skill.name} 
                      className="w-10 h-10 object-contain" 
                    />
                  </div>

                  {/* Skill Name */}
                  <h4 className="font-bold text-lg mb-2">{skill.name}</h4>

                  {/* Progress Bar */}
                  <div className="w-full mt-2">
                    <div className="flex justify-between text-xs mb-1 opacity-70">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    {/* DaisyUI Progress Component */}
                    <progress 
                      className="progress progress-primary w-full h-2" 
                      value={skill.level} 
                      max="100"
                    ></progress>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* --- Education & Experience Section --- */}
      <section id="experience" className="py-20 bg-base-200">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <ul className="timeline timeline-vertical timeline-compact timeline-snap-icon max-md:timeline-compact">
              {education.map((edu, index) => (
                <li key={index}>
                  <div className="timeline-middle">
                    <BookOpen size={16} className="text-primary" />
                  </div>
                  <div className="timeline-end mb-10 ml-4">
                    <div className="text-lg font-black text-base-content">{edu.degree}</div>
                    <div className="text-primary font-medium">{edu.institution}</div>
                    <time className="text-sm italic opacity-70 block mb-2">{edu.year}</time>
                                        <div className="text-sm italic opacity-70 block mb-2">{edu.cgpa}</div>

                    <p className="text-base-content/80">{edu.desc}</p>
                  </div>
                  <hr className="bg-primary"/>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="text-primary" size={28} />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
             <ul className="timeline timeline-vertical timeline-compact timeline-snap-icon max-md:timeline-compact">
              {experience.map((exp, index) => (
                <li key={index}>
                  <div className="timeline-middle">
                    <Briefcase size={16} className="text-secondary" />
                  </div>
                  <div className="timeline-end mb-10 ml-4">
                    <div className="text-lg font-black text-base-content">{exp.role}</div>
                    <div className="text-secondary font-medium">{exp.company}</div>
                    <time className="text-sm italic opacity-70 block mb-2">{exp.year}</time>
                    <p className="text-base-content/80">{exp.desc}</p>
                  </div>
                  <hr className="bg-secondary"/>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-12 justify-center md:justify-start">
            <Briefcase className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 border border-base-200">
                {/* Project Image Placeholder */}
                <figure className="h-48 w-full bg-base-300">
                   <img src={project.image} alt={project.title} className="object-cover w-full h-full hover:scale-105 transition duration-500" />
                </figure>
                
                <div className="card-body">
                  <h3 className="card-title text-xl font-bold">{project.title}</h3>
                  <p className="text-base-content/70 text-sm">{project.shortDesc}</p>
                  
                  <div className="card-actions justify-end mt-4">
                    <button 
                      onClick={() => setSelectedProject(project)} 
                      className="btn btn-primary btn-sm rounded-full"
                    >
                      View Details
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <div key={i} className="badge badge-outline text-xs">{tag}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Project Details Modal --- */}
      {selectedProject && (
        <dialog id="project_modal" className="modal modal-open modal-bottom sm:modal-middle backdrop-blur-sm">
          <div className="modal-box w-11/12 max-w-4xl bg-base-100 border border-base-300 shadow-2xl">
            <form method="dialog">
              <button 
                onClick={() => setSelectedProject(null)} 
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >✕</button>
            </form>
            
            <h3 className="font-bold text-3xl mb-2 text-primary">{selectedProject.title}</h3>
            
            <div className="py-4 space-y-6">
              {/* Image & Links */}
              <div className="grid md:grid-cols-2 gap-6">
                 <img src={selectedProject.image} alt={selectedProject.title} className="rounded-xl shadow-lg border border-base-300" />
                 <div className="space-y-4">
                    <p className="text-lg">{selectedProject.fullDesc}</p>
                    <div className="flex gap-4">
                        <a href={selectedProject.link} target="_blank" rel="noreferrer" className="btn btn-primary flex-1"><ExternalLink size={18}/> Live Demo</a>
                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-outline flex-1"><Github size={18}/> Code</a>
                    </div>
                 </div>
              </div>

              <div className="divider"></div>

              {/* Details */}
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Code size={20}/> Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, i) => <span key={i} className="badge badge-primary badge-outline">{tag}</span>)}
                    </div>
                 </div>
                 <div>
                    <h4 className="font-bold text-lg mb-2">Challenges Faced</h4>
                    <p className="text-sm opacity-80">{selectedProject.challenges}</p>
                 </div>
                 <div className="md:col-span-2">
                    <h4 className="font-bold text-lg mb-2">Future Plans</h4>
                    <p className="text-sm opacity-80">{selectedProject.futurePlans}</p>
                 </div>
              </div>

            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
             <button onClick={() => setSelectedProject(null)}>close</button>
          </form>
        </dialog>
      )}

      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 bg-base-200 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-base-content/70 mb-10 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
            <div className="flex items-center justify-center gap-3">
               <div className="p-3 bg-base-100 rounded-full shadow-md text-primary">
                  <Mail size={24}/>
               </div>
               <div className="text-left">
                  <div className="text-xs opacity-60">Email</div>
                  <div className="font-semibold">fahadmolladev@gmail.com</div>
               </div>
            </div>
            
            <div className="flex items-center justify-center gap-3">
               <div className="p-3 bg-base-100 rounded-full shadow-md text-primary">
                  <Smartphone size={24}/>
               </div>
               <div className="text-left">
                  <div className="text-xs opacity-60">Phone / WhatsApp</div>
                  <div className="font-semibold">+8801686891618</div> {/* Update this */}
               </div>
            </div>
          </div>

          <a href="mailto:fahadmolladev@gmail.com" className="btn btn-primary btn-lg rounded-full px-10 shadow-lg hover:scale-105 transition">
            Say Hello
          </a>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded-t-2xl">
        <aside>
          <p className="font-bold text-lg">Fahad Molla</p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          <div className="flex gap-4 mt-2">
             <a href="https://github.com/AlFahad47" className="hover:text-primary transition"><Github/></a>
             <a href="https://www.linkedin.com/in/alhamimfahad/" className="hover:text-primary transition"><Linkedin/></a>
          </div>
        </aside>
      </footer>

    </div>
  );
};

export default Portfolio;