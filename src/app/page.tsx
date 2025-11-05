"use client"

import React, { useEffect, useState } from 'react';

interface Microbe {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

const MicrobeLanding: React.FC = () => {
  const [microbes, setMicrobes] = useState<Microbe[]>([]);

  useEffect(() => {
    const initialMicrobes: Microbe[] = [];
    for (let i = 0; i < 30; i++) {
      initialMicrobes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 30 + 20,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
      });
    }
    setMicrobes(initialMicrobes);

    const animate = () => {
      setMicrobes(prev => prev.map(microbe => {
        let newX = microbe.x + microbe.vx;
        let newY = microbe.y + microbe.vy;
        
        if (newX < -50) newX = window.innerWidth + 50;
        if (newX > window.innerWidth + 50) newX = -50;
        if (newY < -50) newY = window.innerHeight + 50;
        if (newY > window.innerHeight + 50) newY = -50;
        
        return {
          ...microbe,
          x: newX,
          y: newY,
          rotation: microbe.rotation + microbe.rotationSpeed,
        };
      }));
    };

    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0f]">
      {microbes.map(microbe => (
        <div
          key={microbe.id}
          className="absolute"
          style={{
            left: `${microbe.x}px`,
            top: `${microbe.y}px`,
            width: `${microbe.size}px`,
            height: `${microbe.size}px`,
            transform: `translate(-50%, -50%) rotate(${microbe.rotation}deg)`,
            transition: 'left 0.03s linear, top 0.03s linear',
          }}
        >
          <img 
            src="/bacteria.png" 
            alt="microbe" 
            className="w-full h-full opacity-70"
          />
        </div>
      ))}
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-pink-400">
              Infection Control
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
            Quality Indicator Guide
          </p>
          <button 
            className='rounded border-dashed '
          >
            Explore Topics
          </button>
        </div>
      </div>
    </div>
  );
};

export default MicrobeLanding;