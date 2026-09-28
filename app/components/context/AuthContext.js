"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user_name");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = (name) => {
    setUser(name);
    localStorage.setItem("user_name", name); 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_name");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
