import { useState } from 'react'
import "./App.css";

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
          <div key="1" className="todo">
            <div key="2" className="content">
              <p>{todo.text}</p>
              <p>({todo.categoy})</p>
              <div>
                <button>Completar</button>
                <button>x</button>
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>;
}

export default App
