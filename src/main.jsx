import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppStateProvider } from '@/components/additional/jsx/StateContext.jsx'

import "bootstrap/dist/css/bootstrap.min.css"
import '@fontsource/golos-text'

import '@/components/additional/styles/buttonStyle.css';
import '@/components/cookie/Cookie.css'
import './index.css'

import Preloader from '@/components/additional/jsx/Preloader.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppStateProvider>
      <Preloader>
        <App />
      </Preloader>
    </AppStateProvider>
  </StrictMode>
)
