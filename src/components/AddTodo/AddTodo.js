import React from "react";

function AddTodo() {
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
            ></input>
          </div>
          <div className="col-md-2 col p-2">
            <button
              type="submit"
              className="btn btn-dark btn-wrapper-end w-100"
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
