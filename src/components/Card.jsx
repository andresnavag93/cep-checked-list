import React from "react";
import { useSelector } from "react-redux";

const Card = () => {
  const noVisited = useSelector((state) => state.noVisited);
  const visited = useSelector((state) => state.visited);
  return (
    <section className="container">
      <div className="row">
        <div
          className="card col-sm-11 col-md-5 shadow mt-5 mx-auto bg-white rounded"
          align="center"
        >
          <div className="card-body">
            <h5 className="card-title">VISTOS</h5>
            <h5 className="card-text">{visited}</h5>
          </div>
        </div>

        <div
          className="card col-sm-12 col-md-5 shadow mt-5 mx-auto bg-white rounded"
          align="center"
        >
          <div className="card-body">
            <h5 className="card-title">NO VISTOS</h5>
            <h5 className="card-text">{noVisited}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
