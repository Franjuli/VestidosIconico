import React from "react";
import Header from '../components/header';
import Banner from "../components/Banner";
import IntroText from "../components/IntroText";
import Categories from "../components/Categories";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <IntroText />
      <Categories />
    </div>
  );
}
