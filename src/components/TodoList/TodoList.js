import React, {useState} from "react";

function TodoList({tasks, setTask}) {

  // console.log(tasks);

  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  function deleteTask(id) {
    const newTasks = [...tasks].filter((task) => task.id !== id);
    setTask(newTasks);
  }

  function statusTask(id) {
    console.log('Закрыть')
    const newTasks = [...tasks].filter((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    setTask(newTasks);
  }

  function editTask(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTask(id) {
    let newTask = [...tasks].map(task => {
      if (task.id === id) {
        task.title = value;
      }
      return task
    })
    setTask(newTask);
    setEdit(null);
  }

  return (
    <div className="list-group container p-0">
      <h2 className="ps-3 pb-2 m-0">Список задач:</h2>
      <ul className="p-0">
        {
          tasks.map((task) => {
            return (
              <li key={task.id} className="list-group-item row d-flex m-0 ">
                {
                  edit === task.id ?
                    <div className="col-md-10 col-12 p-2">
                      <input className="form-control" type="text" value={value}
                             onChange={(e) => setValue(e.target.value)}/>
                    </div>
                    :
                    <div className="col-md-10 col-12 p-2 text-wrap">
                      {task.title}
                    </div>
                }

                {
                  edit === task.id ?
                    <div className="col-md-2 col p-2">
                      <button
                        type="submit"
                        title="Сохранить измения"
                        className="btn btn-dark btn-wrapper-end w-100"
                        onClick={() => saveTask(task.id)}
                      >
                        Сохранить
                      </button>
                    </div>
                    :
                    <div className="col-md-2 d-flex justify-content-around align-items-center">
                      <i role="button" title="Удалить задачу" className="bi bi-trash3 p-2"
                         onClick={() => deleteTask(task.id)}></i>
                      <i role="button" title="Редактировать задачу" className="bi bi-pencil p-2"
                         onClick={() => editTask(task.id, task.title)}></i>
                      <i role="button" title="Закрыть/Открыть задачу" className="bi bi-check p-2"
                         onClick={() => statusTask(task.id)}></i>
                    </div>
                }
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default TodoList;
