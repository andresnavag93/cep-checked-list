import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setFilterDate } from "../actions";

const Form = () => {
  const dispatch = useDispatch();
  const [dates, setDates] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (dates.dateStart === null || dates.dateEnd === null) {
      setError(true);
    } else {
      const dateStart = moment(dates.dateStart);
      const dateEnd = moment(dates.dateEnd);
      if (dateEnd.diff(dateStart, "minutes") <= 0) {
        setError(true);
      } else {
        setError(false);
        dispatch(setFilterDate(dates));
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
              type="datetime-local"
              className="form-control"
              name="dateStart"
            />
          </div>
          <div className="col my-2">
            <label>Fecha Fin</label>
            <input
              onChange={handleChange}
              type="datetime-local"
              className="form-control"
              name="dateEnd"
            />
          </div>
        </div>

        <div className="text-center py-2 my-2">
          <button type="submit" className="btn btn-primary">
            Fijar Rango
          </button>
          {error && (
            <div className="alert alert-danger m-3" role="alert">
              Fechas Vacias o Fecha Inicio es mayor Fecha Final
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default Form;
