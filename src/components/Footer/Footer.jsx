// Footer.jsx
import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="f-content">
        <h3>Localização</h3>
        <div className="f-location">
          <FaMapMarkerAlt className="f-icon" />
          <span>R. Xavier da Silva, 1591 | Campo Largo | PR</span>
        </div>
        <p>
          Atendimento de Segunda a Sexta, das 7:30 às 18:30h
          <br />
          <a 
            href="https://www.cedaccampolargo.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="f-link"
          >
            www.cedaccampolargo.com.br
          </a>
          <br />
          41. 3393.3830 | 41. 99164.0506
        </p>
      </div>
    </div>
  );
};

export default Footer;
