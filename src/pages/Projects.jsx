import React, { useState } from 'react';

const projectsData = [
  {
    title: 'Forklift Shop Management System',
    year: 2025,
    description: 'Developed a desktop application for managing a forklift shop, handling inventory and sales.',
    technologies: ['C#', 'SQL Studio'],
    type: 'Work'
  },
  {
    title: 'Skill Sharing web App',
    year: 2025,
    description: 'Skill sharing web app for the exchange of skills, specifically excluding static skill exchange. It includes one-on-one video sessions and chat between tutor and learner for personalized learning.',
    technologies: ['HTML', 'CSS', 'React', 'Firebase', 'JavaScript'],
    type: 'Personal'
  },
  {
    title: 'CV Builder - Web Base',
    year: 2025,
    description: 'Developed a web-based CV builder to create resumes, with PDF export and local storage for templates.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
    type: 'University'
  },
  {
    title: 'TO-DO-List Web App',
    year: 2024,
    description: 'Developed a JavaScript-focused to-do list web application with features including image view and category organization.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    type: 'Work'
  },
  {
    title: 'Pharmacy Management System Using C#',
    year: 2024,
    description: 'Developed a desktop application for pharmacy management using C# Windows Forms, with SQL Server backend.',
    technologies: ['C#', 'SQL Studio'],
    type: 'University'
  },
  {
    title: 'OBAN Foods',
    year: 2023,
    description: 'Developed landing pages for OBAN Foods as a web clone project, focusing on HTML and CSS.',
    technologies: ['HTML', 'CSS'],
    type: 'Work'
  },
  {
    title: 'Pharmacy Management System (Design)',
    year: 2023,
    description: 'Designed the architecture of an online pharmacy management system, including UML diagrams.',
    technologies: ['Draw.io', 'Visual Paradigm'],
    type: 'University'
  },
  {
    title: 'Cafe Management System Using C++',
    year: 2022,
    description: 'Developed a cafe product management, order taker, and inventory system using C++.',
    technologies: ['C++'],
    type: 'University'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const allTechs = ['All', ...new Set(projectsData.flatMap(p => p.technologies))];
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.technologies.includes(filter));

  return (
    <section id="projects" className="mb-24">
      <h3 className="text-4xl font-bold text-white-900 mb-4 text-center">Project Showcase</h3>
      <p className="text-center text-white-700 max-w-2xl mx-auto mb-12">Here's a selection of my work. Click the buttons to filter by technology and see how I apply my skills to solve real-world problems and build engaging applications.</p>
      <div id="project-filters" className="flex flex-wrap justify-center gap-2 mb-8">
        {allTechs.map(tech => (
          <button
            key={tech}
            className={`filter-btn px-4 py-2 text-sm font-medium rounded-full shadow-sm transition-colors ${filter === tech ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-emerald-50'}`}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>
      <div id="project-gallery" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col border border-emerald-100">
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl text-gray-900">{project.title}</h4>
                <span className="text-sm font-medium text-gray-500">{project.year}</span>
              </div>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-semibold text-sm">View Live ↗</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
