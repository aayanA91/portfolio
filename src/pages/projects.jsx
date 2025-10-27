import React from "react";
import { useState } from "react";
import { Terminal , Github , Info , Eye } from "lucide-react";
import { div, label } from "framer-motion/client";

const Projects = ()=>{
  const [selectedProject, setSelectedProject] = useState(null);
    const divs = [
        {value : "4" , label : "PROJECTS DEPLOYED" , color: 'from-green-400 to-emerald-500'},
        {value : "15+" , label : "TECHNOLOGIES" , color: 'from-green-400 to-emerald-500'},
{value : "10k+" , label : "Lines OF CODE" , color: 'from-green-400 to-emerald-500'},
{value : "100%" , label : "SUCCESS RATE" , color: 'from-green-400 to-emerald-500'},
    ]
    const project = [
      {
            no:"PROJECT_01",
            value:"BMS",
            description:"A full-stack Building Management System developed using React, Tailwind CSS, and a backend API. It enables users to manage tenants, maintenance requests, and facility details through an intuitive dashboard with real-time updates and responsive design.",
            tech:["REACT JS" ,"NODEJS" ,"TAILWINDCSS","EXPRESS JS", "MONGODB"],
            year:"2025",
            link:"https://building-management-system-vw4c.vercel.app/"
        },
         {
            no:"PROJECT_02",
            value:"PORTFOLIO",
            description:"A personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and achievements. It features a clean, responsive design, smooth animations, and a dynamic interface for an engaging user experience.",
            tech:["REACT JS"  ,"TAILWINDCSS",],
            year:"2025",
            link:"https://aayan-portfolio-three.vercel.app/"
        },
        {no:"PROJECT_03",
            value:"LUNA CRYSTALS", 
            description:"A modern e-commerce website built using only frontend technologies, showcasing a responsive product catalog, category pages, and a shopping cart interface.  ",
        tech:["HTML","CSS" , "JAVASCRIPT" , "BOOTSTRAP"],
        year:"2024",
        link:"https://lunacrystal.netlify.app"
        },
        {
no:"PROJECT_04",
value:"BloomBlosom",
description:"A modern, fully responsive e-commerce website built with HTML and CSS. It highlights clean design, product display sections, and a smooth shopping experience on all devices.",
tech:["HTML","CSS"],
year:"2024",
link:"https://bloomblosom.netlify.app"
        },
        {
          no:"PROJECT_05",
          value:"E book",
          description:"The E-Book Website is a dynamic web application developed using PHP, HTML, and CSS that allows users to browse, read, and download digital books online.",
          tech:["HTML","CSS","PHP"],
          year:"2025",
          link:"https://zebook.free.nf/"
        },
        {
          no:"PROJECT_06",
          value:"Jarvis",
          description:"A Python-based AI assistant that responds to voice commands to open/close apps, manage windows, take screenshots, monitor the screen with OCR, and perform Google searches.",
          tech:["python"],
          year:"2024",
          link:"https://github.com/aayanA91/JARVIS"
        },

        
    ]
    return(
        <>
        <div className="grid grid-col-3 min-h-screen bg-black font-mono text-green-400" id="projects">
            <div className="mx-4 md:mx-0">
            <div className="max-w-6xl w-full mx-auto mt-40 ">
<div className="w-full border border-green-400 bg-black py-4 shadow-green-400/20 ">
    <div className="flex items-center justify-between flex-row gap-8 ">
    <div className="flex items-center gap-2 ml-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{animationDelay: '0.3s'}} />
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '0.6s'}} />
                </div>
                <span className="text-xs tracking-wider text-green-400">root@AAYAN_ANEES:/Projects</span>
                <span className="text-xs tracking-wider text-green-400 mr-2">{<Terminal className="w-5 h-6"/>}</span>
</div>
<div className="w-full border border-green-400 mt-4"></div>
<div className="p-8 md:p-12 space-y-4">
                <div className="space-y-4">
                  <div className="text-green-500 text-sm">
                    <span className="animate-pulse">█</span> ls -la /projects/completed
                  </div>
                  </div>
                  
                  <div className="space-y-0">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                      <span className="text-white">PROJECT ARCHIVE</span>
                    </h1>
                    </div>
                    
        
<p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl ">
<span>A collection of system built, deployed, and battle-tested in production. Each project represents problems solved and code that ships </span>
</p>
                  </div>  
<div className="grid grid-cols-2 md:grid-cols-4 gap-6  mx-auto mb-10 ">
{divs.map((one , i)=>(
<div
key={i}
className="border border-green-400/30 bg-green-400/5 p-2 md:p-6  hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group hover:scale-110 m-6"
>
    <div className="text-green-400 text-3xl">{one.value}</div>
    <div className="text-gray-400">{one.label}</div>

</div>
))}
</div>
</div>


