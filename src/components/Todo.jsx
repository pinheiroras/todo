import React from 'react'

const Todo = ({todo, removeTodo, completedTodo}) => {
  return (
    <div key="1" className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : '' }}>
      <div key="2" className="content">
        <p>{todo.text}</p>
        <p>({todo.category})</p>
        <div>
          <button className='complete' onClick={() => completedTodo(todo.id)} >Completar</button>
          <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
        </div>
      </div>
  </div>
  )
}

export default Todo