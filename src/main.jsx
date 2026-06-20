import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import App from './App.jsx'
import Jollof from './pages/jollof.jsx'
import Waakye from './pages/waakye.jsx'
import Friedrice from './pages/friedrice.jsx'
import Beans from './pages/beans.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/jollof" element={<Jollof />} />
      <Route path="/waakye" element={<Waakye />} />
      <Route path="/friedrice" element={<Friedrice />} />
      <Route path="/beans" element={<Beans />} />

    </Routes>
  </BrowserRouter>
)
