import React, { useState } from "react";
import Header from "../components/header";
import Banner from "../components/Banner";
import IntroText from "../components/IntroText";
import Categories from "../components/Categories";
import Contact from "../pages/Contact";
import "./Home.css";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="home">
      {/* Cabeçalho aparece uma vez só */}
      <Header onContactClick={() => setShowContact(!showContact)} />

      {/* Se showContact for true, mostra o contato; senão mostra o conteúdo principal */}
      {!showContact ? (
        <>
          <Banner />
          <IntroText />
          <Categories />
        </>
      ) : (
        <Contact />
      )}
    </div>
  );
}
