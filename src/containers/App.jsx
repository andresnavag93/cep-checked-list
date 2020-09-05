/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
// import initialState from "../../initialState.json";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Table from "../components/Table";
import Card from "../components/Card";

import "../assets/styles/App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="body-flex">
        <Card />
        <Table />
      </div>
      <Footer />
    </>
  );
};

export default App;
