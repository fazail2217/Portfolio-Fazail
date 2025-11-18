import React, { useState } from 'react';

const projectsData = [
  // Live Projects
  { title: 'Enterprise Resource Planning System (ERP)', year: 2025, description: 'Developed a Web Base application for managing a  Enterprise Resource Planing, handling inventory sales each and everything.', technologies: ['Laravel', 'MySql', 'Bootstrap', 'CSS', 'JavaScript'], type: 'Industrial Project', live: true, link: 'https://demo.algosofttech.com/' },
  { title: 'Admin Portal (Max Auto Care)', year: 2025, description: 'Fully functional admin portal for Max Auto Care e-commerce.', technologies: ['Laravel', 'MySql', 'Bootstrap', 'CSS', 'JavaScript'], type: 'Industrial Project', live: true, link: 'https://adminportal.maxautocare.com.pk/' },
  { title: 'Eleeva Adhesives', year: 2025, description: 'Complete corporate website for adhesives company.', technologies: ['React.Js', 'HTML5', 'Bootstrap', 'CSS3', 'JavaScript'], type: 'Industrial Project', live: true, link: 'https://eleevaadhesives.com/' },
  { title: 'Skill Sharing web App', year: 2025, description: 'Real-time skill exchange platform with video sessions & chat.', technologies: ['HTML', 'CSS', 'React', 'Firebase', 'JavaScript'], type: 'Personal', live: true, link: 'https://skill-sharing-app.vercel.app/' },

  // All other projects (non-live)
  { title: 'Forklift Shop Management System', year: 2025, description: 'Desktop application for forklift shop management.', technologies: ['C#', 'SQL Studio'], type: 'Work', live: false },
  { title: 'CV Builder - Web Base', year: 2025, description: 'Web-based resume builder with PDF export.', technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage'], type: 'University', live: false },
  { title: 'TO-DO-List Web App', year: 2024, description: 'Feature-rich to-do list with categories & image preview.', technologies: ['HTML', 'CSS', 'JavaScript'], type: 'Work', live: false },
  { title: 'Pharmacy Management System Using C#', year: 2024, description: 'Windows Forms app with SQL Server.', technologies: ['C#', 'SQL Studio'], type: 'University', live: false },
  { title: 'OBAN Foods', year: 2023, description: 'Landing page clone (HTML & CSS focus).', technologies: ['HTML', 'CSS'], type: 'Work', live: false },
  { title: 'Pharmacy Management System (Design)', year: 2023, description: 'Full system design & UML diagrams.', technologies: ['Draw.io', 'Visual Paradigm'], type: 'University', live: false },
  { title: 'Cafe Management System Using C++', year: 2022, description: 'Console-based cafe order & inventory system.', technologies: ['C++'], type: 'University', live: false }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const allTechs = ['All', ...new Set(projectsData.flatMap(p => p.technologies))];
  const liveProjects = projectsData.filter(p => p.live);
  const allFiltered = filter === 'All' ? projectsData : projectsData.filter(p => p.technologies.includes(filter));

  return (
    <>
      {/* Live Projects Section */}
      {liveProjects.length > 0 && (
        <section className="mb-24">
          <h3 className="text-4xl font-bold text-white-900 mb-4 text-center">Live Projects</h3>
          <p className="text-center text-white-700 max-w-2xl mx-auto mb-12">Projects currently deployed and accessible online.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveProjects.map((project, i) => (
              <div key={i} className="project-card bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col border border-emerald-100">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-xl text-gray-900">{project.title}</h4>
                    <span className="text-sm font-medium text-gray-500">{project.year}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((t, j) => (
                      <span key={j} className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-semibold text-sm inline-flex items-center gap-1">
                    View Live <span>↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Projects Section */}
      <section id="projects">
        <h3 className="text-4xl font-bold text-white-900 mb-4 text-center">Project Showcase</h3>
        <p className="text-center text-white-700 max-w-2xl mx-auto mb-12">
          Full collection of my work. Filter by technology below.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allTechs.map(tech => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                filter === tech ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-emerald-50'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFiltered.map((project, i) => (
            <div key={i} className="project-card bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col border border-emerald-100">
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-xl text-gray-900">{project.title}</h4>
                  <span className="text-sm font-medium text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, j) => (
                  <span key={j} className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>
                ))}
                {project.live && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 font-semibold text-sm inline-flex items-center gap-1 mt-3">
                    View Live <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;