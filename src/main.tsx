import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import './styles/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'

import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { SidebarProvider } from './contexts/SidebarContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
