import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Dr. Marcus</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Especialidades
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Experiência
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <a href="https://api.whatsapp.com/send?phone=5541991640506&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Marcus!%20:)" target="_blank" rel="noopener noreferrer">
            <button className="button n-button">Contato</button>
          </a>
      </div>
    </div>
  );
};

export default navbar;
