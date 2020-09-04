/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
// import initialState from "../../initialState.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";

import "../assets/styles/App.scss";

const App = () => {
  return (
    <div className="body-flex">
      <Header />
      <Table />
      <Footer />
    </div>
  );
};

export default App;
