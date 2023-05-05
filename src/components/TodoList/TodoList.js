import React from "react";

function TodoList({tasks}) {
  return (
    <div>
      <div className="list-group container p-0">
        <h2 className="ps-3 pb-2 m-0">Список задач:</h2>
        <ul className="p-0">
          {
            tasks.map((item) => {
              return (
                <li key={item.id} className="list-group-item row d-flex m-0">
                  <div className="col-md-10 col-12 p-2">
                    {item.title}
                  </div>
                  <div className="col-md-2 d-flex justify-content-around align-items-center">
                    <i className="bi bi-trash3 p-2"></i>
                    <i className="bi bi-pencil p-2"></i>
                    <i className="bi bi-check p-2"></i>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
