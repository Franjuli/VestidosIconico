import React from "react";
import "./Categories.css";

export default function Categories() {
  return (
    <section className="categories">
      <h2>Categorias</h2>
      <div className="category-grid">
        <div className="category-card">🎬 Cinema</div>
        <div className="category-card">📺 Séries</div>
        <div className="category-card">⭐ Celebridades</div>
        <div className="category-card">🕰️ Por Década</div>
      </div>
    </section>
  );
}
