import React from "react";
import "../assets/styles/components/Banner.scss";

import banner from "../assets/static/banner.jpg";

const Banner = () => {
  return (
    <section className="banner bg-dark text-white">
      <img className="banner__img card-img" src={banner} alt="" />
      <div className="banner__heading card-img-overlay">
        <h1 className="banner__tittle">Eventos</h1>
      </div>
    </section>
  );
};

export default Banner;
