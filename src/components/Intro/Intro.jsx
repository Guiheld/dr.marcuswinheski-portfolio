// Intro.jsx

import React, { useContext } from "react";
import "./Intro.css";
import Marcus from "../../img/marcus com fundo.jpeg";
import InstagramImg from "../../img/instagram-1-svgrepo-com 1.svg";
import WhatsImg from "../../img/whatsapp-symbol-logo-svgrepo-com 1.svg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // Context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Mensagem padrão para o WhatsApp (codificada)
  const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar uma consulta com o Dr. Marcus! :)");
  const whatsappLink = `https://wa.me/5541991640506?text=${whatsappMessage}`;

  return (
    <div className="Intro" id="Intro">
      {/* Left side (hidden on small screens) */}
      <div className="i-left">
        <div className="i-name">
          <span className="welcome-text" style={{ color: darkMode ? "white" : "" }}>
            Seja bem-vindo
          </span>
          <span className="doctor-name">Doutor Marcus Winheski</span>
        </div>
        <Link to="services" smooth={true} spy={true}>
          <button className="button i-button">Ver mais</button>
        </Link>
        <div className="i-icons">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src={WhatsImg} alt="WhatsApp" className="i-icon" />
          </a>
          <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">
            <img src={InstagramImg} alt="Instagram" className="i-icon" />
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="i-right">
        {/* Image container with gradient */}
        <div className="image-container">
          <img src={Marcus} alt="Doutor Marcus Winheski" className="marcus-image" />
          <div className="gradient-overlay"></div>
        </div>

        {/* Título e descrição abaixo da imagem */}
        <div className="description-text">
          <strong>Dr Marcus Winheski</strong>
          <p>Médico especialista em Cirurgia do Câncer, Prevenção e Tratamento Oncológico</p>
        </div>

        {/* Espaçamento de 20px para telas menores */}
        <div className="spacing"></div>

        {/* Ícones abaixo da descrição (versão mobile) */}
        <div className="i-icons-mobile">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src={WhatsImg} alt="WhatsApp" className="i-icon-mobile" />
          </a>
          <a href="https://instagram.com/dr.marcuswinheski" target="_blank" rel="noopener noreferrer">
            <img src={InstagramImg} alt="Instagram" className="i-icon-mobile" />
          </a>
        </div>

        {/* Animações (opcional) */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          alt=""
          className="motion-img"
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          {/* Conteúdo adicional, se necessário */}
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* Conteúdo adicional, se necessário */}
        </motion.div>

        {/* Gradientes adicionais */}
        <div className="blur background-blur"></div>
        <div
          className="blur additional-blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
