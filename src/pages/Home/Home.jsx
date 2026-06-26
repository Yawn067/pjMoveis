import Carousel from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import ContactSection from "../../components/ContactSection/ContactSection";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./home.css";

const listaProdutos = [
  {
    img: "/moveis/cadeira01.png",
  },
  {
    img: "/moveis/CABECEIRA.png",
  },
  {
    img: "/moveis/estante.png",
  },
  {
    img: "/moveis/APARADOR.png",
  },
];
const slides = [
  {
    id: 1,
    image: "/moveis/armario.png",
    title: "Qualidade e Sofisticação",
    subtitle: "Móveis planejados para transformar seu ambiente",
  },
  {
    id: 2,
    image: "/moveis/mesaJantar.png",
    title: "Design Moderno",
    subtitle: "Funcionalidade e beleza em cada detalhe",
  },
  {
    id: 3,
    image: "/moveis/BUFFET_02.png",
    title: "Seu sonho, nossa missão",
    subtitle: "Projetos personalizados para você",
  },
];

function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="home-hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="overlay">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="home-produtos">
        <h2>Nossos Produtos</h2>
        <Carousel
          className="home-produtos-carousel"
          listaProdutos={listaProdutos}
        />
        <Link to="/projetos" className="home-produtos-button">
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

      <ContactSection />
    </main>
  );
}
export default Home;
