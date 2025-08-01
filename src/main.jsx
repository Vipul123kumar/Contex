import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ItemProvider } from './Context/CounterContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ItemProvider>
    <App />
    </ItemProvider>
  
  </StrictMode>
)
