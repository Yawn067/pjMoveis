import React from "react";
import "./footer.css";

function Footer() {
  const cidade = "Campos dos Goytacazes";
  const estado = "RJ";

  return (
    <footer className="footer-wrapper">
      {/* 1. Faixa Branca de Crédito Áurea no TOPO (Acima do Footer Escuro) */}
      <div className="aurea-top-bar">
        <a href="https://www.instagram.com/aureaej/" target = "blank" className="aurea_mark">
          DESENVOLVIDO PELA AUREA © 2026
        </a>
      </div>

      {/* 2. Rodapé Escuro Institucional e SEO */}
      <div className="main-footer">
        {/* Marcação de SEO Local (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PJ Móveis Industriais Ltda.",
              "description":
                "Engenharia e Design Industrial. Criando peças de mobiliário com precisão estrutural e integridade material.",
              "url": "https://seusite.com.br",
              "email": "pjmoveisindustriaiseestruturas@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": cidade,
                "addressRegion": estado,
                "addressCountry": "BR",
              },
            }),
          }}
        />

        <div className="footer-container">
          {/* Coluna 1: Branding, Localização */}
          <div className="footer-brand-col">
            <div className="footer-logo-wrapper">
              <img
                src="src/assets/images/logo-transparente.png"
                alt="PJ Móveis - Engenharia e Design Industrial"
                className="footer-logo-img"
              />
            </div>

            <p className="footer-description">
              Engenharia e Design Industrial. Criando peças de mobiliário com
              precisão estrutural e integridade material para ambientes
              corporativos e residenciais de alto padrão.
            </p>

            {/* Tag de Cidade e Estado visível */}
            <div className="footer-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{cidade} - {estado} | Brasil</span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">NAVEGAÇÃO</h4>
            <ul className="footer-links">
              <li><a href="/">Início</a></li>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3: Legal */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">LEGAL</h4>
            <ul className="footer-links">
              <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
              <li><a href="/termos-de-uso">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        {/* Faixa Inferior do Bloco Escuro */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <p>© 2026 PJ Móveis.</p>
            <p className="sub-copyright">
              PJ Móveis Industriais Ltda. | CNPJ: 00.000.000/0001-00 | {cidade}, {estado}
            </p>
          </div>

          <div className="bottom-right">
            <span className="precision-tag">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M2 12h20"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;