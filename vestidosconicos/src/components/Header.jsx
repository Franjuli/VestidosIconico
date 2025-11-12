import React from "react";
import "./Header.css";

export default function Header({ onContactClick }) {
  return (
    <header className="header">
      {/* --- Área esquerda (logo + nome da marca) --- */}
      <div className="header-left">
        <div className="logo-placeholder">
          {/* Aqui você vai colocar a logo depois, ex: <img src={logo} alt="Logo" /> */}
        </div>
        <h1 className="logo-text">
          Once Upon a Dress
          <span className="byline"> por Franciele e Júlia </span>
        </h1>
      </div>

      {/* --- Área direita (menu) --- */}
      <nav className="header-right">
        <button className="nav-button">Home</button>
        <button className="nav-button">Página 2</button>
        <button className="contact-button" onClick={onContactClick}>
          Contato
        </button>
      </nav>
    </header>
  );
}

