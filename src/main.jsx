import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AuthProvider from './context/AuthProvider'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <Toaster />
      <App />
    </AuthProvider>
  </React.StrictMode>
)
