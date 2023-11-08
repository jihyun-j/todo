import React from "react";

function TodoList({ list, clickDelete, clickDoneCancel, children }) {
  return (
    <>
      <h2>{children}</h2>
      {list.map((todo) => {
        return (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.detail}</p>
            <button onClick={() => clickDoneCancel(todo.id)}>완료</button>
            <button onClick={() => clickDelete(todo.id)}>삭제</button>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
