import React, { useContext } from "react";
import "./Works.css";
import PresentacaoIcone from "@iconscout/react-unicons/icons/uil-presentation-play";
import MicrofoneIcone from "@iconscout/react-unicons/icons/uil-microphone";
import ApresentacaoPlayIcone from "@iconscout/react-unicons/icons/uil-youtube";
import CameraIcon from "@iconscout/react-unicons/icons/uil-camera";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Conheça o Dr. Marcus Winheski
          </span>
          <span></span>
          <spane>
            Formado em faculdade de medicina em 2000 e residente
            <br />
              de tratamento especializado em câncer, entusiasta por
            <br />
              podcast e apresentar e mostrar meu trabalho as pessoas 
            <br />
              sempre apresentando conhecimento ao mundo! 
          </spane>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
     
    </div>
  );
};

export default Works;
