// se puede usar type o interface, buscar diferencia (es algo sobre que el type no se puede modificar)
export interface Todo {
  id: string
  title: string
  completed: boolean
}
// Exportamos directamente los type para si en el futuro cambia el tipo de algún dato no hace falta cambiarlo en toda la aplicación, solo lo cambiamos aquí porque importamos directamente los type.
export type TodoTitle = Pick<Todo, 'title'>
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]

// Cualquier key del objeto TODO_FILTERS
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
