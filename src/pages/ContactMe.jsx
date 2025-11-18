import React from 'react';

const ContactMe = ({ isDark = false }) => (
  <section id="contact" className="mb-24">
    <h3
      className={`mb-12 text-4xl md:text-5xl font-bold text-center ${
        isDark ? "text-white" : "text-white-900"
      }`}
    >
      Get In Touch With Me!
    </h3>
    <div
      className={`max-w-2xl p-8 mx-auto text-center rounded-2xl shadow-lg border ${
        isDark
          ? "bg-gray-800/50 border-gray-700/50"
          : "bg-white border-gray-200"
      }`}
    >
      <p
        className={`mb-8 text-lg ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Ready to discuss a project or opportunity?
      </p>
      <div className="space-y-6">
        <p
          className={`flex items-center justify-center space-x-3 text-lg font-semibold ${
            isDark ? "text-gray-200" : "text-gray-900"
          }`}
        >
          <svg
            className={`w-6 h-6 ${
              isDark ? "text-emerald-400" : "text-blue-600"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href="mailto:fazailahmad237@gmail.com"
            className={`${
              isDark
                ? "text-emerald-400 hover:text-emerald-300"
                : "text-blue-600 hover:text-blue-800"
            }`}
          >
            fazailahmad237@gmail.com
          </a>
        </p>
        <p
          className={`flex items-center justify-center space-x-3 text-lg font-semibold ${
            isDark ? "text-gray-200" : "text-gray-900"
          }`}
        >
          <svg
            className={`w-6 h-6 ${
              isDark ? "text-emerald-400" : "text-blue-600"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <a
            href="tel:+923216886133"
            className={`${
              isDark
                ? "text-gray-200 hover:text-emerald-400"
                : "text-gray-900 hover:text-blue-800"
            }`}
          >
            +92 333 4526751
          </a>
        </p>
        <p
          className={`flex items-center justify-center space-x-3 text-lg font-semibold ${
            isDark ? "text-gray-200" : "text-gray-900"
          }`}
        >
          <svg
            className={`w-6 h-6 ${
              isDark ? "text-emerald-400" : "text-blue-600"
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <a
            href="https://www.linkedin.com/in/fazail-ahmad"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDark
                ? "text-emerald-400 hover:text-emerald-300"
                : "text-blue-600 hover:text-blue-800"
            }`}
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default ContactMe;