export const About = () => {
  const experiences = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovation Corp",
      description: "Leading development of scalable web applications using React, Python, and cloud technologies.",
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd",
      description: "Developed and maintained multiple client projects using modern web technologies.",
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "Creative Agency",
      description: "Specialized in creating interactive user interfaces and 3D web experiences.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-gray-900">
            About <span className="font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Passionate full-stack developer with expertise in modern web technologies, 
            premium design systems, and creating exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-4 font-light">
                With over 4 years of experience in premium web development, I specialize in creating 
                sophisticated, high-end applications that combine exceptional functionality with stunning visual design.
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                I'm passionate about pushing the boundaries of web technology, incorporating 
                premium design principles, advanced animations, and cutting-edge frameworks to deliver 
                luxury digital experiences.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">What I Do</h3>
              <ul className="space-y-4 text-gray-600 font-light">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gray-900 rounded-full mr-4"></span>
                  Premium Full-Stack Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gray-900 rounded-full mr-4"></span>
                  Luxury UI/UX Design & 3D Animations
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gray-900 rounded-full mr-4"></span>
                  Enterprise API Development & Architecture
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-gray-900 rounded-full mr-4"></span>
                  Performance Optimization & SEO Excellence
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-12 text-center md:text-left text-gray-900">Experience Timeline</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-500"></div>
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start mb-12 group">
                  {/* Timeline dot */}
                  <div className="absolute left-3 w-6 h-6 bg-gray-900 rounded-full border-4 border-white group-hover:bg-gray-700 transition-colors duration-300 shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 group-hover:border-gray-200 transition-all duration-500 shadow-lg hover:shadow-xl">
                    <div className="text-sm text-gray-500 font-medium mb-1">{exp.year}</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{exp.title}</h4>
                    <div className="text-gray-700 font-medium mb-3">{exp.company}</div>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};