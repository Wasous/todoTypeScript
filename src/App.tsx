import { useState } from 'react'
import { Todos } from './componets/Todos'
import { type Todo as TodoType, type TodoId, type FilterValue } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './componets/Footer'

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
  },
  {
    id: '4',
    title: 'Rescatar un Frailecillo',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      {
      // Como es TypeScript no te deja pasar un todos que no sea un array.
      }
      <Todos
        onToggleCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}/>
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted= {() => {}}
        filterSelected ={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </div>

  )
}

export default App
