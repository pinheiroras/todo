import React from 'react'

const Todo = ({todo}) => {
  return (
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
  )
}

export default Todo