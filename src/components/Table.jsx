/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from "react";
import { connect } from "react-redux";

import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import { setVisited, setNotVisited } from "../actions";

// import initialState from "../../initialState.json";

import "../assets/styles/App.scss";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const Table = (props) => {
  const { events } = props;

  const handleSetVisited = ({ id, checked }) => {
    if (checked === "no visto") {
      props.setVisited({ id, checked });
    }
  };

  const handleSetNotVisited = ({ id, checked }) => {
    if (checked === "visto") {
      props.setNotVisited({ id, checked });
    }
  };

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
        data={events}
        options={{
          filtering: true,
          actionsColumnIndex: -1,
          headerStyle: { textAlign: "center" },
        }}
        actions={[
          {
            icon: Check,
            tooltip: "Checked",
            cellStyle: { textAlign: "center" },
            onClick: (event, rowData) => {
              handleSetVisited(rowData);
            },
          },
          {
            icon: Clear,
            tooltip: "NotChecked",
            cellStyle: { textAlign: "center" },
            onClick: (event, rowData) => {
              handleSetNotVisited(rowData);
            },
          },
        ]}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

const mapDispatchToProps = { setVisited, setNotVisited };

// export default Table;
export default connect(mapStateToProps, mapDispatchToProps)(Table);
