import React from 'react';
import { ThemeUIProvider } from '@/components/theme-ui-provider';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeUIProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeUIProvider>
  );
}

export default ThemeProvider;
