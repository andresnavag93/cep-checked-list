import React from "react";
// import "../assets/styles/components/Cards.scss";

const Card = () => {
  return (
    <section className="container">
      <div className="row m-5">
        <div
          className="card col-sm-11 col-md-5 shadow my-5 mx-auto bg-white rounded"
          align="center"
        >
          <div className="card-body">
            <h5 className="card-title">VISTOS</h5>
            <h5 className="card-text">{2}</h5>
          </div>
        </div>

        <div
          className="card col-sm-12 col-md-5 shadow my-5 mx-auto bg-white rounded"
          align="center"
        >
          <div className="card-body">
            <h5 className="card-title">NO VISTOS</h5>
            <h5 className="card-text">{98}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
