import { type TodoId, type ListOfTodos } from '../types'
import { Todo } from './Todo'

// Estas son las props que vamos a pasarle para typar un Functional Component (React.FC)
interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
}

// Con React.FC podemos pasar las props entre <...>
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                      completed = {todo.completed}
                      onRemoveTodo={onRemoveTodo}
                      />
                </li>
            ))}
        </ul>
  )
}
