import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './providers/auth.provider.jsx'
import './index.css'
import App from './App.jsx'

// AuthProvider wraps the whole app so every page can access login state.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
