import { NavLink } from "react-router-dom";
import './header.css';

function Header() {
  return (
    <header className='cabecalho'>
        <div>
            <NavLink className='cabecalho-logo' to="/">
              <img src='src/assets/images/logo-transparente.png' alt="" />
            </NavLink>
        </div>
        <nav className="cabecalho-menu">
          <NavLink className={({ isActive }) => isActive ? "cabecalho-op ativo" : "cabecalho-op"} to="/">Início</NavLink>
          <NavLink className={({ isActive }) => isActive ? "cabecalho-op ativo" : "cabecalho-op"} to="/about">Sobre Nós</NavLink>
          <NavLink className={({ isActive }) => isActive ? "cabecalho-op ativo" : "cabecalho-op"} to="/projetos">Projetos</NavLink>
        </nav>
    </header>
  );
}
export default Header;