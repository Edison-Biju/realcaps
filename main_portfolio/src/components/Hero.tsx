import { useState, useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const gradients = [
    "from-purple-600 via-pink-600 to-blue-600",
    "from-blue-600 via-purple-600 to-pink-600", 
    "from-pink-600 via-red-600 to-yellow-600",
    "from-green-600 via-blue-600 to-purple-600",
    "from-yellow-600 via-orange-600 to-red-600"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % gradients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50">
      {/* Dynamic animated background elements */}
      <div className="absolute inset-0">
        <div 
          className={`absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-r ${gradients[currentColorIndex]} opacity-20 rounded-3xl shadow-2xl animate-pulse`}
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) rotate(${25 + mousePosition.x * 10}deg) scale(${1 + Math.sin(Date.now() * 0.001) * 0.2})`,
            transition: "all 0.3s ease-out",
          }}
        ></div>
        <div 
          className={`absolute top-3/4 right-1/4 w-32 h-32 bg-gradient-to-r ${gradients[(currentColorIndex + 1) % gradients.length]} opacity-25 rounded-full shadow-xl animate-bounce`}
          style={{
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px) scale(${1 + Math.cos(Date.now() * 0.002) * 0.3})`,
            transition: "all 0.3s ease-out",
          }}
        ></div>
        <div 
          className={`absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r ${gradients[(currentColorIndex + 2) % gradients.length]} opacity-30 rounded-2xl shadow-lg animate-spin`}
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px) rotate(${45 + mousePosition.y * 20}deg)`,
            transition: "all 0.2s ease-out",
            animationDuration: "8s",
          }}
        ></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-30 rounded-full animate-pulse shadow-xl"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 opacity-25 rounded-lg animate-bounce shadow-2xl transform rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-purple-500 animate-pulse mr-2" />
            <span className="text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Premium Portfolio Experience
            </span>
            <Sparkles className="w-8 h-8 text-pink-500 animate-pulse ml-2" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight mb-8 tracking-tight">
            <span className={`block bg-gradient-to-r ${gradients[currentColorIndex]} bg-clip-text text-transparent animate-pulse`}>
              Creative
            </span>
            <span className="font-bold bg-gradient-to-r from-gray-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Crafting exceptional digital experiences with 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold"> precision and elegance</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
              React • Python • 3D • Premium Design
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={scrollToAbout}
              className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg animate-pulse"
            >
              Explore My Work
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="px-12 py-4 border-2 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-border text-transparent bg-clip-text font-medium rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-500 transform hover:scale-105 shadow-lg"
              style={{
                background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #3b82f6, #8b5cf6) border-box',
                color: '#8b5cf6'
              }}
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
          <ChevronDown 
            className="w-8 h-8 text-purple-400 cursor-pointer hover:text-purple-600 transition-colors mt-2 mx-auto animate-bounce"
            onClick={scrollToAbout}
          />
        </div>
      </div>

      {/* Colorful gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 pointer-events-none"></div>
    </section>
  );
};