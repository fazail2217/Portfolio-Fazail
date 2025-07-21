import React from 'react';

const Experience = () => (
  <section id="experience" className="mb-24">
    <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h3>
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-emerald-200"></div>
      {/* Experience Item 1 */}
      <div className="relative mb-12 experience-item ml-[calc(50%+2rem)]">
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
      {/* Experience Item 2 */}
      <div className="relative mb-12 experience-item mr-[calc(50%+2rem)]">
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
);

export default Experience;
