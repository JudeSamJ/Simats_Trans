import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/css/index.css'
import App from '../src/jsx/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
