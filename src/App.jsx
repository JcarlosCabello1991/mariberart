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
import { MenuProvider } from './MenuContext/MenuContext';

function App() {

  return (
    <div className='app'>
      <Router>
        <MenuProvider>
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
          </Routes>
        </MenuProvider>        
      </Router>
    </div>
  )
}

export default App
