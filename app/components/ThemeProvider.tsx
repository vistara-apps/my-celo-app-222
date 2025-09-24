'use client';
import { useState, useEffect, type ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: 'default' | 'celo';
}

export function ThemeProvider({ children, theme = 'default' }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    document.documentElement.classList.remove('theme-default', 'theme-celo');
    document.documentElement.classList.add(`theme-${currentTheme}`);
  }, [currentTheme]);

  return <>{children}</>;
}
