'use client';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import { useState, useEffect, useRef } from 'react';

export default function DashboardPage() {
  const { logout } = useAuth();
  const containerRef = useRef(null);
  const animationRef = useRef();
  const [blobs, setBlobs] = useState([
    { x: 20, y: 30, size: 40, speedX: 0.4, speedY: 0.3 },
    { x: 70, y: 20, size: 50, speedX: -0.5, speedY: 0.4 },
    { x: 40, y: 70, size: 45, speedX: 0.3, speedY: -0.6 },
    { x: 80, y: 60, size: 35, speedX: -0.4, speedY: -0.5 }
  ]);

  useEffect(() => {
    const animate = () => {
      setBlobs(prev => {
        return prev.map(blob => {
          // Slower, smoother movement
          let newX = blob.x + blob.speedX;
          let newY = blob.y + blob.speedY;
          let newSpeedX = blob.speedX;
          let newSpeedY = blob.speedY;

          // Gentle bounce off edges
          if (newX <= 0 || newX >= 100) {
            newSpeedX = -blob.speedX * 0.8;
            newX = newX <= 0 ? 0 : 100;
          }
          if (newY <= 0 || newY >= 100) {
            newSpeedY = -blob.speedY * 0.8;
            newY = newY <= 0 ? 0 : 100;
          }

          // Very subtle random direction changes
          if (Math.random() > 0.98) {
            newSpeedX += (Math.random() - 0.5) * 0.1;
            newSpeedY += (Math.random() - 0.5) * 0.1;
          }

          return {
            ...blob,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
            size: blob.size // Removed size variation for smoother look
          };
        });
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <ProtectedRoute>
      <div 
        ref={containerRef}
        className="min-h-screen bg-black text-white font-mono flex flex-col relative overflow-hidden"
      >
        {/* Fluid blobs - no connections */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {blobs.map((blob, i) => (
            <div
              key={`blob-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${blob.x}%`,
                top: `${blob.y}%`,
                width: `${blob.size}%`,
                height: `${blob.size}%`,
                background: 'radial-gradient(circle, rgba(101, 34, 226, 0.94) 0%, rgba(10,103,243,0.2) 70%, transparent 100%)',
                filter: 'blur(60px)',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.5s ease-out',
                willChange: 'left, top'
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <header className="flex justify-between items-center mb-12 px-4 py-8">
            <h1 className="text-4xl font-bold">KRAFTEDX</h1>
            <div className="flex space-x-6">
              <button className="hover:text-gray-400 transition-colors">CAREERS</button>
              <button className="hover:text-gray-400 transition-colors">CONTACT US</button>
              <button 
            onClick={logout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm"
          >
            Logout
          </button>
            </div>
             {/* Logout Button */}
       
          </header>

         {/* Main Text - Centered */}
<main className="flex flex-col items-center justify-center h-[60vh] pointer-events-auto">
  <div className="text-center max-w-[95%]">
    <p className="text-xl mb-2 font-normal tracking-tight leading-[1.2] text-gray-300">
      in a world where work is often related with chaos and stress
    </p>
    <p className="text-6xl font-light tracking-tight leading-[1.2] whitespace-nowrap">
      creative teams deserve delight!
    </p>
  </div>
</main>

          {/* Footer */}
          <footer className="py-8  border-gray-800 mt-auto">
            <div className="container mx-auto px-4">
              <div className="flex space-x-5 ">
                <p className="text-lg">hello@kraftedx.com</p>
                <button className="hover:text-gray-400 transition-colors">Instagram</button>
                <button className="hover:text-gray-400 transition-colors">LinkedIn</button>
              </div>
            </div>
          </footer>
        </div>

       
      </div>
    </ProtectedRoute>
  );
}