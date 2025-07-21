import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';




const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <Router>
      <div className="antialiased dark bg-gray-900 text-white">
        {/* Header & Navigation */}
        <header id="header" className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-black">Fazail Ahmad</Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">Home</Link>
              <Link to="/about" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">About</Link>
              <Link to="/experience" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">Experience</Link>
              <Link to="/education" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">Education</Link>
              <Link to="/projects" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">Projects</Link>
              <Link to="/skills" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">Skills</Link>
              <Link to="/certifications" className="nav-link text-gray-700 hover:text-emerald-700 border-b-2 border-transparent hover:border-emerald-700">Certifications & Courses</Link>
            </div>
            {/* Download Resume button removed as requested */}
            <a href="mailto:fazailahmad237@gmail.com" className="hidden md:block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">Contact Me</a>
            {/* Dark mode toggle removed, always dark theme */}
            <button id="mobile-menu-button" className="md:hidden text-gray-800 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </nav>
          {/* Mobile Menu */}
          <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden px-6 pt-2 pb-4`}>
            {/* Download Resume button removed from mobile menu as requested */}
            <Link to="/" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/experience" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>Experience</Link>
            <Link to="/projects" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
            <Link to="/skills" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>Skills</Link>
            <Link to="/education" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>Education</Link>
            <Link to="/certifications" className="block py-2 text-gray-700 hover:text-emerald-700" onClick={() => setIsMobileMenuOpen(false)}>Certifications & Courses</Link>
            <a href="mailto:fazailahmad237@gmail.com" className="block mt-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-center">Contact Me</a>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2024 Fazail Ahmad. All rights reserved.</p>
            <p className="mt-2">Designed and built to showcase my development journey.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;