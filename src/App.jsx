import { useState } from 'react'
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";


function App() {
  const  [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criando minha lista de tarefas - todo",
      categoy: "Trabalho",
      isComleted: false,
    },
    {
      id: 2,
      text: "Voltar para minhas caminhadas matinais",
      categoy: "Pessoal",
      isComleted: false,
    },    
  ])
  
  return <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}/>
        ))}
      </div>
      <TodoForm/>
  </div>;
}

export default App
