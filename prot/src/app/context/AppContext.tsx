import React, { createContext, useContext, useState } from 'react';
import type { AppContextType, User, Caso } from '../types';
import { mockCasos } from '../data/mockData';

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [casos, setCasos] = useState<Caso[]>(mockCasos);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const offlineMode = false;
  const pendingSync = 3;

  return (
    <AppContext.Provider value={{
      currentUser, setCurrentUser,
      casos, setCasos,
      sidebarOpen, setSidebarOpen,
      offlineMode, pendingSync,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}
