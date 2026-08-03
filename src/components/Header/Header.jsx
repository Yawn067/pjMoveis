import { NavLink } from "react-router-dom";
import './header.css';

function Header() {
  return (
    <header className='cabecalho'>
        <div className="header-esquerda">
            <NavLink className='cabecalho-logo' to="/">
              <img src='src/assets/images/logo-transparente.png' alt="" />
            </NavLink>
        </div>
         
        <nav className="cabecalho-menu">
          <NavLink className={({ isActive }) => isActive ? "cabecalho-op ativo" : "cabecalho-op"} to="/">Início</NavLink>
          <NavLink className={({ isActive }) => isActive ? "cabecalho-op ativo" : "cabecalho-op"} to="/about">Sobre Nós</NavLink>
          <NavLink className={({ isActive }) => isActive ? "cabecalho-op ativo" : "cabecalho-op"} to="/projetos">Projetos</NavLink>
        </nav>
        <div className="header-direita">
           <a className= "contact_button" href="#contato-ancora" > Contato</a>
        </div>
       
    </header>
  );
}
export default Header;