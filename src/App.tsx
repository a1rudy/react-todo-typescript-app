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
      completed: false,
    }
    setTodos(prev => [newTodo, ...prev]); //prev => предыдущее состояние стейта
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed
        }
      }
      return todo;
    }))
  }

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm('Вы уверены, что хотите удалить элемент?');
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
      </div>
    </>
  );
}

export default App;
