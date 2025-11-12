import React from "react";
import "../pages/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Entre em Contato 💌</h2>
          <p>
            Adoraríamos ouvir você! Envie uma mensagem sobre colaborações,
            sugestões ou dúvidas.
          </p>

          <form className="contact-form">
            <label>Nome</label>
            <input type="text" placeholder="Seu nome completo" />

            <label>E-mail</label>
            <input type="email" placeholder="exemplo@email.com" />

            <label>Mensagem</label>
            <textarea placeholder="Escreva sua mensagem..." rows="5" />

            <button type="submit">Enviar </button>
          </form>
        </div>

        <div className="contact-right">
          <h3>Once Upon a Dress</h3>
          <p>
            Uma revista virtual que celebra vestidos icônicos da cultura pop,
            cinema e moda.
          </p>
          <div className="contact-info">
            <p>📍 Timon, Brasil</p>
            <p>📧 contato@onceuponadress.com</p>
            <p>📞 (11) 99999-9999</p>
          </div>

          <div className="contact-extra">
            <h4>Horário de Atendimento</h4>
            <p>Segunda a Sexta – 9h às 18h</p>

            <h4>Redes Sociais</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
