import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Dark mode helper
const toggleDarkMode = (enabled) => {
  if (enabled) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

// Main App component
const App = () => {
    // State for mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // State for dark mode
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark';
        }
        return false;
    });
    // State for projects data
    const [projects, setProjects] = useState([
        {
            title: 'Forklift Shop Management System',
            year: 2025,
            description: 'Developed a desktop application for managing a forklift shop, handling inventory and sales.',
            technologies: ['C#', 'SQL Studio'],
            type: 'Work'
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
    ]);
    // State for current project filter
    const [filter, setFilter] = useState('All');

    // Ref for the Chart.js canvas element
    const chartRef = useRef(null);
    // Ref for the Chart.js instance
    const chartInstance = useRef(null);

    // Get all unique technologies for filters
    const allTechs = ['All', ...new Set(projects.flatMap(p => p.technologies))];

    // Filter projects based on the current filter state
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.technologies.includes(filter));

    // Effect for Section Animations (fade-in from bottom)
    // Effect for dark mode on mount
    useEffect(() => {
        toggleDarkMode(darkMode);
    }, [darkMode]);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the section is visible
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    sectionObserver.unobserve(entry.target); // Stop observing once visible
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            // Add initial hidden classes for animation
            section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-800', 'ease-out');
            sectionObserver.observe(section);
        });

        // Cleanup observer on component unmount
        return () => {
            sections.forEach(section => sectionObserver.unobserve(section));
        };
    }, []);

    // Effect for H1 and H2 initial animation
    useEffect(() => {
        const h1Element = document.querySelector('#about h1');
        const h2Element = document.querySelector('#about h2');

        if (h1Element) {
            h1Element.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
            setTimeout(() => {
                h1Element.classList.remove('opacity-0', 'translate-y-10');
                h1Element.classList.add('opacity-100', 'translate-y-0');
            }, 100); // Small delay for h1
        }
        if (h2Element) {
            h2Element.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000', 'ease-out');
            setTimeout(() => {
                h2Element.classList.remove('opacity-0', 'translate-y-10');
                h2Element.classList.add('opacity-100', 'translate-y-0');
            }, 300); // Slightly longer delay for h2
        }
    }, []);

    // Effect for Experience Items and Project Cards animations
    useEffect(() => {
        const animatedElements = document.querySelectorAll('.experience-item, .project-card');
        const itemObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('experience-item')) {
                        entry.target.classList.remove('opacity-0', '-translate-x-20', 'translate-x-20');
                        entry.target.classList.add('opacity-100', 'translate-x-0');
                    } else if (entry.target.classList.contains('project-card')) {
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                    itemObserver.unobserve(entry.target);
                }
            });
        }, itemObserverOptions);

        animatedElements.forEach(element => {
            if (element.classList.contains('experience-item')) {
                const isLeftAligned = element.classList.contains('ml-[calc(50%+2rem)]');
                element.classList.add('opacity-0', isLeftAligned ? '-translate-x-20' : 'translate-x-20');
            } else if (element.classList.contains('project-card')) {
                element.classList.add('opacity-0', 'translate-y-10');
            }
            element.classList.add('transition-all', 'duration-700', 'ease-out');
            itemObserver.observe(element);
        });

        return () => {
            animatedElements.forEach(element => itemObserver.unobserve(element));
        };
    }, [filter]); // Re-run when filter changes to observe new cards after filtering

    // Effect for Chart.js initialization and updates
    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy(); // Destroy existing chart before creating a new one
        }

        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        'HTML5', 'CSS', 'JavaScript', 'Tailwind', 'React JS', 'Bootstrap',
                        'OOP', 'DSA', 'Firebase (Auth, Database)', 'MySQL & DBMS', 'C#', 'C++'
                    ],
                    datasets: [{
                        label: 'Frontend',
                        data: [95, 90, 90, 85, 85, 80, 0, 0, 0, 0, 0, 0], // Example proficiency scores
                        backgroundColor: 'rgba(5, 150, 105, 0.7)', // Emerald Green
                        borderColor: 'rgba(5, 150, 105, 1)',
                        borderWidth: 1
                    }, {
                        label: 'Backend & Concepts',
                        data: [0, 0, 0, 0, 0, 0, 80, 75, 70, 75, 65, 60], // Example proficiency scores
                        backgroundColor: 'rgba(251, 191, 36, 0.7)', // Amber
                        borderColor: 'rgba(251, 191, 36, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: '#1F2937' // Dark Gray text
                            }
                        },
                        title: {
                            display: true,
                            text: 'Skill Proficiency (Self-Assessed)',
                            color: '#1F2937' // Dark Gray text
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.x !== null && context.parsed.x > 0) {
                                       label += `${context.label}`;
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                            display: false,
                            max: 100,
                            ticks: {
                                color: '#1F2937' // Dark Gray text
                            }
                        },
                        y: {
                            stacked: true,
                            ticks: {
                                color: '#1F2937' // Dark Gray text
                            }
                        }
                    }
                }
            });
        }

        // Cleanup chart instance on component unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div className={"antialiased " + (darkMode ? 'dark bg-gray-900 text-white' : '')}>
            {/* Header & Navigation */}
            <header id="header" className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold text-gray-900 dark:text-white">Fazail Ahmad</a>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">About</a>
                        <a href="#experience" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">Experience</a>
                        <a href="#education" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">Education</a>
                        <a href="#projects" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">Projects</a>
                        <a href="#skills" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">Skills</a>
                        <a href="#certifications" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">Certifications & Courses</a>
                    </div>
                    <a href="/Fazail_Ahmad_Resume.pdf" download className="hidden md:block bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors mr-2">Download Resume</a>
                    <a href="mailto:fazailahmad237@gmail.com" className="hidden md:block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">Contact Me</a>
                    <button
                        onClick={() => setDarkMode(dm => !dm)}
                        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"></path></svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 6.66l-.71-.71M4.05 4.93l-.71-.71"/></svg>
                        )}
                    </button>
                    <button id="mobile-menu-button" className="md:hidden text-gray-800 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </nav>
                {/* Mobile Menu */}
                <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pt-2 pb-4`}>
                    <a href="/Fazail_Ahmad_Resume.pdf" download className="block py-2 text-emerald-700 hover:text-emerald-900 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Download Resume</a>
                    <a href="#about" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                    <a href="#experience" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
                    <a href="#projects" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                    <a href="#skills" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
                    <a href="#certifications" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>Certifications & Courses</a>
                    <a href="mailto:fazailahmad237@gmail.com" className="block mt-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-center">Contact Me</a>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                
                {/* About Section */}
                <section id="about" className="mb-24">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 opacity-0 translate-y-10">Software Engineer</h1>
                    <h2 className="text-3xl md:text-4xl font-semibold text-emerald-700 mt-2 opacity-0 translate-y-10">Frontend Developer | Full Stack Aspirant</h2>
                    
                    <div className="mt-8 text-lg text-gray-700 max-w-4xl space-y-4">
                        <p>Passionate Software Engineer specializing in Frontend Development with expertise in React.js, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS, focused on building responsive and user-friendly web applications.</p>
                        <p>Proven ability to develop website interfaces with modern frameworks, design engaging user interfaces, and create responsive web applications.</p>
                    </div>
                    <div className="mt-8 flex items-center space-x-4">
                        <a href="https://www.linkedin.com/in/fazail-ahmad" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href="https://github.com/fazail2217" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="mb-24">
                    <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h3>
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-emerald-200"></div>
                        {/* Experience Item 1 (Left Aligned) */}
                        <div className="relative mb-12 experience-item ml-[calc(50%+2rem)]">
                            {/* <div className="absolute w-6 h-6 bg-emerald-600 rounded-full left-1/2 -translate-x-1/2 mt-1.5 border-4 border-white"></div> */}
                            <div className="p-6 bg-white rounded-lg shadow-md">
                                <h4 className="font-bold text-xl text-gray-900">Web Development Internship (Front-End)</h4>
                                <p className="text-gray-700">InvoByte Pvt | Lahore, Pakistan</p>
                                <p className="text-sm text-gray-500 mt-1 mb-3">March 2025 - May 2025</p>
                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                    <li>Specialized in creating websites using advanced tools and innovative ideas.</li>
                                    <li>Developed website interfaces with modern frameworks like Angular, React.js, and Tailwind.</li>
                                    <li>Designed responsive websites with a focus on an engaging and user-friendly interface.</li>
                                </ul>
                            </div>
                        </div>
                        {/* Experience Item 2 (Right Aligned) */}
                        <div className="relative mb-12 experience-item mr-[calc(50%+2rem)]">
                            {/* <div className="absolute w-6 h-6 bg-emerald-600 rounded-full left-1/2 -translate-x-1/2 mt-1.5 border-4 border-white"></div> */}
                            <div className="p-6 bg-white rounded-lg shadow-md">
                                <h4 className="font-bold text-xl text-gray-900 text-right">Web Development Internship (Front-End)</h4>
                                <p className="text-gray-700 text-right">Zaions | Lahore, Pakistan</p>
                                <p className="text-sm text-gray-500 mt-1 mb-3 text-right">December 2024 - Feb 2025</p>
                                <ul className="list-disc list-outside text-gray-700 space-y-1 text-left">
                                    <li>Utilized advanced tools and ideas to create websites.</li>
                                    <li>Developed website interfaces using frameworks such as Angular and Tailwind.</li>
                                    <li>Ensured responsive websites with appealing User Interface.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="mb-24">
                    <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">Project Showcase</h3>
                    <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">Here's a selection of my work. Click the buttons to filter by technology and see how I apply my skills to solve real-world problems and build engaging applications.</p>
                    
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

                {/* Skills Section */}
                <section id="skills" className="mb-24">
                    <h3 className="text-4xl font-bold text-gray-900 mb-4 text-center">Technical Skills</h3>
                    <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">My technical abilities span across frontend and backend development. This chart provides a high-level overview of my core competencies, showcasing my versatility as a developer.</p>
                    <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
                        <div className="chart-container relative w-full h-96 max-w-4xl mx-auto">
                            <canvas ref={chartRef} id="skillsChart"></canvas>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="mb-24">
                    <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Education</h3>
                    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                        <h4 className="font-bold text-2xl text-gray-900">Bachelors Of Sciences, Software Engineering</h4>
                        <p className="text-emerald-700">Minhaj University Lahore | Lahore, Pakistan</p>
                        <p className="text-sm text-gray-500 mt-1 mb-3">2021 - 2025</p>
                        <p className="text-gray-700">Grade: CGPA 3.74</p>
                    </div>
                </section>

                {/* Certifications Section */}
                <section id="certifications" className="mb-24">
                    <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Certifications & Courses</h3>
                    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>**Legacy JavaScript Algorithm & Data Structures** - FreeCodeCamp (2025)</li>
                            <li>**Responsive Web Design** - FreeCodeCamp (2023)</li>
                            <li>**English Language Course** - PITMAN Training (2022)</li>
                            <li>**Build Responsive Real-World Websites with HTML and CSS** - Jonas Schmedtmann (Udemy)</li>
                        </ul>
                    </div>
                </section>

            </main>

            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2024 Fazail Ahmad. All rights reserved.</p>
                    <p className="mt-2">Designed and built to showcase my development journey.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;