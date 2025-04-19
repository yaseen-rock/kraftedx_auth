'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Hardcoded credentials
  const validCredentials = {
    username: 'kraftedx',
    password: '123'
  };

  useEffect(() => {
    // Check if user is logged in on initial load
    const storedUser = localStorage.getItem('kraftedx-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    if (username === validCredentials.username && password === validCredentials.password) {
      const userData = { username, name: 'KraftedX Admin' };
      setUser(userData);
      localStorage.setItem('kraftedx-user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kraftedx-user');
    router.push('/login');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}