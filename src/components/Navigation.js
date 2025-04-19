'use client';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Navigation() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-black bg-opacity-80 py-4 px-6 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">KRAFTEDX</Link>
        <div className="flex space-x-6 items-center">
          {user ? (
            <>
              <Link href="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link>
              <button 
                onClick={logout}
                className="text-gray-400 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-gray-400 hover:text-white">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}