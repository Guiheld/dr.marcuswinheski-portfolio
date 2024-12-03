import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>26+</div>
        <span  style={{color: darkMode?'white':''}}>anos de</span>
        <span>Experiência</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>100+</div>
        <span  style={{color: darkMode?'white':''}}>cirurgias</span>
        <span>Feitas</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>100+</div>
        <span  style={{color: darkMode?'white':''}}>pacientes </span>
        <span>satisfeitos</span>
      </div>
    </div>
  );
};

export default Experience;
