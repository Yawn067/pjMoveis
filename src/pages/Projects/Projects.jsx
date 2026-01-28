import "./Projects.css";
import ProjectsCarousel from "./Components/ProjectsCarousel";

const Projects = () => {
  const categorias = [
    {
      id: 1,
      titulo: "Mobiliário Corporativo",
      descricao:
        "Soluções robustas para ambientes de alto fluxo, unindo a força do aço com o conforto da madeira tratada.",
      produtos: [
        {
          id: 1,
          nome: "Mesa Industrial Kraft",
          img: "src/assets/images/logo-pjmoveis.jpg",
          preco: "1.250,00",
          largura: 120,
          altura: 75,
          profundidade: 60,
        },
        {
          id: 2,
          nome: "Estante Metálica Pro",
          img: "src/assets/images/logo-pjmoveis.jpg",
          preco: "980,00",
          largura: 100,
          altura: 180,
          profundidade: 40,
        },
        {
          id: 5,
          nome: "Cadeira Operacional Steel",
          img: "src/assets/images/logo-pjmoveis.jpg",
          preco: "450,00",
          largura: 60,
          altura: 110,
          profundidade: 60,
        },
        {
          id: 6,
          nome: "Armário Multiuso Iron",
          img: "src/assets/images/logo-pjmoveis.jpg",
          preco: "1.100,00",
          largura: 90,
          altura: 200,
          profundidade: 50,
        },
      ],
    },
    {
      id: 2,
      titulo: "Linha Industrial Home",
      descricao:
        "O design das fábricas adaptado para o aconchego do lar. Estantes, mesas e suportes com acabamento refinado.",
      produtos: [
        {
          id: 3,
          nome: "Estante Loft",
          img: "src/assets/images/logo-pjmoveis.jpg",
          preco: "750,00",
          largura: 80,
          altura: 160,
          profundidade: 30,
        },
        {
          id: 4,
          nome: "Mesa de Jantar Factory",
          img: "src/assets/images/logo-pjmoveis.jpg",
          preco: "1.500,00",
          largura: 150,
          altura: 75,
          profundidade: 90,
        },
        {
          id: 5,
          nome: "Cadeira Operacional Steel",
          img: "src/assets/images/logo-pjmoveis.jpg",
          preco: "450,00",
          largura: 60,
          altura: 110,
          profundidade: 60,
        },
        {
          id: 6,
          nome: "Armário Multiuso Iron",
          img: "src/assets/images/logo-pjmoveis.jpg",
          preco: "1.100,00",
          largura: 90,
          altura: 200,
          profundidade: 50,
        },
      ],
    },
  ];

  return (
    <div className="projects-page">
      {/* Cabeçalho da Página */}
      <header className="projects-header">
        <div className="header-content">
          <span className="line-tag">Portfólio</span>
          <h1>
            Nossos <span className="outline-text">Projetos</span>
          </h1>
          <p>
            Explorando a funcionalidade bruta através de um design minimalista e
            duradouro.
          </p>
        </div>
      </header>

      {/* Mapeamento das Seções de Categoria */}
      {categorias.map((cat, index) => (
        <section
          key={cat.id}
          className={`category-section ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="category-info">
            <div className="category-sticky">
              <span className="category-number">0{index + 1}</span>
              <h2>{cat.titulo}</h2>
              <div className="divider"></div>
              <p>{cat.descricao}</p>
              <button className="view-more">Ver Detalhes</button>
            </div>
          </div>

          <div className="category-display">
            <div className="carousel-wrapper">
              <ProjectsCarousel
                className="projects-carousel"
                listaProdutos={cat.produtos}
              />
              {/* <div className="carousel-mockup">
                [ Espaço do Componente Carousel ]
              </div> */}
            </div>
          </div>
        </section>
      ))}

      <section className="projects-cta">
        <div className="cta-box">
          <h3>Tem um projeto especial em mente?</h3>
          <p>Executamos projetos personalizados sob medida para sua empresa.</p>
          <button className="cta-button">Solicitar Orçamento</button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
