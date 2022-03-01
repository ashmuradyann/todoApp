import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'Learn React',
      isCompleted: false
    },
    {
      id: Math.random(),
      text: 'Learn Node',
      isCompleted: false
    }
  ]);

  return (
    <div className="App">
      <h1>To Do App</h1>
      <div>
      <TodoForm onAdd={text => {
        setTodos([
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          },
          ...todos
        ])
      }} />
      <TodoList todos={todos} onDelete={todo => {
          setTodos(todos.filter(t => t.id !== todo.id))
      }} onChange={newTodo => {
        setTodos(todos.map(todo => {
          if(todo.id === newTodo.id){
            return newTodo;
          }
          return todo;
        }));
      }} />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter(todo => !todo.isCompleted))
      }} />
      </div>
    </div>
  );
}

export default App;
