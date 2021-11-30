import React from 'react';
import './App.css';
import { NavBar } from './component/NavBar';
import { TodoForm } from './component/TodoForm';
import { TodoList } from './component/TodoList';
import { ITodo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = { 
      title,
      id: Date.now(),
      complited: false,
    }
    setTodos(prev => [newTodo, ...prev]) //prev => предыдущее состояние стейта
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} />
      </div>
    </>
  );
}

export default App;
