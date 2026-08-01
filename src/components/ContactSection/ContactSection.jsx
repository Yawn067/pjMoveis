import "./ContactSection.css";
import { MdEmail } from "react-icons/md";

function ContactSection() {
  return (
    <section className="home-contato">
      <div id = "contato-ancora" className="home-contato-overlay">
        <h2>Contato </h2>
        <p>
          Quer construir o móvel do seu sonho? Fale conosco para um orçamento
          personalizado!
        </p>

        <div className="home-contato-formas">
          <a
            href="https://whatsapp.com/send?phone=5522999642402"
            className="contato-item"
          >
            <img src="/images/WhatsApp_icon.png" alt="WhatsApp" />
            <span>Paulo Junio</span>
          </a>

          <a
            href="mailto:pjmoveisindustriaiseestruturas@gmail.com"
            className="contato-item"
          >
            <MdEmail size={24} />
            <span>pjmoveisindustriaiseestruturas@gmail.com</span>
          </a>

          <a
            href="https://www.instagram.com/pjmoveis_estruturas_metalicas/"
            className="contato-item"
          >
            <img src="/images/instagram.svg.png" alt="Instagram" />
            <span>@pjmoveis_estruturas_metalicas</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
