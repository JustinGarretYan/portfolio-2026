import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
// Mengarah ke file rute/portofolio utama Anda
import App from './routes/index.tsx' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)