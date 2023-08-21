// se puede usar type o interface, buscar diferencia (es algo sobre que el type no se puede modificar)
export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type ListOfTodos = Todo[]
