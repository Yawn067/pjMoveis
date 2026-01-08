import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className='cabecalho'>
        <div>
            <Link className='cabecalho-logo' to="/">
              <img src='src/assets/images/logo-transparente.png' alt="" />
            </Link>
        </div>
        <Link className='cabecalho-op' to="/">Início</Link>
        <Link className='cabecalho-op' to="/about">Sobre Nós</Link>
        <Link className='cabecalho-op' to="/projetos">Projetos</Link>
    </header>
  );
}
export default Header;