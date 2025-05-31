
import { useState } from "react";
import { Github, Link as LinkIcon } from "lucide-react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Luxury E-Commerce Platform",
      description: "Premium e-commerce solution with sophisticated animations and seamless user experience",
      technologies: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Enterprise SaaS Dashboard",
      description: "High-end dashboard with advanced analytics and premium design system",
      technologies: ["React", "Node.js", "MongoDB", "D3.js"],
      category: "Full-Stack",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 3,
      title: "AI-Powered Analytics Platform",
      description: "Sophisticated AI platform with real-time insights and premium interface",
      technologies: ["Python", "Flask", "TensorFlow", "React"],
      category: "Backend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      id: 4,
      title: "Premium Portfolio Website",
      description: "Luxury portfolio with 3D animations and premium design elements",
      technologies: ["React", "Three.js", "GSAP", "Tailwind"],
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Full-Stack"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-gray-900">
            My <span className="font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            A curated selection of premium projects showcasing excellence in design and development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-500 ${
                activeFilter === category
                  ? "bg-gray-900 text-white shadow-xl shadow-gray-900/25"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-gray-200 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-6 left-6 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Featured
                  </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors shadow-lg"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors shadow-lg"
                  >
                    <LinkIcon className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-xl border border-gray-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Category */}
                <div className="text-sm text-gray-500 font-medium">
                  {project.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-gray-600 mb-8 font-light text-lg">
            Want to see more premium work or discuss a luxury project?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <Github className="w-5 h-5 mr-3" />
            View All Premium Projects
          </a>
        </div>
      </div>
    </section>
  );
};
