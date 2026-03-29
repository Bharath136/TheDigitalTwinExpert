import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@presentation/themes/index.css'
import App from '@presentation/navigation/AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
