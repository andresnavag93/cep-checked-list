/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
// import initialState from "../../initialState2.json";
import initialState from "../../initialState.json";

import "../assets/styles/App.scss";

const Table = () => {
  return (
    <div className="container shadow-lg p-3 my-5 bg-white rounded">
      <table className="table table-striped text-center ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Labels</th>
            <th scope="col">criticality</th>
            <th scope="col">Timestamp</th>
            <th scope="col">Name Event</th>
            <th scope="col">Status</th>
            <th scope="col">Checked</th>
          </tr>
        </thead>
        <tbody>
          {initialState.events.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.labels}</td>
              <td>{item.criticality}</td>
              <td>{item.timestamp}</td>
              <td>{item.eventBody.symbol}</td>
              <td>{item.status}</td>
              <td>{item.checked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
