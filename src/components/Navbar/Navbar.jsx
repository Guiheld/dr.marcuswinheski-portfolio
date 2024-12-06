// Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-logo">
        <img src="" alt="Logo" className="logo-image" />
        </div>
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link 
                activeClass="active" 
                to="home" 
                spy={true} 
                smooth={true}
                aria-label="Navegar para Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="services" 
                spy={true} 
                smooth={true}
                aria-label="Navegar para Especialidades"
              >
                Especialidades
              </Link>
            </li>
            <li>
              <Link 
                to="experience" 
                spy={true} 
                smooth={true}
                aria-label="Navegar para Experiência"
              >
                Experiência
              </Link>
            </li>
            <li>
              <Link 
                to="testimonial" 
                spy={true} 
                smooth={true}
                aria-label="Navegar para Testimonial"
              >
                Testimonial
              </Link>
            </li>
            <li className="n-localizacao">
              <Link 
                to="footer" 
                spy={true} 
                smooth={true}
                aria-label="Navegar para Localização"
              >
                Localização
              </Link>
            </li>
          </ul>
        </div>
        <a 
          href="https://api.whatsapp.com/send?phone=5541991640506&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Marcus!%20:)" 
          target="_blank" 
          rel="noopener noreferrer"
          className="n-button"
          aria-label="Contato via WhatsApp"
        >
          Contato
        </a>
        <div className="n-hamburger" onClick={toggleMenu} aria-label="Menu de Navegação">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      
      {isOpen && (
        <div className="n-mobile-menu">
          <ul>
            <li>
              <Link 
                activeClass="active" 
                to="home" 
                spy={true} 
                smooth={true}
                onClick={toggleMenu}
                aria-label="Navegar para Home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="services" 
                spy={true} 
                smooth={true}
                onClick={toggleMenu}
                aria-label="Navegar para Especialidades"
              >
                Especialidades
              </Link>
            </li>
            <li>
              <Link 
                to="experience" 
                spy={true} 
                smooth={true}
                onClick={toggleMenu}
                aria-label="Navegar para Experiência"
              >
                Experiência
              </Link>
            </li>
            <li>
              <Link 
                to="works" 
                spy={true} 
                smooth={true}
                onClick={toggleMenu}
                aria-label="Navegar para Protfolio"
              >
                Protfolio
              </Link>
            </li>
            <li>
              <Link 
                to="testimonial" 
                spy={true} 
                smooth={true}
                onClick={toggleMenu}
                aria-label="Navegar para Testimonial"
              >
                Testimonial
              </Link>
            </li>
            <li className="n-localizacao">
              <Link 
                to="footer" 
                spy={true} 
                smooth={true}
                onClick={toggleMenu}
                aria-label="Navegar para Localização"
              >
                Localização
              </Link>
            </li>
            <li className="n-contato">
              <Link 
                to="footer" 
                spy={true} 
                smooth={true}
                onClick={toggleMenu}
                aria-label="Navegar para Localização"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
