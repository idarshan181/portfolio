'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="text-foreground">
          <FaSun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <FaMoon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={`${theme === 'light' ? 'bg-gray-300' : 'bg-none'} `}
          onClick={() => {
            setTheme('light');
            localStorage.setItem('theme', 'light');
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${theme === 'dark' ? 'bg-secondary' : 'bg-none'} `}
          onClick={() => {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`${theme === 'system' ? 'bg-secondary' : 'bg-none'} `}
          onClick={() => {
            setTheme('system');
            localStorage.setItem('theme', 'system');
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
