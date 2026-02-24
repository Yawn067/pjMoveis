import './ContactSection.css';


function ContactSection() {
    return (
        <section className="home-contato">
            <div className="home-contato-overlay">
                <h2>Contato</h2>
                <p>
                    Quer construir o móvel do seu sonho? Fale conosco para um orçamento personalizado!
                </p>

                <div className="home-contato-formas">
                    <a href="https://whatsapp.com" className="contato-item">
                        <img src="/images/WhatsApp_icon.png" alt="WhatsApp" />
                        <span>999999</span>
                    </a>

                    <a href="https://instagram.com" className="contato-item">
                        <img src="/images/instagram.svg.png" alt="Instagram" />
                        <span>@pjmoveis</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;