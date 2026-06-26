import "./About.css";
import ContactSection from "../../components/ContactSection/ContactSection";

const About = () => {
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
      <nav className="about-nav"/>

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
          {/* Imagem grande de um projeto icônico */}
          <div className="image-placeholder-large">
            <img src="/domo.jpg" alt="Projeto icônico" />
          </div>
          <div className="hero-experience-badge">INOVAÇÃO E DEDICAÇÃO</div>
        </div>
      </section>

      {/* Introdução - Quem somos */}
      <section className="intro-section">
        <div className="intro-grid">
          <div className="intro-text">
            <h2>Nossa Essência</h2>
            <p className="lead">
              Os projetos de mobiliário e estruturas são desenvolvidos
              internamente pela própria empresa, em parceria com cada
              cliente, garantindo um processo personalizado e alinhado às
              suas necessidades e preferências. Por meio de visualizações em
              3D, é possível acompanhar cada detalhe do projeto antes da
              execução, proporcionando mais segurança e precisão em cada
              etapa.
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
              <span>500+</span>
              <p>Projetos Entregues</p>
            </div>
            <div className="stat-item">
              <span>100%</span>
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
              A PJ Móveis Industriais e Estruturas Metálicas é especializada
              no desenvolvimento e fabricação de móveis e estruturas
              metálicas sob medida, combinando a resistência do metal com
              a rusticidade e a sofisticação da madeira para criar peças
              únicas, exclusivas e atemporais.
            </p>
            <p>
              Nosso compromisso é transformar ideias em projetos
              personalizados, unindo qualidade, funcionalidade, design e
              acabamento impecável em cada detalhe. Trabalhamos com
              soluções que valorizam ambientes residenciais, comerciais e
              corporativos, sempre alinhadas às necessidades e ao estilo de
              cada cliente.
            </p>
            <p>
              Pioneira em Campos dos Goytacazes na fabricação de mesas
              resinadas em epóxi, a PJ Móveis Industriais busca consolidar
              sua marca como referência em inovação, excelência e
              autenticidade no segmento. Investimos continuamente em
              técnicas modernas, materiais de alta qualidade e práticas
              sustentáveis, garantindo produtos duráveis e de alto padrão.
              Mais do que fabricar móveis e estruturas, acreditamos em
              criar experiências, gerar valor e contribuir de forma positiva
              para a sociedade, apoiando iniciativas que promovem inclusão
              social, desenvolvimento e propósito através do design e da
              transformação de espaços.
            </p>
          </div>
        </div>
      </section>

      <section className="more-about-section">
        <div className="more-about-grid">
          
          <div className="more-about-text">
            <h2>Mais Sobre Nós</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci
              porta dapibus. Nulla porttitor accumsan tincidunt. Quisque velit
              nisi, pretium ut lacinia in, elementum id enim.
            </p>
            <p>
              Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.
              Proin eget tortor risus. Vivamus suscipit tortor eget felis
              porttitor volutpat.
            </p>
          </div>
          <div className="more-about-image">
            <div className="image-box">
              <img src="src/assets/images/logo-pjmoveis.jpg" alt="" />
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
        <section className="mvv-section">
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
      </section>
      <ContactSection />
    </div>
  );
};

export default About;
