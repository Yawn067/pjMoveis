import "./About.css";

const About = () => {
  const mvv = [
    {
      title: "Missão",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    },
    {
      title: "Visão",
      text: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget.",
    },
    {
      title: "Valores",
      text: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit.",
    },
  ];

  return (
    <div className="modern-about">
      {/* Header com Logo */}
      <nav className="about-nav">
        <div className="mini-logo">
          <img src="src/assets/images/logo-pjmoveis.jpg" alt="" />
        </div>
        <div className="line-decorative"></div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-title-wrapper">
          <span className="subtitle">DESDE 2020</span>
          <h1>
            CONHEÇA MAIS <br />{" "}
            <span className="outline-text">SOBRE A PJMÓVEIS</span>
          </h1>
        </div>
        <div className="hero-main-image">
          {/* Imagem grande de um projeto icônico */}
          <div className="image-placeholder-large">
            {/* Imagem fica aqui */}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </p>
            <p>
              Cras ultricies ligula sed magna dictum porta. Curabitur aliquet
              quam id dui posuere blandit. Donec sollicitudin molestie
              malesuada. Curabitur arcu erat, accumsan id imperdiet et,
              porttitor at sem.
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
              <img src="src/assets/images/logo-pjmoveis.jpg" alt="" />
            </div>
          </div>
          <div className="history-text">
            <h2>Nossa Trajetória</h2>
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
    </div>
  );
};

export default About;
