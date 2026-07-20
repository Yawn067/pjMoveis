import "./Projects.css";
import ProjectsCarousel from "./Components/ProjectsCarousel";
import ContactSection from "../../components/ContactSection/ContactSection";

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
          img: "mobCorporativo1.jpg",
          preco: "1.250,00",
          largura: 120,
          altura: 75,
          profundidade: 60,
        },
        {
          id: 2,
          nome: "Mesa Madeira Pro",
          img: "mobCorporativo2.png",
          preco: "980,00",
          largura: 100,
          altura: 180,
          profundidade: 40,
        },
        {
          id: 3,
          nome: "Cadeira Operacional Steel",
          img: "mobCorporativo3.png",
          preco: "450,00",
          largura: 60,
          altura: 110,
          profundidade: 60,
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
          id: 4,
          nome: "Armário Loft",
          img: "mobIndustrial.png",
          preco: "750,00",
          largura: 80,
          altura: 160,
          profundidade: 30,
        },
        {
          id: 5,
          nome: "Bancada Factory",
          img: "mobIndustrial2.png",
          preco: "1.500,00",
          largura: 150,
          altura: 75,
          profundidade: 90,
        },
        {
          id: 6,
          nome: "cabeceira de cama",
          img: "mobIndustrial3.png",
          preco: "450,00",
          largura: 60,
          altura: 110,
          profundidade: 60,
        },
        {
          id: 7,
          nome: "Estante Multiuso Iron",
          img: "mobIndustrial4.png",
          preco: "1.100,00",
          largura: 90,
          altura: 200,
          profundidade: 50,
        },
      ],
    },
     {
      id: 3,
      titulo: "Outros Projetos",
      descricao:
        "Conheça mais um pouco do nosso portfólio, com soluções personalizadas para cada necessidade.",
      produtos: [
        {
          id: 8,
          nome: "Domo",
          img: "/domo.jpg",
          preco: "1.250,00",
          largura: 120,
          altura: 75,
          profundidade: 60,
        },
        {
          id: 9,
          nome: "Estante Metálica Pro",
          img: "src/assets/images/logo-pjmoveis.jpg",
          preco: "980,00",
          largura: 100,
          altura: 180,
          profundidade: 40,
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
              {/*  <button className="view-more">Ver Detalhes</button>*/}
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

      <ContactSection />
    </div>
  );
};

export default Projects;
