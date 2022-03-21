import './App.css';
import { Outlet, Link } from "react-router-dom";

import Logo from './LogoBrico.svg';
import Button from './components/Button'

export default function App() {
  return (
    <div className="App">
        <nav className='menu'>
          <a href='/'>
            <img src={Logo} className='logo'></img>
          </a>
          <div>
            <Link to='/home'>Inicio</Link>
            <Link to='/about'>Conocenos</Link>
            <Link to='/get-aplication'>Obtener Aplicaciones</Link>
            <Button name='Unirme' />
          </div>
        </nav>
        <Outlet />
    </div>
  );
}
