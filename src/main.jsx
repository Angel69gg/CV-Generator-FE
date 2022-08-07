import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import axios from 'axios'
import './index.css'
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
const URL = import.meta.env.VITE_RUTA_API;
axios.defaults.baseURL = URL;

import global_en from './languages/en/global.json'
import global_es from './languages/es/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
  }
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
