import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme from DOM on mount
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    // Update the DOM directly
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button 
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-md p-2 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 transition-all cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
