/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import initialState from "../../initialState.json";

import "../assets/styles/App.scss";

const App = () => {
  return (
    <>
      <h1> IT Works</h1>
      {initialState.events.map((item) => (
        <h2 key={item.id}>{item.eventBody.symbol}</h2>
      ))}
    </>
  );
};

export default App;
