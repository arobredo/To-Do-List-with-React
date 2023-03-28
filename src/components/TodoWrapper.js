import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //para crear id's únicos
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import TodoSearch from "./TodoSearch";

uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    /*Prevent writing blank tasks */
    if(todo){
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
    }
  };

  /*mark a task as completed */
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) =>{
    setTodos(todos.map(todo =>
        todo.id===id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  };

  const searchTask = (value) => {
    const searchList=[];
   /*  console.log(value);
    console.log(todos); */
    for(let i=0; i < todos.length; i++){
        if(todos[i].task === value){
            searchList.push(todos[i]);
        }
    };
    if(searchList.length !== 0){
        setTodos(searchList);
    }
  };
  return (
    <div className="TodoWrapper">
      <h1>Things to be Done!</h1>
      <TodoSearch searchTask={searchTask} />
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
