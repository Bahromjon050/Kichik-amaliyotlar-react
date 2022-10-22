import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateFilAc } from "../redux/Reducers/DateReducers";

const DateFilter = () => {
  const { users } = useSelector((state) => state.createAll);
  const [newDate, setNewDate] = useState([]);
  const [date, setDate] = useState({
    form: "",
    to: "",
  });
  const filter = (item) => {
    return item.year >= date.form && item.year <= date.to;
  };

  const newDateFun = () => {
    if (date.form !== "" && date.to !== "") {
      let filnew = users.filter(filter);
      console.log(filnew);
      setNewDate([...filnew]);
    }
  };
  const resetFun = () => {
    setNewDate(users);
    setDate({
      form: "",
      to: "",
    });
  };
  const changeFun = (e) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };
  return (
    <>
      <main className="fil_main df aic fdc g-4">
        <header>
          <label htmlFor="after">Form:</label>
          <input
            type="date"
            id="after"
            name="form"
            value={date.form}
            onChange={changeFun}
          />
          <label htmlFor="before">To:</label>
          <input
            type="date"
            id="before"
            name="to"
            value={date.to}
            onChange={changeFun}
          />
          <button onClick={() => newDateFun()}>
            <img src="./img/search.svg" />
          </button>
          <button onClick={() => resetFun()}>
            <img src="./img/res.svg" />
          </button>
        </header>
        <div className="main_body">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>age</th>
                <th>year</th>
              </tr>
            </thead>
            <tbody>
              {newDate.length === 0
                ? users.map((val, i) => (
                    <tr className="bg-color" key={i}>
                      <td>{i + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.age}</td>
                      <td>{val.year}</td>
                    </tr>
                  ))
                : newDate.map((val, i) => (
                    <tr className="bg-color" key={i}>
                      <td>{i + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.age}</td>
                      <td>{val.year}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};
export default DateFilter;
