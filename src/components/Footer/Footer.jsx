import React from "react";
import "./Footer.css";
import Wave from "../../img/wave 1.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>drmarcuswinheski@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/dr.marcuswinheski/" target="_blank" rel="noopener noreferrer">
            <Insta color="black" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/drmarcusrivabemwinheski/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
            <Facebook color="black" size={"3rem"} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5541991640506&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Marcus!%20:)" target="_blank" rel="noopener noreferrer">
            <Whatsapp color="black" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
