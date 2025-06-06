import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ManContextProvider from './context/ManContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ManContextProvider>
        <App />
      </ManContextProvider>
    </BrowserRouter>
  </StrictMode>
)
