import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Preloader from './components/additional/Preloader.jsx'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import '@fontsource/golos-text'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader>
      <App />
    </Preloader>
  </StrictMode>
)
