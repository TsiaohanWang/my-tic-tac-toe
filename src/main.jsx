import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InfinityGame } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InfinityGame />
  </StrictMode>,
)
