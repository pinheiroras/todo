import React from 'react'

const TodoForm = () => {
  return (
    <div className='todo-form'>
      <h2>Criar tarefa</h2>
      <form>
        <input type="text" placeholder='Digite o titulo'/>
        <select>
          <option value="">Selecione</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Salvar</button>
      </form>
    </div>
  )
}

export default TodoForm