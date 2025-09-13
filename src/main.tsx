import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './styles/tailwind.css'
import './styles/index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'

import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { SidebarProvider } from './contexts/SidebarContext.tsx'
import { initRequest } from './services/initRequest.ts'
import { store } from './store.ts'

initRequest();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
