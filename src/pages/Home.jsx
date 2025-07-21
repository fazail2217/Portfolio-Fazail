
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  useEffect(() => {
    const setDescColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      document.documentElement.style.setProperty('--desc-color', isDark ? '#fff' : '#000');
    };
    setDescColor();
    const observer = new MutationObserver(setDescColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-fade-in">
      <div className="relative">
        <img
          src="/WhatsApp%20Image%202025-05-02%20at%205.26.16%20PM.jpeg"
          alt="Fazail Ahmad"
          className="w-40 h-40 rounded-full shadow-lg border-4 border-emerald-500 mx-auto mb-6 object-cover animate-profile-pop"
          style={{objectPosition: 'center'}}
        />
        <span className="absolute bottom-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs animate-bounce">Hi!</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 animate-slide-down">Fazail Ahmad</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-emerald-600 dark:text-emerald-400 mb-6 animate-slide-up">Software Engineer & Frontend Developer</h2>
      <p
        className="text-lg max-w-2xl mb-8 animate-fade-in"
        style={{
          color: 'var(--desc-color, #000)',
          textShadow: '0 1px 2px rgba(0,0,0,0.08)'
        }}
      >
        Welcome to my portfolio! I build beautiful, responsive web applications with React, JavaScript, and modern UI frameworks. Explore my work, experience, and skills below.
      </p>
      {/* Navigation buttons removed from Home page as requested */}
      <div className="mt-10 animate-fade-in">
        <a href="/Fazail_Ahmad_Resume.pdf" download className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-emerald-800 transition-colors">Download Resume</a>
      </div>
    </section>
  );
};
export default Home;
