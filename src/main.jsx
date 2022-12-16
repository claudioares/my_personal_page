import React from 'react'
import ReactDOM from 'react-dom/client'
import MainHouter from './routes';
import { BrowserRouter } from 'react-router-dom';
import './global_styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainHouter />
    </BrowserRouter>
  </React.StrictMode>
)
