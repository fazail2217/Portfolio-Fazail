
import { useState} from "react";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  

  

  // WhatsApp number - replace with your actual WhatsApp business number
  const whatsappNumber = "+923334526751"; //
  const whatsappMessage = encodeURIComponent(
    "Hello! Lets start to do tech work."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div
      className={`fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex flex-col gap-3 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14  h-14  text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <img src="/WhatsApp.png" alt="" className="h-14 w-14 " />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-gray-800 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default FloatingButton;
