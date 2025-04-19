// 'use client';
// import ProtectedRoute from '@/components/ProtectedRoute';
// import { useAuth } from '@/context/AuthContext';
// import { useState, useEffect, useRef } from 'react';

// export default function DashboardPage() {
//   const { logout } = useAuth();
//   const containerRef = useRef(null);
//   const animationRef = useRef();
//   const [particles, setParticles] = useState(() => {
//     // Create 8-12 particles with random initial positions and velocities
//     return Array.from({ length: 8 + Math.floor(Math.random() * 4) }).map(() => ({
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: 10 + Math.random() * 15,
//       speedX: (Math.random() - 0.5) * 0.6,
//       speedY: (Math.random() - 0.5) * 0.6,
//       opacity: 0.4 + Math.random() * 0.3,
//       connections: []
//     }));
//   });

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const animate = () => {
//       setParticles(prev => {
//         // Update particle positions
//         const updated = prev.map(p => {
//           let newX = p.x + p.speedX;
//           let newY = p.y + p.speedY;
//           let newSpeedX = p.speedX;
//           let newSpeedY = p.speedY;

//           // Bounce off edges
//           if (newX <= 0 || newX >= 100) {
//             newSpeedX = -p.speedX * (0.8 + Math.random() * 0.4);
//             newX = newX <= 0 ? 0 : 100;
//           }
//           if (newY <= 0 || newY >= 100) {
//             newSpeedY = -p.speedY * (0.8 + Math.random() * 0.4);
//             newY = newY <= 0 ? 0 : 100;
//           }

//           return { ...p, x: newX, y: newY, speedX: newSpeedX, speedY: newSpeedY };
//         });

//         // Calculate connections between particles
//         return updated.map(p1 => {
//           const connections = [];
//           updated.forEach((p2, j) => {
//             if (p1 !== p2) {
//               const distance = Math.sqrt(
//                 Math.pow(p1.x - p2.x, 2) + 
//                 Math.pow(p1.y - p2.y, 2)
//               );
//               if (distance < 20) { // Connection threshold
//                 connections.push({
//                   x: p2.x,
//                   y: p2.y,
//                   opacity: 1 - distance / 20 // Fade out as distance increases
//                 });
//               }
//             }
//           });
//           return { ...p1, connections };
//         });
//       });

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animationRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationRef.current);
//   }, []);

//   return (
//     <ProtectedRoute>
//       <div 
//         ref={containerRef}
//         className="min-h-screen bg-black text-white font-mono flex flex-col relative overflow-hidden"
//       >
//         {/* Particles and Connections */}
//         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
//           {particles.map((particle, i) => (
//             <g key={i}>
//               {/* Particle */}
//               <circle
//                 cx={`${particle.x}%`}
//                 cy={`${particle.y}%`}
//                 r={particle.size / 2}
//                 fill={`rgba(10, 103, 243, ${particle.opacity})`}
//               />
              
//               {/* Connections */}
//               {particle.connections.map((conn, j) => (
//                 <line
//                   key={j}
//                   x1={`${particle.x}%`}
//                   y1={`${particle.y}%`}
//                   x2={`${conn.x}%`}
//                   y2={`${conn.y}%`}
//                   stroke={`rgba(10, 103, 243, ${conn.opacity * 0.3})`}
//                   strokeWidth="1"
//                 />
//               ))}
//             </g>
//           ))}
//         </svg>

//         {/* Content */}
//         <div className="relative z-10">
//           {/* Header */}
//           <header className="flex justify-between items-center mb-12 px-4 py-8">
//             <h1 className="text-4xl font-bold">KRAFTEDX</h1>
//             <div className="flex space-x-6">
//               <button className="hover:text-gray-400 transition-colors">CAREERS</button>
//               <button className="hover:text-gray-400 transition-colors">CONTACT US</button>
//             </div>
//           </header>

//           {/* Main Text - Centered */}
//           <main className="flex flex-col items-center justify-center h-[60vh]">
//             <div className="text-center max-w-2xl">
//               <p className="text-xl mb-4">
//                 in a world where work is often related with chaos and stress
//               </p>
//               <p className="text-4xl font-bold">
//                 creative teams deserve delight!
//               </p>
//             </div>
//           </main>

//           {/* Footer */}
//           <footer className="py-8 border-t border-gray-800 mt-auto">
//             <div className="container mx-auto px-4">
//               <div className="flex space-x-6 justify-center">
//                 <p className="text-lg">hello@kraftedx.com</p>
//                 <button className="hover:text-gray-400 transition-colors">Instagram</button>
//                 <button className="hover:text-gray-400 transition-colors">LinkedIn</button>
//               </div>
//             </div>
//           </footer>
//         </div>

//         {/* Logout Button */}
//         <div className="fixed bottom-4 right-4 z-20">
//           <button 
//             onClick={logout}
//             className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </ProtectedRoute>
//   );
// }