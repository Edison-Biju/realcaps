
import { useState, useEffect, useRef } from "react";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "React/Next.js", level: 95, color: "from-gray-600 to-gray-800" },
    { name: "Python/Django", level: 90, color: "from-gray-500 to-gray-700" },
    { name: "JavaScript/TypeScript", level: 92, color: "from-gray-700 to-gray-900" },
    { name: "Three.js/3D Development", level: 85, color: "from-gray-400 to-gray-600" },
    { name: "Node.js/Express", level: 88, color: "from-gray-600 to-gray-800" },
    { name: "Database Design", level: 87, color: "from-gray-500 to-gray-700" },
    { name: "Docker/DevOps", level: 82, color: "from-gray-700 to-gray-900" },
    { name: "Premium UI/UX", level: 93, color: "from-gray-800 to-black" },
  ];

  const tools = [
    "React", "Python", "JavaScript", "TypeScript", "Node.js", 
    "Django", "Flask", "PostgreSQL", "MongoDB", "Docker", 
    "AWS", "Git", "Three.js", "Figma", "Adobe Creative Suite"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-gray-900">
            My <span className="font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Expertise across the full technology stack with a focus on premium web development and luxury design
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Progress Bars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-12 text-gray-900">Technical Proficiency</h3>
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-900 font-medium">{skill.name}</span>
                  <span className="text-gray-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden shadow-inner">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out transform origin-left shadow-sm`}
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 150}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-12 text-gray-900">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 hover:border-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-xl shadow-sm"
                  style={{
                    animationDelay: `${index * 75}ms`,
                  }}
                >
                  <span className="text-gray-700 font-medium">{tool}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12 bg-gray-50/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-xl">
              <h4 className="text-xl font-semibold mb-6 text-gray-900">Premium Certifications</h4>
              <ul className="space-y-3 text-gray-600 font-light">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gray-900 rounded-full mr-4"></span>
                  AWS Certified Solutions Architect
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gray-900 rounded-full mr-4"></span>
                  Google Cloud Professional Developer
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gray-900 rounded-full mr-4"></span>
                  Advanced React & TypeScript Certification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
