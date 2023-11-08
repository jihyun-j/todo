import React from "react";

function TodoList({ list, clickDelete, clickDoneCancel, children }) {
  return (
    <>
      <h2>{children}</h2>
      {list.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{ border: "1px solid black", margin: "10px" }}>
            <p>할일: {todo.title}</p>
            <p>내용: {todo.detail}</p>
            <button onClick={() => clickDoneCancel(todo.id)}>
              {todo.isDone ? "취소" : "완료"}
            </button>
            <button onClick={() => clickDelete(todo.id)}>삭제</button>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
