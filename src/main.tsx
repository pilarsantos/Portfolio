import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes/router'
import { theme } from './theme/theme'
import './index.css'
import "./i18n";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)