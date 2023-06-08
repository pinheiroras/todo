import React from 'react'

const Todo = ({todo, removeTodo}) => {
  return (
    <div key="1" className="todo">
      <div key="2" className="content">
        <p>{todo.text}</p>
        <p>({todo.categoy})</p>
        <div>
          <button className='complete'>Completar</button>
          <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
        </div>
      </div>
  </div>
  )
}

export default Todo