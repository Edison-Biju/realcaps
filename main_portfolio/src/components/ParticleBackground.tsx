
import { useEffect, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
  color: string;
}

export const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseTrail, setMouseTrail] = useState<TrailPoint[]>([]);

  const colors = [
    "from-purple-400 to-pink-400",
    "from-blue-400 to-cyan-400", 
    "from-green-400 to-emerald-400",
    "from-yellow-400 to-orange-400",
    "from-red-400 to-rose-400",
    "from-indigo-400 to-purple-400",
    "from-teal-400 to-blue-400",
    "from-orange-400 to-red-400"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Add to trail
      setMouseTrail(prev => [
        ...prev.slice(-15),
        {
          x: newPosition.x,
          y: newPosition.y,
          timestamp: Date.now(),
          color: colors[Math.floor(Math.random() * colors.length)]
        }
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Clean up old trail points
    const interval = setInterval(() => {
      setMouseTrail(prev => 
        prev.filter(point => Date.now() - point.timestamp < 1000)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Initialize colorful particles
    const initialParticles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      initialParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.4 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
      });
    }
    setParticles(initialParticles);

    // Animation loop
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;

          // Bounce off edges
          if (newX < 0 || newX > window.innerWidth) particle.vx *= -1;
          if (newY < 0 || newY > window.innerHeight) particle.vy *= -1;

          // Keep within bounds
          newX = Math.max(0, Math.min(window.innerWidth, newX));
          newY = Math.max(0, Math.min(window.innerHeight, newY));

          return {
            ...particle,
            x: newX,
            y: newY,
            rotation: particle.rotation + particle.rotationSpeed,
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 animate-pulse opacity-30"></div>
      
      {/* Colorful floating particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className={`absolute bg-gradient-to-r ${particle.color} rounded-full shadow-lg animate-pulse`}
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transform: `translate(-50%, -50%) rotate(${particle.rotation}deg) scale(${1 + Math.sin(Date.now() * 0.001 + index) * 0.3})`,
            transition: "all 0.1s ease-out",
          }}
        />
      ))}

      {/* Mouse trail with 3D effect */}
      {mouseTrail.map((point, index) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / 1000);
        const scale = 1 - age / 2000;
        
        return (
          <div
            key={`${point.timestamp}-${index}`}
            className={`absolute bg-gradient-to-r ${point.color} rounded-full shadow-2xl`}
            style={{
              left: point.x,
              top: point.y,
              width: 20 - index * 1,
              height: 20 - index * 1,
              opacity: opacity * 0.8,
              transform: `translate(-50%, -50%) scale(${scale}) rotateX(${index * 10}deg)`,
              boxShadow: `0 0 ${20 - index * 2}px rgba(${index * 20}, ${100 + index * 10}, 255, 0.6)`,
              transition: "all 0.1s ease-out",
            }}
          />
        );
      })}

      {/* Main cursor follower with 3D glow */}
      <div
        className="absolute w-12 h-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full opacity-60 pointer-events-none shadow-2xl animate-spin"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%) perspective(1000px) rotateX(45deg)",
          transition: "all 0.15s ease-out",
          boxShadow: "0 0 40px rgba(147, 51, 234, 0.6), 0 0 80px rgba(236, 72, 153, 0.4)",
          filter: "blur(0.5px)",
        }}
      />

      {/* Secondary cursor ring */}
      <div
        className="absolute w-20 h-20 border-4 border-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-40 pointer-events-none animate-pulse"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%) perspective(1000px) rotateY(45deg)",
          transition: "all 0.3s ease-out",
          borderImage: "linear-gradient(45deg, #06b6d4, #8b5cf6) 1",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 rounded-lg animate-bounce shadow-lg transform rotate-45"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 opacity-25 rounded-full animate-pulse shadow-xl"></div>
      <div className="absolute bottom-32 left-32 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 opacity-20 rounded-2xl animate-spin shadow-2xl"></div>
      <div className="absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-br from-red-400 to-pink-500 opacity-30 rounded-full animate-bounce shadow-lg"></div>
    </div>
  );
};