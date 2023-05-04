import React from "react";

function TodoList() {
  return (
    <div>
      <ul>
        <li>
          <span>item1</span>
          <button>Удалить</button>
          <button>Редактировать</button>
          <button>Изменить статус</button>
        </li>
        <li>
          <span>item2</span>
          <button>Удалить</button>
          <button>Редактировать</button>
          <button>Изменить статус</button>
        </li>
        <li>
          <span>item3</span>
          <button>Удалить</button>
          <button>Редактировать</button>
          <button>Изменить статус</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
