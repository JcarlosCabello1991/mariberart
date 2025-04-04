import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'; // Importamos los iconos de Material UI

const navItems = [
  { name: 'Destacados', path: '/destacados' },
  { name: 'Bodas', path: '/bodas' },
  { name: 'Live art', path: '/LiveArt' },
  { name: 'Personalizados', path: '/personalizadas' },
  { name: 'Editorial', path: '/editorial' },
  { name: 'Productos', path: '/productos' },
  { name: 'Sobre mí', path: '/sobreMi' },
  { name: 'Contacto', path: '/Contacto' }
];

export default function Menu() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1053);
  const [itemSelected, setItemSelected] = React.useState('Destacados');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  // Manejar cambios en el tamaño de la pantalla
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1053);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategory = (item, path) => {
    console.log(item)
    setItemSelected(item);
    navigate(`${path}`);
  };

  React.useEffect(() => {
   console.log(itemSelected)
  }, [itemSelected]);

  return (
    <div className={`${isMobile ? 'menuMobile' : 'menu'}`}>
      <img className="logo" src="../../public/Logo_mariberart-sinfondo.png" alt="MariBerArt" />

      {
      isMobile ? (
        // Si es móvil, mostramos el icono de menú
        <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon fontSize="large" style={{ color: 'black' }}/>
        </div>
      ) : (
        // Si es escritorio, mostramos los items del menú
        <div className="menuItems">
          {navItems.map(({name, path}) => (
            <div
              key={name}
              className={`${name === itemSelected ? 'selected' : 'menuItem'}`}
              onClick={() => handleCategory(name, path)}
            >
              {name.toUpperCase()}
            </div>
          ))}
        </div>
      )}

      {/* Menú lateral con animación */}
      {isMobile && (
        <div className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
        {navItems.map(({name, path}) => (
          <div
            key={name}
            className={`${name === itemSelected ? 'selected' : 'menuItem'}`}
            onClick={() => {
              handleCategory(name, path);
              setMenuOpen(false); // Cerrar el menú al hacer clic
            }}
          >
            {name.toUpperCase()}
          </div>
        ))}
      </div>
      )}
    </div>
  );
}
