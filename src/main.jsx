import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { initReminders } from './reminder.js'

initReminders()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)