import React from "react";
import "./IntroText.css";

export default function IntroText() {
  return (
    <section className="intro-text">
      <p>
        Bem-vindo(a) ao <strong>Once Upon a Dress</strong> — um espaço onde moda e
        fantasia se encontram em cada detalhe.
      </p>
      <p>
        Explore coleções inspiradas em clássicos que marcaram o cinema e o coração.
      </p>
      <p className="quote">
        “Give a girl the right dress and she can conquer the world.”  
        <span> — Edith Head</span>
      </p>
    </section>
  );
}
