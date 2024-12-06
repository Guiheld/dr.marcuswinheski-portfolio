import React, { useContext } from "react";
import "./Intro.css";
import Marcus from "../../img/marcus com fundo.jpeg";
import InstagramImg from "../../img/instagram-1-svgrepo-com 1.svg";
import WhatsImg from "../../img/whatsapp-symbol-logo-svgrepo-com 1.svg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link as LinkScroll } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar uma consulta com o Dr. Marcus! :)");
  const whatsappLink = `https://wa.me/5541991640506?text=${whatsappMessage}`;

  const instagramLink = "https://www.instagram.com/dr.marcuswinheski/";

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span className="welcome-text" style={{ color: darkMode ? "white" : "" }}>
            Seja bem-vindo
          </span>
          <span className="doctor-name">Doutor Marcus Winheski</span>
        </div>
        <LinkScroll to="services" smooth={true} spy={true}>
          <button className="button i-button">Ver mais</button>
        </LinkScroll>
        <div className="i-icons">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="link-icon">
            <FaWhatsapp />
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="link-icon">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="i-right">
        <div className="image-container">
          <img src={Marcus} alt="Doutor Marcus Winheski" className="marcus-image" />
          <div className="gradient-overlay"></div>
        </div>

        <div className="description-text">
          <strong>Dr Marcus Winheski</strong>
          <p>Médico especialista em Cirurgia do Câncer, Prevenção e Tratamento Oncológico</p>
        </div>

        <div className="spacing"></div>

        <div className="i-icons-mobile">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src={WhatsImg} alt="WhatsApp" className="i-icon-mobile" />
          </a>
          <a href="https://instagram.com/dr.marcuswinheski" target="_blank" rel="noopener noreferrer">
            <img src={InstagramImg} alt="Instagram" className="i-icon-mobile" />
          </a>
        </div>

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
        />

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        />

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
        />
      </div>
    </div>
  );
};

export default Intro;