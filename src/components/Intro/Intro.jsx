import React, { useContext } from "react";
import "./Intro.css";
import Marcus from "../../img/marcus com fundo.jpeg";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Whats from "@iconscout/react-unicons/icons/uil-whatsapp";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // Context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

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
        <Link to="experience" smooth={true} spy={true}>
          <button className="button i-button">Ver mais</button>
        </Link>
        <div className="i-icons">
          <Whats color="#FCA61F" size={"5rem"} />
          <Instagram color="#FCA61F" size={"5rem"} />
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

        {/* Espaçamento de 50px */}
        <div className="spacing"></div>

        {/* Ícones abaixo da descrição */}
        <div className="i-icons-mobile">
          <Whats color="#FCA61F" size={"3rem"} />
          <Instagram color="#FCA61F" size={"3rem"} />
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
