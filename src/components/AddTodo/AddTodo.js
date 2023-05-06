import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function AddTodo({tasks, setTask}) {

  const [value, setValue] = useState("");

  // console.log(value);

  function addTask(e) {
    e.preventDefault();
    setTask(
      [...tasks, {
        id: uuidv4(),
        title: value,
        status: false
      } ]
    );
    setValue("");
  }

  return (
    <div className="container py-5 px-4">
      <form>
        <div className="row">
          <div className="col-md-10 col-12 p-2">
            <input
              type="text"
              className="form-control w-100"
              placeholder="Введите задачу"
              autoFocus={true}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
          </div>
          <div className="col-md-2 col p-2">
            <button
              type="submit"
              title="Добавить задачу"
              className="btn btn-dark btn-wrapper-end w-100"
              onClick={addTask}
            >
              Добавить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
