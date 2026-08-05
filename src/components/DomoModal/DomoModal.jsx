import React, { useEffect } from "react";
import "./DomoModal.css";

const DomoModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="domo-modal-overlay" onClick={onClose}>
      <div
        className="domo-modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="domo-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="domo-modal-close"
          onClick={onClose}
          aria-label="Fechar informações do Domo"
        >
          ×
        </button>

        <h2 id="domo-modal-title">
          Domo da PJ – Design, inovação e personalização
        </h2>
        <p>
          Apresentado na Mercado Decor 2025, o Domo da PJ Móveis Industriais e
          Estruturas Metálicas une arquitetura, conforto e sofisticação em um
          projeto exclusivo. Com estrutura em madeira e design marcante, é a
          escolha ideal para hospedagens, áreas de lazer, espaços de
          contemplação e projetos comerciais.
        </p>
        <p>
          Seu formato geométrico proporciona um ambiente moderno, acolhedor e
          integrado à natureza, aliando beleza, resistência e durabilidade.
        </p>
        <p>
          Além do modelo apresentado, a PJ desenvolve projetos totalmente
          personalizados, adaptando dimensões, acabamentos e detalhes para criar
          um domo exclusivo, pensado para o seu espaço e suas necessidades.
        </p>
      </div>
    </div>
  );
};

export default DomoModal;
