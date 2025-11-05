import React from "react";
import "./IntroText.css";

export default function IntroText() {
  return (
    <section className="intro-text">
      <p>
        Bem-vindo(a) ao <strong>Once Upon a Dress</strong> — uma revista virtual
        que celebra vestidos icônicos da cultura pop e do cinema.
      </p>
      <p>
        Explore coleções inspiradas em clássicos como <em>Grease</em>, 
        <em> Breakfast at Tiffany’s</em> e muito mais.
      </p>
      <p className="quote">
        “Give a girl the right dress and she can conquer the world.”  
        <span>— Edith Head</span>
      </p>
    </section>
  );
}
