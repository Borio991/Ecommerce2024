import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QueryProvider from './components/providers/QueryProvider.tsx';
import ThemeProvider from './components/providers/ThemeProvider.tsx';
import { Toaster } from '@/components/ui/sonner';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryProvider>
        <RouterProvider router={router} />
        <Toaster />
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>
);
