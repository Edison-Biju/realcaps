import { useState } from "react";
import { Github, Link as LinkIcon, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "hover:text-gray-600",
    },
    {
      name: "Portfolio",
      icon: LinkIcon,
      url: "https://example.com",
      color: "hover:text-gray-700",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      color: "hover:text-gray-800",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight mb-8 text-gray-900">
            Get In <span className="font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to create something extraordinary? Let's collaborate and build premium digital experiences together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Let's Connect</h3>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed font-light">
                  I'm always interested in discussing premium projects, luxury web applications, 
                  and opportunities to create exceptional digital experiences.
                </p>
                <p className="text-gray-600 leading-relaxed font-light">
                  Whether you're looking for a sophisticated web application, premium design system, 
                  or high-end development consultation, I'd love to hear from you.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-6 text-gray-900">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-white rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-xl shadow-lg border border-gray-100 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-50/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-100 shadow-xl">
              <h4 className="text-lg font-semibold mb-6 text-gray-900">Quick Info</h4>
              <div className="space-y-4 text-gray-600 font-light">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                  Available for premium projects
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-gray-900 rounded-full mr-4"></span>
                  Response time: Within 24 hours
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-gray-700 rounded-full mr-4"></span>
                  Open to luxury collaborations worldwide
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 shadow-sm"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 resize-none shadow-sm"
                  placeholder="Tell me about your premium project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gray-900 text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Premium Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-gray-100 text-center">
          <p className="text-gray-500 font-light">
            © 2024 Premium Developer Portfolio. Crafted with precision & ❤️
          </p>
        </div>
      </div>
    </section>
  );
};