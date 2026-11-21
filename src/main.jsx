import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './index.css'
import App from './App.jsx'
import { UIProvider } from './context/UIContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <UIProvider>
        <App />
      </UIProvider>
    </MotionConfig>
  </StrictMode>,
)
