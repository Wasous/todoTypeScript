import { useState } from 'react'
import { Todos } from './componets/Todos'
import { type TodoId } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Crear una aplicación',
    completed: false
  },
  {
    id: '2',
    title: 'Darle de comer a Jassi',
    completed: true
  },
  {
    id: '3',
    title: 'Rescatar un Capybara',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      {
      // Como es TypeScript no te deja pasar un todos que no sea un array.
      }
    <Todos
      onRemoveTodo={handleRemove}
      todos={todos}/>
    </div>

  )
}

export default App
