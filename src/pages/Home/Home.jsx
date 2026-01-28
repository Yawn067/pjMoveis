import "./home.css";
import Carousel from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";

import produto1 from "../../assets/images/logo-pjmoveis.jpg";
import produto2 from "../../assets/images/logo-pjmoveis.jpg";
import produto3 from "../../assets/images/logo-pjmoveis.jpg";

const listaProdutos = [
  {
    img: produto1,
    title: "Móveis Industriais",
  },
  {
    img: produto2,
    title: "Estruturas Metálicas",
  },
  {
    img: produto3,
    title: "Projetos Sob Medida",
  },
];

function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <h1>Bem-vindo à PJMóveis</h1>
        <p>Soluções em móveis planejados para transformar seu espaço.</p>
      </section>

      <section className="home-produtos">
        <h2>Nossos Produtos</h2>
        <Carousel
          className="home-produtos-carousel"
          listaProdutos={listaProdutos}
        />
        <Link to="/produtos" className="home-produtos-button">
          Ver Todos os Produtos
        </Link>
      </section>

      <section className="home-depoimentos">
        <h2>Depoimentos de Clientes</h2>
        <div className="home-depoimentos-list">
          <div className="home-depoimento-item">
            <p>
              "A PJMóveis transformou minha casa! Móveis de alta qualidade e
              atendimento excelente."
            </p>
            <span>- Maria S.</span>
          </div>
          <div className="home-depoimento-item">
            <p>
              "Profissionais dedicados e resultados incríveis. Recomendo a
              todos!"
            </p>
            <span>- João P.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;
