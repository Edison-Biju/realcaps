
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { ParticleBackground } from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/50 via-pink-50/50 to-blue-50/50 text-gray-900 overflow-x-hidden relative">
      {/* Animated background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-100/20 via-pink-100/20 to-blue-100/20 animate-pulse pointer-events-none"></div>
      
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Floating decorative elements */}
      <div className="fixed top-20 right-10 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse opacity-60 pointer-events-none"></div>
      <div className="fixed top-40 left-10 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce opacity-50 pointer-events-none"></div>
      <div className="fixed bottom-20 right-20 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse opacity-60 pointer-events-none"></div>
    </div>
  );
};

export default Index;
