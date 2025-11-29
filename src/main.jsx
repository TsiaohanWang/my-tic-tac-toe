import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DefaultGame, InfinityGame, UltimateGame } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DefaultGame />
    <InfinityGame />
    <UltimateGame />

    <DefaultGame swapEnabled={true} />
    <InfinityGame swapEnabled={true} />
    <UltimateGame swapEnabled={true} />
  </StrictMode>,
)
