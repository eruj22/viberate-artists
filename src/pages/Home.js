import React from "react";
import Loader from "../components/Loader";
import { useAppContext } from "../context/app_context";
import hero from "../assets/hero.jpg";
import heroMobile from "../assets/hero_mobile.jpg";

function Home() {
  const { areArtistsLoading } = useAppContext();

  if (areArtistsLoading) {
    return <Loader />;
  }

  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="hero__title">Viberate</h1>
        <p className="hero__subtitle">Music analytics for professionals</p>
      </div>

      <img src={hero} alt="" className="hero__image imageDesktop" />
      <img src={heroMobile} alt="" className="hero__image imageMobile" />
    </section>
  );
}

export default Home;
