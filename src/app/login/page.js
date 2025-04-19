'use client';
import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (login(username, password)) {
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div 
    ref={containerRef}
    onMouseMove={handleMouseMove}
    className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden"
  >
    {/* Animated blue smoke background */}
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 bg-blue-900 opacity-10"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(56, 182, 255, 0.3) 0%,
              rgba(0, 0, 0, 0) 70%
            )
          `,
          transition: 'background 0.3s ease-out'
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePosition.x * 0.8}px ${mousePosition.y * 0.8}px,
              rgba(56, 182, 255, 0.2) 0%,
              rgba(0, 0, 0, 0) 50%
            )
          `,
          transition: 'background 0.4s ease-out'
        }}
      />
    </div>
       {/* Main Content */}
       <main className="relative z-10 flex-grow flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 bg-black bg-opacity-70 p-10 rounded-lg border border-gray-800 backdrop-blur-sm">
          <div className="text-center">
          <h2 className="text-3xl font-bold">KRAFTEDX</h2>
            <p className="mt-2 text-sm text-gray-400">
              in a world where work is often related with chaos and stress<br />
              creative teams deserve delight!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
          >
            Login
          </button>
        </form>
        </div>
      </main>

      </div>
  );
}