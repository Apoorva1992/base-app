import React, { useEffect, useState } from "react";
import TodoRehan from './TodoRehan';

export default function Todos() {
  let [todos, setTodos] = useState([]);
  let todoList;
  useEffect(() => {
    let todoList = localStorage.getItem("todoList");
    if (todoList) {
      todos = JSON.parse(todoList);
      setTodos(todos);
    } else {
      todos = [
        {
          id: 1,
          todoName: "Todo 1",
          category: "home",
          done: false,
        },
        {
          id: 2,
          todoName: "Todo 2",
          category: "office",
          done: false,
        },
        {
          id: 3,
          todoName: "Todo 3",
          category: "car",
          done: false,
        },
      ];
      localStorage.setItem("todoList", JSON.stringify(todos));
      setTodos(todos);
    }
  }, []);

  const updateStatus = (id) => {
    let index;
    let updateTodo = todos.find((todo, idx) => {
      index = idx;
      return todo.id === id;
    });

    let obj;
    if (updateTodo.done) {
      obj = { ...updateTodo, done: false };
    } else {
      obj = { ...updateTodo, done: true };
    }
    let str = localStorage
      .getItem("todoList")
      .replace(JSON.stringify(updateTodo), JSON.stringify(obj));
    setTodos(JSON.parse(str));
    localStorage.setItem("todoList", str);
  };

  const deleteTodo = (id) => {
    let newTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodo);
    localStorage.setItem("todoList", JSON.stringify(newTodo));
  };

  let [todoInput, setTodoInput] = useState("");
  let [category, setCategory] = useState("");

  const addTodo = () => {
    let newTodo = {
      id: todos[todos.length - 1].id + 1,
      todoName: todoInput,
      category: category,
      done: false,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    localStorage.setItem("todoList", JSON.stringify([...todos, newTodo]));
  };

  return (
    <div className="flex items-center justify-center flex-col mt-24 mb-4">
      <div className="bg-slate-400 p-3 pl-20 pr-20 rounded-xl border-4 border-black shadow-inner shadow-black">
        <form className="p-10">
          <label>Todo: </label>
          <input className="rounded-lg ml-2"
            type="text"
            name="inputTodo"
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
          />
          <div className="mt-5">
            <label>Category: </label>
            <select
            className="rounded-lg ml-2"
              name="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="">Select Category</option>
              <option value="home">Home</option>
              <option value="office">Office</option>
              <option value="car">Car</option>
            </select>
          </div>

          <button className="bg-blue-600 pl-6 pr-6 text-cyan-50 ml-20 mt-5 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              addTodo();
            }}
          >
            Add
          </button>
        </form>
        <div >
          {todos.map((todo) => {
            return (
              <div key={todo.id} className="hover:-translate-y-2">
                <TodoRehan
                  todo={todo}
                  deleteTodo={deleteTodo}
                  updateStatus={updateStatus}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
