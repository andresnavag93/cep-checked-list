/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from "react";
import MaterialTable from "material-table";

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";

import initialState from "../../initialState.json";

import "../assets/styles/App.scss";

const tableIcons = {
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
};

const Table = () => {
  return (
    <section className="container mb-5 mx-auto p-0 bg-white shadow-lg rounded">
      <MaterialTable
        icons={tableIcons}
        title=""
        columns={[
          {
            title: "Id",
            field: "id",
            cellStyle: { textAlign: "center" },
          },
          {
            title: "Etiqueta",
            field: "labels[0]",
            cellStyle: { textAlign: "center" },
          },
          {
            title: "Criticidad",
            field: "criticality",
            cellStyle: { textAlign: "center" },
          },
          {
            title: "Fecha",
            field: "timestamp",
            cellStyle: { textAlign: "center" },
          },
          {
            title: "Nombre",
            field: "eventBody.symbol",
            cellStyle: { textAlign: "center" },
          },
          {
            title: "Status",
            field: "status",
            cellStyle: { textAlign: "center" },
          },
          {
            title: "Visto",
            field: "checked",
            cellStyle: { textAlign: "center" },
          },
        ]}
        data={initialState.events}
        options={{
          filtering: true,
          actionsColumnIndex: -1,
          headerStyle: { textAlign: "center" },
        }}
        // actions={[
        //   {
        //     icon: SaveAlt,
        //     tooltip: "Checked",
        //     cellStyle: { textAlign: "center" },
        //     onClick: (event, rowData) => {
        //       // Do save operation
        //     },
        //   },
        // ]}
      />
    </section>
  );
};

export default Table;
