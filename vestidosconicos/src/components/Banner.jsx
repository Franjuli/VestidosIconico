import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner">
      <img
        src="https://i.pinimg.com/originals/3b/7c/2b/3b7c2b5b72f2db73cc0b4b57365de5a5.jpg"
        alt="Vintage Dress Banner"
        className="banner-image"
      />
      <div className="banner-overlay">
        <h2>Descubra vestidos icônicos da cultura pop</h2>
      </div>
    </section>
  );
}
