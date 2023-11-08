import React from "react";

function Input({ title, detail, onTitle, onDetail, onSubmit }) {
  return (
    <>
      <form action="">
        <input type="text" value={title} onChange={onTitle} />
        <input type="text" value={detail} onChange={onDetail} />
        <button onClick={onSubmit}>할일추가</button>
      </form>
    </>
  );
}

export default Input;
