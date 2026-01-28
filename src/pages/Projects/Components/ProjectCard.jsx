import "./ProjectCard.css";

const ProjectCard = ({ produto }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={produto.img} alt={produto.nome} />
        <div className="product-price-badge">R$ {produto.preco}</div>
      </div>

      <div className="product-info">
        <h3>{produto.nome}</h3>

        <div className="product-specs">
          <div className="spec-item">
            <span className="spec-label">Largura</span>
            <span className="spec-value">{produto.largura}cm</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Altura</span>
            <span className="spec-value">{produto.altura}cm</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Profundidade</span>
            <span className="spec-value">{produto.profundidade}cm</span>
          </div>
        </div>

        <a href={`/projeto/${produto.id}`} className="details-link">
          VER DETALHES DO PROJETO
          <svg width="20" height="10" viewBox="0 0 25 15" fill="none">
            <path
              d="M1 7.5H24M24 7.5L17.5 1M24 7.5L17.5 14"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
