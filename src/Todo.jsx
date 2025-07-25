import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoTask = () => {
      if (!input.trim()) return; // Prevent adding empty or whitespace-only task

     
    const text = {
      id: todoList.length + 1,
      text: input,
      complete: false,
    };

    setTodoList((prev) => [...prev, text]);
    setInput("");
  };

  const todoCompleted = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            complete: !t.complete,
          };
        } else {
          return t;
        }
      })
    );
  };

  const deleteItem = (id) => {
    const filList = todoList.filter((t) => t.id !== id);
    setTodoList(filList);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md ">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">📋Todo List</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Enter Todo"
          />
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            onClick={() => addTodoTask()}
          >
            Add
          </button>
        </div>

        <div className="flex flex-col gap-3 items-start">
            {todoList.length == 0 && <p className="text-black/40 self-center italic">No tasks yet. Start adding!</p> }
          {todoList.map((todo) => (
            <li
              key={todo.id}
              className="w-full flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.complete}
                  className="mr-2"
                  onChange={() => todoCompleted(todo?.id)}
                />
                <span
                  className={`text-gray-800 ${
                    todo.complete ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteItem(todo?.id)}
                className="text-sm bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