{/* Projects Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto mt-40 min-h-screen">
  {project.map((pro, i) => (
    <div
      key={i}
      className="p-10 items-stretch border border-green-400/30 bg-green-400/5 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group "
    >
      {/* Header: Project number + Year */}
      <div className="flex justify-between items-center text-green-400 font-mono text-sm mb-2">
        <div className="flex items-center gap-4">
          <Terminal />
          <span>{pro.no}</span>
        </div>
        <span>{pro.year}</span>
      </div>

      <div className="border border-green-400 mb-4"></div>

      {/* Title */}
      <div className="text-white text-2xl font-bold tracking-tight mb-2">
        {pro.value}
      </div>

      {/* Description */}
      <p className="text-base text-gray-300 leading-relaxed mb-4">
        {pro.description}
      </p>

      {/* Tech Stack Section */}
      <div>
        <div className="text-green-400 font-mono mb-2">{">"} TECH_STACK</div>
        <div className="flex flex-wrap gap-2">
          {pro.tech.map((te, i) => (
            <span
              key={i}
              className="border border-green-400 text-white text-xs px-2 py-1 rounded"
            >
              {te}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 md:gap-8 items-center justify-center mt-10">
  {/* Detail Button */}
  <button
    onClick={() => setSelectedProject(pro)}
    className="flex items-center justify-center gap-2 px-4 py-2 border border-green-400 text-green-400 rounded-md hover:scale-110 transition-transform duration-300"
  >
    <Info />
    Detail
  </button>

  {/* Live Preview Button */}
  <a href={pro.link} target="_blank" rel="noopener noreferrer">
    <div className="flex items-center justify-center gap-2 px-4 py-2 border border-green-400 text-green-400 rounded-md hover:scale-110 transition-transform duration-300">
      <Eye />
      Live Preview
    </div>
  </a>
</div>

    </div>
  ))}
  {selectedProject && (
  <div
    className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center p-6 z-50"
    onClick={() => setSelectedProject(null)}
  >
    {/* Scanlines Effect */}
    <div className="fixed inset-0 pointer-events-none opacity-5" style={{
      backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,255,0,0.1) 0px, transparent 2px, transparent 4px)',
    }} />
    
    <div
      className="bg-black border-2 border-green-400 shadow-2xl shadow-green-400/20 max-w-4xl w-full max-h-[85vh] overflow-hidden relative text-green-400 font-mono"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Terminal Header */}
      <div className="border-b-2 border-green-400 p-4 flex items-center justify-between bg-green-400/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{animationDelay: '0.3s'}} />
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '0.6s'}} />
        </div>
        <span className="text-xs tracking-wider">root@AAYAN_ANEES:/projects/{selectedProject.value.toLowerCase().replace(/\s+/g, "-")}</span>
        <button
          onClick={() => setSelectedProject(null)}
          className="text-green-400 hover:text-red-500 transition text-xl font-bold"
          aria-label="Close modal"
        >
          <Terminal className="w-5 h-5" />
        </button>
      </div>

      {/* Terminal Content - Scrollable */}
      <div className="p-8 space-y-6 overflow-y-auto max-h-[calc(85vh-80px)]">
        {/* Command Prompt */}
        <div className="text-green-500 text-sm">
          <span className="animate-pulse">█</span> cat project_details.log
        </div>

        {/* Project Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              {selectedProject.value}
            </h2>
            <span className="text-green-400 text-sm border border-green-400 px-3 py-1">
              {selectedProject.year}
            </span>
          </div>
          <div className="h-px bg-gradient-to-r from-green-400 via-green-400 to-transparent" />
        </div>

        {/* Project Metadata */}
        <div className="flex flex-wrap gap-6 text-sm border border-green-400/30 bg-green-400/5 p-4">
          <div>
            <span className="text-gray-400">{">"} PROJECT_ID:</span>
            <span className="text-green-400 ml-2">{selectedProject.no}</span>
          </div>
          <div>
            <span className="text-gray-400">{">"} STATUS:</span>
            <span className="text-green-400 ml-2">DEPLOYED & MAINTAINED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">{">"} UPTIME:</span>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-400">ONLINE</span>
          </div>
        </div>

        {/* Description Section */}
        <div className="space-y-3">
          <div className="text-green-400 text-sm font-bold">
            {">"} cat README.md
          </div>
          <div className="border border-green-400/30 bg-black p-6 space-y-4">
            <p className="text-gray-300 leading-relaxed">
              {selectedProject.description}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              This project was architected with production-grade standards, emphasizing performance optimization, scalability, and maintainable code architecture. Built using cutting-edge technologies and following industry best practices.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <div className="text-green-400 text-sm font-bold">
            {">"} ls -la /tech_stack/
          </div>
          <div className="border border-green-400/30 bg-black p-4">
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="border border-green-400 bg-green-400/10 text-green-400 text-xs px-3 py-1 hover:bg-green-400/20 transition-all"
                >
                  drwxr-xr-x {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 font-mono text-green-400 border-2 border-green-400 bg-black overflow-hidden transition-all duration-300 hover:text-black flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              {">"} EXECUTE: LAUNCH_PROJECT
            </span>
            <div className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          
          <button
            onClick={() => setSelectedProject(null)}
            className="group relative px-6 py-3 font-mono text-green-400 border-2 border-green-400/30 bg-black overflow-hidden transition-all duration-300 hover:border-green-400 hover:text-black"
          >
            <span className="relative z-10">{">"} EXIT</span>
            <div className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Terminal Footer */}
        <div className="border-t border-green-400/30 pt-4 text-xs text-green-600 space-y-1">
          <p>root@portfolio:~/projects/{selectedProject.value.toLowerCase().replace(/\s+/g, "-")}#</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Process running | PID: {Math.floor(Math.random() * 10000)} | Status: ACTIVE
          </p>
        </div>
      </div>
    </div>
  </div>
)}
  
</div>


            </div>
            
</div>
        </div>
        </>
    )
}
export default Projects;