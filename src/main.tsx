import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Principal } from './Principal'
import { BrowserRouter } from 'react-router'
//import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Principal />
    </BrowserRouter>
  </StrictMode>,
)
