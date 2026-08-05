import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import ContactSection from "../../components/ContactSection/ContactSection";
import DomoModal from "../../components/DomoModal/DomoModal";

// Componente auxiliar para a animação do número
const AnimatedNumber = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000; // Duração da animação em milissegundos (2s)
          const steps = 60;
          const stepTime = duration / steps;
          const increment = target / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }, // Inicia quando 50% da área do número estiver visível
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const [isDomoModalOpen, setIsDomoModalOpen] = useState(false);

  const mvv = [
    {
      title: "Missão",
      text: "Oferecer soluções em móveis industriais, serralheria e estruturas metálicas com excelência, unindo qualidade, inovação e comprometimento em cada projeto. Atuamos de forma ética e transparente, desenvolvendo peças e estruturas que aliam resistência, funcionalidade e design, sempre priorizando a satisfação dos nossos clientes.",
    },
    {
      title: "Visão",
      text: "Ser reconhecida como referência no segmento de móveis industriais, estruturase esquadrias metálicas, destacando-se pela inovação, capacidade de executar projetos personalizados e de grande porte, além do alto padrão de qualidade em cada entrega.",
    },
    {
      title: "Valores",
      text: "Comprometimento com clientes e resultados, Atuamos com responsabilidade ededicação para superar expectativas em cada projeto.",
    },
  ];

  return (
    <div className="modern-about">
      {/* Header com Logo */}
      <nav className="about-nav" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-title-wrapper">
          <span className="subtitle">DESDE 2024</span>
          <h1>
            CONHEÇA MAIS <br />{" "}
            <span className="outline-text">SOBRE A PJMÓVEIS</span>
          </h1>
        </div>
        <div className="hero-main-image">
          <div className="image-placeholder-large">
            <img src="/domo.jpg" alt="Projeto icônico" />
          </div>
          <button
            type="button"
            className="hero-experience-badge domo-modal-button"
            onClick={() => setIsDomoModalOpen(true)}
          >
            Saiba Mais
          </button>
        </div>
      </section>
      <DomoModal
        isOpen={isDomoModalOpen}
        onClose={() => setIsDomoModalOpen(false)}
      />

      {/* Introdução - Quem somos (COM ANIMAÇÃO DE NÚMEROS) */}
      <section className="intro-section">
        <div className="intro-grid">
          <div className="intro-text">
            <h2>Nossa Essência</h2>
            <p className="lead">
              Os projetos de mobiliário e estruturas são desenvolvidos
              internamente pela própria empresa, em parceria com cada cliente,
              garantindo um processo personalizado e alinhado às suas
              necessidades e preferências. Por meio de visualizações em 3D, é
              possível acompanhar cada detalhe do projeto antes da execução,
              proporcionando mais segurança e precisão em cada etapa.
            </p>
            <p className="lead">
              O resultado são peças exclusivas que unem criatividade,
              funcionalidade e design diferenciado, desenvolvidas para se
              integrar de forma harmoniosa a cada ambiente e refletir a
              identidade e o estilo de cada cliente.
            </p>
          </div>
          <div className="intro-stats">
            <div className="stat-item">
              <span>
                <AnimatedNumber target={500} suffix="+" />
              </span>
              <p>Projetos Entregues</p>
            </div>
            <div className="stat-item">
              <span>
                <AnimatedNumber target={100} suffix="%" />
              </span>
              <p>Produção Própria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Nossa História */}
      <section className="history-section">
        <div className="history-grid">
          <div className="history-image">
            <div className="image-box">
              <img src="/moveis/BUFFET_02.png" alt="" />
            </div>
          </div>
          <div className="history-text">
            <h2>Nossa Trajetória</h2>
            <p>
              A PJ Móveis Industriais e Estruturas Metálicas é especializada no
              desenvolvimento e fabricação de móveis e estruturas metálicas sob
              medida, combinando a resistência do metal com a rusticidade e a
              sofisticação da madeira para criar peças únicas, exclusivas e
              atemporais.
            </p>
            <p>
              Nosso compromisso é transformar ideias em projetos personalizados,
              unindo qualidade, funcionalidade, design e acabamento impecável em
              cada detalhe. Trabalhamos com soluções que valorizam ambientes
              residenciais, comerciais e corporativos, sempre alinhadas às
              necessidades e ao estilo de cada cliente.
            </p>
            <p>
              Pioneira em Campos dos Goytacazes na fabricação de mesas resinadas
              em epóxi, a PJ Móveis Industriais busca consolidar sua marca como
              referência em inovação, excelência e autenticidade no segmento.
              Investimos continuamente em técnicas modernas, materiais de alta
              qualidade e práticas sustentáveis, garantindo produtos duráveis e
              de alto padrão. Mais do que fabricar móveis e estruturas,
              acreditamos em criar experiências, gerar valor e contribuir de
              forma positiva para a sociedade, apoiando iniciativas que promovem
              inclusão social, desenvolvimento e propósito através do design e
              da transformação de espaços.
            </p>
          </div>
        </div>
      </section>

      <section className="more-about-section">
        <div className="more-about-container">
          <h2>Nosso Diferencial</h2>

          <div className="more-about-grid">
            <div className="card-diferencial">
              <h3>Móveis sob medida</h3>
              <p>
                Cada projeto é desenvolvido de forma exclusiva, respeitando as
                necessidades, o estilo e a identidade de cada cliente.
              </p>
            </div>

            <div className="card-diferencial">
              <h3>Estruturas metálicas</h3>
              <p>
                Produzimos estruturas robustas e funcionais para ambientes
                residenciais, comerciais e corporativos.
              </p>
            </div>

            <div className="card-diferencial">
              <h3>Design exclusivo</h3>
              <p>
                Criamos peças que unem estética, conforto e funcionalidade,
                valorizando cada ambiente.
              </p>
            </div>

            <div className="card-diferencial">
              <h3>Alta durabilidade</h3>
              <p>
                Utilizamos estruturas em metal, madeira e materiais galvanizados
                para máxima resistência.
              </p>
            </div>

            <div className="card-diferencial">
              <h3>Qualidade garantida</h3>
              <p>
                Cada peça passa por rigorosos processos de conferência e
                acabamento antes da entrega.
              </p>
            </div>

            <div className="card-diferencial">
              <h3>Atendimento personalizado</h3>
              <p>
                Acompanhamos todas as etapas do projeto para garantir uma
                experiência única ao cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção MVV */}
      <section className="mvv-section">
        <div className="mvv-header">
          <h2>
            Missão, Visão <br />& Valores
          </h2>
        </div>
        <div className="mvv-grid">
          {mvv.map((item, index) => (
            <div key={index} className="mvv-card">
              <div className="mvv-icon">{item.title[0]}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default About;
