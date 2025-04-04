import { useState } from 'react'
import Destacados from './Destacados/Destacados';
import Bodas from './Bodas/Bodas';
import LiveArt from './LiveArt/LiveArt';
import Personalizadas from './personalizadas/Personalizadas'
import Editorial from './Editorial/Editorial';
import Productos from './Productos/Productos';
import SobreMi from './SobreMi/SobreMi';
import Contacto from './Contacto/Contacto';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu/Menu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Destacados />} />
          <Route path="/destacados" element={<Destacados />} />
          <Route path="/bodas" element={<Bodas />} />
          <Route path="/LiveArt" element={<LiveArt />} />
          <Route path="/**" element={<Bodas />} />
          <Route path="/personalizadas" element={<Personalizadas />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/sobreMi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
          {/*
          } />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/sobreMi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
