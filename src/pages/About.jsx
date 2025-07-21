import React from 'react';

const About = () => (
  <section id="about" className="mb-24">
    <h1 className="text-5xl md:text-6xl font-bold text-white-900">Software Engineer</h1>
    <h2 className="text-3xl md:text-4xl font-semibold text-emerald-700 mt-2">Frontend Developer | Full Stack Aspirant</h2>
    <div className="mt-8 text-lg text-white-700 max-w-4xl space-y-4">
      <p>Passionate Software Engineer specializing in Frontend Development with expertise in React.js, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS, focused on building responsive and user-friendly web applications.</p>
      <p>Proven ability to develop website interfaces with modern frameworks, design engaging user interfaces, and create responsive web applications.</p>
    </div>
    <div className="mt-8 flex items-center space-x-4">
      <a href="https://www.linkedin.com/in/fazail-ahmad" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700">
        {/* LinkedIn SVG */}
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      </a>
      <a href="https://github.com/fazail2217" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-700">
        {/* GitHub SVG */}
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      </a>
    </div>
  </section>
);

export default About;
