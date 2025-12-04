import { useState,useEffect } from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'; // npm install react-icons
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, Code2, Terminal, Cpu, Globe, Database } from 'lucide-react';
function Port() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    // <div className="min-h-screen bg-gray-50 text-gray-800">
    //   {/* Navbar */}
    //   {/* <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
    //     <div className="max-w-6xl mx-auto px-4">
    //       <div className="flex justify-between items-center py-4">
    //         <h1 className="text-2xl font-bold text-indigo-600">Fahad Molla</h1>
    //         <ul className="flex space-x-6">
    //           {['about', 'skills', 'projects', 'contact'].map((section) => (
    //             <li key={section}>
    //               <button
    //                 onClick={() => scrollToSection(section)}
    //                 className={`hover:text-indigo-600 transition-colors ${
    //                   activeSection === section ? 'text-indigo-600 border-b-2 border-indigo-600' : ''
    //                 }`}
    //               >
    //                 {section.charAt(0).toUpperCase() + section.slice(1)}
    //               </button>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </nav> */}

    //   {/* Hero/About */}
    //   <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 pt-20">
    //     <div className="max-w-4xl mx-auto px-4 text-center">
    //       <img src="https://via.placeholder.com/150" alt="Fahad Molla" className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg" />
    //       <h2 className="text-4xl font-bold mb-4">Hi, I'm Fahad Molla</h2>
    //       <p className="text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
    //         Full-Stack MERN Developer from Bangladesh. Ex-entrepreneur (export/import businesses) turned coder. Built 29+ projects with daily commits on GitHub. Passionate about clean, scalable web apps that solve real problems.
    //       </p>
    //       <a href="https://github.com/AlFahad47" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center space-x-2">
    //         <FiGithub /> <span>View My GitHub</span>
    //       </a>
    //     </div>
    //   </section>

    //   {/* Skills */}
    //   <section id="skills" className="py-20 bg-white">
    //     <div className="max-w-6xl mx-auto px-4">
    //       <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
    //       <div className="grid md:grid-cols-3 gap-8">
    //         <div className="text-center">
    //           <h3 className="text-xl font-semibold mb-4">Frontend</h3>
    //           <ul className="space-y-2 text-sm">
    //             <li>React.js (Vite + React 19)</li>
    //             <li>JavaScript (ES6+)</li>
    //             <li>Tailwind CSS & DaisyUI</li>
    //             <li>Responsive Design</li>
    //           </ul>
    //         </div>
    //         <div className="text-center">
    //           <h3 className="text-xl font-semibold mb-4">Backend</h3>
    //           <ul className="space-y-2 text-sm">
    //             <li>Node.js & Express.js</li>
    //             <li>RESTful APIs</li>
    //             <li>Firebase Auth</li>
    //             <li>MongoDB (Atlas)</li>
    //           </ul>
    //         </div>
    //         <div className="text-center">
    //           <h3 className="text-xl font-semibold mb-4">Tools</h3>
    //           <ul className="space-y-2 text-sm">
    //             <li>Git & GitHub</li>
    //             <li>Vercel Deployment</li>
    //             <li>Postman & Axios</li>
    //             <li>Recharts & Toastify</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Projects */}
    //   <section id="projects" className="py-20 bg-gray-50">
    //     <div className="max-w-6xl mx-auto px-4">
    //       <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
    //       <div className="grid md:grid-cols-2 gap-8">
    //         <div className="bg-white p-6 rounded-lg shadow-md">
    //           <h3 className="text-xl font-semibold mb-2">FinEase – Personal Finance Tracker</h3>
    //           <p className="mb-4 text-gray-600">Full-stack app for tracking expenses with Firebase auth, Recharts, and MongoDB CRUD. Deployed on Vercel.</p>
    //           <div className="flex space-x-4">
    //             <a href="https://github.com/AlFahad47/finease" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GitHub</a>
    //             <a href="https://finease.vercel.app" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Live Demo</a>
    //           </div>
    //         </div>
    //         <div className="bg-white p-6 rounded-lg shadow-md">
    //           <h3 className="text-xl font-semibold mb-2">Smart Deals – Real-Time Bidding Platform</h3>
    //           <p className="mb-4 text-gray-600">MERN auction site with live bids, Firebase auth, and responsive UI. Handles real-time updates via polling.</p>
    //           <div className="flex space-x-4">
    //             <a href="https://github.com/AlFahad47/smart-deals" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GitHub</a>
    //             <a href="https://smart-deals.vercel.app" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Live Demo</a>
    //           </div>
    //         </div>
    //         <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
    //           <h3 className="text-xl font-semibold mb-2">Hero Apps – App Showcase Dashboard</h3>
    //           <p className="mb-4 text-gray-600">Modern React portfolio display with Tailwind, DaisyUI, and interactive elements. Clean, mobile-first design.</p>
    //           <div className="flex space-x-4">
    //             <a href="https://github.com/AlFahad47/hero-apps" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GitHub</a>
    //             <a href="https://hero-apps.vercel.app" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Live Demo</a>
    //           </div>
    //         </div>
    //       </div>
    //       <p className="text-center mt-8 text-gray-500">...and 26+ more on <a href="https://github.com/AlFahad47" className="text-indigo-600 hover:underline">GitHub</a></p>
    //     </div>
    //   </section>

    //   {/* Contact */}
    //   <section id="contact" className="py-20 bg-indigo-600 text-white">
    //     <div className="max-w-2xl mx-auto px-4 text-center">
    //       <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
    //       <p className="mb-8 leading-relaxed">Open to junior MERN roles, freelance gigs, or collaborations. Shoot me a message!</p>
    //       <div className="flex justify-center space-x-6 mb-8">
    //         <a href="mailto:alhamimfahad@gmail.com" className="p-3 bg-white text-indigo-600 rounded-full hover:bg-gray-100 transition-colors">
    //           <FiMail size={24} />
    //         </a>
    //         <a href="https://github.com/AlFahad47" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-indigo-600 rounded-full hover:bg-gray-100 transition-colors">
    //           <FiGithub size={24} />
    //         </a>
    //         <a href="https://linkedin.com/in/alfahad47" target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-indigo-600 rounded-full hover:bg-gray-100 transition-colors">
    //           <FiLinkedin size={24} />
    //         </a>
    //       </div>
    //       <p className="text-sm opacity-90">&copy; 2025 Fahad Molla. Built with React & Tailwind.</p>
    //     </div>
    //   </section>
    // </div>
    <div className="min-h-screen bg-base-100 text-base-content font-sans selection:bg-primary selection:text-white relative">
      
      {/* Background Pattern */}
      {/* <div className="fixed inset-0 z-0 pointer-events-none opacity-20 text-base-content bg-grid-pattern" /> */}

      {/* --- Floating Navbar (Pill Shape) --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-base-100/80 backdrop-blur-xl border border-base-content/10 rounded-full px-6 py-3 shadow-lg flex items-center gap-6">
          <span className="font-bold tracking-tight hidden sm:block">DEV.</span>
          <div className="flex gap-4 text-sm font-medium">
            <a href="#work" className="hover:text-primary transition">Work</a>
            <a href="#stack" className="hover:text-primary transition">Stack</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
          <div className="w-px h-4 bg-base-content/20 mx-2"></div>
          <button onClick={toggleTheme} className="hover:text-primary transition">
            {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* --- Hero Section (Minimalist & Centered) --- */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center pt-20">
          <div className="badge badge-primary badge-outline mb-6 p-4 font-mono">Available for hire</div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
            FULL STACK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              ENGINEER
            </span>
          </h1>
          <p className="max-w-xl text-xl text-base-content/60 mb-10 leading-relaxed">
            I craft accessible, pixel-perfect web experiences using 
            <span className="font-bold text-base-content"> React, Node.js </span>
            and modern UI architecture.
          </p>
          <div className="flex gap-4">
            <a href="#work" className="btn btn-primary btn-lg rounded-full">View Projects</a>
            <a href="https://github.com" target="_blank" className="btn btn-ghost btn-lg btn-circle">
              <Github />
            </a>
            <a href="https://linkedin.com" target="_blank" className="btn btn-ghost btn-lg btn-circle">
              <Linkedin />
            </a>
          </div>
        </section>

        {/* --- Bento Grid Skills --- */}
        <section id="stack" className="py-20">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl font-bold tracking-tight">Tech Stack</h2>
            <span className="font-mono text-sm opacity-50">/// SELECTED TOOLS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[120px]">
            
            {/* Large Block: Frontend */}
            <div className="md:col-span-2 md:row-span-2 bg-base-200/50 border border-base-content/5 rounded-3xl p-8 flex flex-col justify-between hover:bg-base-200 transition duration-500 group">
              <div className="p-3 bg-blue-500/10 w-fit rounded-2xl text-blue-500 group-hover:scale-110 transition">
                <Globe size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Frontend</h3>
                <p className="opacity-60">React 19, Tailwind, DaisyUI, Vite</p>
              </div>
            </div>

            {/* Block: Backend */}
            <div className="md:col-span-2 bg-base-200/50 border border-base-content/5 rounded-3xl p-6 flex items-center gap-4 hover:bg-base-200 transition duration-500">
              <div className="p-3 bg-green-500/10 rounded-2xl text-green-500">
                <Terminal size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Backend API</h3>
                <p className="text-sm opacity-60">Node.js, Express, Firebase</p>
              </div>
            </div>

            {/* Block: Database */}
            <div className="md:col-span-1 bg-base-200/50 border border-base-content/5 rounded-3xl p-6 flex flex-col justify-center items-center text-center hover:bg-base-200 transition duration-500">
              <Database size={28} className="mb-3 text-purple-500" />
              <span className="font-bold text-sm">MongoDB</span>
            </div>

            {/* Block: Tools */}
            <div className="md:col-span-1 bg-base-200/50 border border-base-content/5 rounded-3xl p-6 flex flex-col justify-center items-center text-center hover:bg-base-200 transition duration-500">
              <Code2 size={28} className="mb-3 text-orange-500" />
              <span className="font-bold text-sm">Git & Vercel</span>
            </div>

             {/* Wide Block: Special */}
             <div className="md:col-span-2 bg-primary text-primary-content rounded-3xl p-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-xl">Currently Learning</h3>
                <p className="opacity-80">Next.js 14 Server Actions</p>
              </div>
              <Cpu size={32} className="opacity-50" />
            </div>

          </div>
        </section>

        {/* --- Featured Projects (Large Cards) --- */}
        <section id="work" className="py-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold tracking-tight">Selected Work</h2>
          </div>

          <div className="space-y-12">
            {/* Project 1 */}
            <div className="group relative grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-sm border border-base-content/5">
                {/* Replace with your image */}
                <div className="w-full h-full bg-gradient-to-br from-base-300 to-base-200 group-hover:scale-105 transition duration-700"></div>
              </div>
              <div className="space-y-4">
                <span className="text-primary font-mono text-xs tracking-wider">01 / E-COMMERCE</span>
                <h3 className="text-3xl font-bold">Shopify Dashboard</h3>
                <p className="text-base-content/70 leading-relaxed">
                  A comprehensive dashboard for managing inventory and orders. 
                  Built with React and Node.js to handle real-time data updates via websockets.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="badge badge-neutral badge-lg">React</span>
                  <span className="badge badge-neutral badge-lg">MongoDB</span>
                  <span className="badge badge-neutral badge-lg">Express</span>
                </div>
                <div className="pt-4">
                  <a href="#" className="btn btn-outline rounded-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition">
                    View Case Study <ExternalLink size={16} className="ml-2"/>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 (Reversed Layout) */}
             <div className="group relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:order-2 aspect-video bg-base-300 rounded-3xl overflow-hidden shadow-sm border border-base-content/5">
                <div className="w-full h-full bg-gradient-to-bl from-base-300 to-base-200 group-hover:scale-105 transition duration-700"></div>
              </div>
              <div className="space-y-4 md:order-1">
                <span className="text-secondary font-mono text-xs tracking-wider">02 / PRODUCTIVITY</span>
                <h3 className="text-3xl font-bold">TaskMaster Pro</h3>
                <p className="text-base-content/70 leading-relaxed">
                  Collaborative task management app featuring drag-and-drop interfaces 
                  and team authentication via Firebase.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="badge badge-neutral badge-lg">Firebase</span>
                  <span className="badge badge-neutral badge-lg">Redux</span>
                  <span className="badge badge-neutral badge-lg">DaisyUI</span>
                </div>
                <div className="pt-4">
                  <a href="#" className="btn btn-outline rounded-full group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition">
                    Live Demo <ExternalLink size={16} className="ml-2"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Minimal Footer --- */}
        <footer className="py-20 border-t border-base-content/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Let's build something.</h2>
            <a href="mailto:hello@example.com" className="text-base-content/60 hover:text-primary transition">
              hello@example.com
            </a>
          </div>
          <div className="flex gap-6 opacity-50">
            <Github size={20} className="hover:opacity-100 cursor-pointer" />
            <Linkedin size={20} className="hover:opacity-100 cursor-pointer" />
            <Mail size={20} className="hover:opacity-100 cursor-pointer" />
          </div>
        </footer>

      </main>
    </div>
  );
}

export default Port;