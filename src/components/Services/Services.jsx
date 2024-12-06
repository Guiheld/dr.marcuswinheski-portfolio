import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/oncologia 1.png";
import Glasses from "../../img/oncologia 1.png";
import Humble from "../../img/oncologia 1.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Saiba mais</span>
        <span></span>
        <span>
          Especialista em cuidar do paciente com atenção integral,
          <br />
          priorizando conforto, segurança e resultados efetivos.
        </span>
        
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Câncer de mama"}
            detail={
              "Diagnóstico preciso, cuidados personalizados e abordagens modernas para assegurar o melhor tratamento."
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Câncer de próstata"}
            detail={
              "Prevenção, rastreamento e terapias avançadas com foco na qualidade de vida do paciente."
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Câncer de pele"}
            detail={
              "Identificação precoce e tratamentos eficazes, mantendo a saúde e a proteção da pele."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
       
      </div>
    </div>
  );
};

export default Services;
