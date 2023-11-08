import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoLis] = useState([]);
  const [doneTodoList, setDoneTodoLis] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDetail, setTodoDetail] = useState("");

  const onChangeTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  const onChangeDetail = (e) => {
    setTodoDetail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
      detail: todoDetail,
      isDone: false,
    };

    setTodoLis([...todoList, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    const deletedTodoFromTodoList = todoList.filter((dTodo) => dTodo.id !== id);
    const deletedTodoFromDoneList = doneTodoList.filter(
      (dTodo) => dTodo.id !== id
    );
    setTodoLis(deletedTodoFromTodoList);
    setDoneTodoLis(deletedTodoFromDoneList);
  };

  const doneTodoHandler = (id) => {
    const newDoneTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
      detail: todoDetail,
      isDone: true,
    };

    const doneTodo = todoList.filter((dTodo) => dTodo.id !== id);

    setDoneTodoLis([...doneTodoList, newDoneTodo]);
    setTodoLis(doneTodo);
  };

  const cancelHandler = (id) => {
    // 완료 리스트에서 제거...
    const cancelTodo = doneTodoList.filter((dTodo) => dTodo.id !== id);
    setDoneTodoLis(cancelTodo);

    // 할일 리스트 업데이트
    const newCancelTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
      detail: todoDetail,
      isDone: false,
    };
    setTodoLis([...todoList, newCancelTodo]);
  };

  return (
    <div>
      <Header />
      <main>
        <Input
          title={todoTitle}
          detail={todoDetail}
          onTitle={onChangeTitle}
          onDetail={onChangeDetail}
          onSubmit={submitHandler}></Input>

        <TodoList
          list={todoList}
          clickDelete={deleteTodoHandler}
          clickDoneCancel={doneTodoHandler}>
          Working...
        </TodoList>

        <TodoList
          list={doneTodoList}
          clickDelete={deleteTodoHandler}
          clickDoneCancel={cancelHandler}>
          Done...
        </TodoList>
      </main>
      <Footer />
    </div>
  );
}

export default App;
