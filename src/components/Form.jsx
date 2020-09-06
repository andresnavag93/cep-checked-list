import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setFilterDate } from "../actions";

const Form = () => {
  const dispatch = useDispatch();
  const [dates, setDates] = useState({ dateStart: "", dateEnd: "" });
  const [error, setError] = useState(false);
  const [clean, setClean] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (clean) {
      setError(false);
      setClean(false);
      setDates({ dateStart: "", dateEnd: "" });
      dispatch(setFilterDate({ dateStart: "", dateEnd: "" }));
    } else {
      if (dates.dateStart === "" || dates.dateEnd === "") {
        setError(true);
        setMessage("Para filtrar, ingrese ambas fechas");
      } else {
        const dateStart = moment(dates.dateStart);
        const dateEnd = moment(dates.dateEnd);
        if (dateEnd.diff(dateStart, "minutes") <= 0) {
          setError(true);
          setMessage("La fecha de inicio debe ser menor que la fecha final");
        } else {
          setError(false);
          setClean(true);
          dispatch(setFilterDate(dates));
        }
      }
    }
  };

  return (
    <section className="container py-2 px-3 mx-auto mt-5 bg-white shadow-lg rounded">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="col my-2">
            <label>Fecha Inicio</label>
            <input
              onChange={handleChange}
              value={dates.dateStart}
              type="datetime-local"
              className="form-control"
              name="dateStart"
            />
          </div>
          <div className="col my-2">
            <label>Fecha Final</label>
            <input
              onChange={handleChange}
              value={dates.dateEnd}
              type="datetime-local"
              className="form-control"
              name="dateEnd"
            />
          </div>
        </div>

        <div className="text-center py-2 my-2">
          <button type="submit" className="btn btn-primary">
            {!clean && "Filtrar"}
            {clean && "Restablecer"}
          </button>
          {error && (
            <div className="alert alert-danger m-3" role="alert">
              {message}
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default Form;
