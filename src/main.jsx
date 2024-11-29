import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Provider from '/src/context/Provider.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)