import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFitlerChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFitlerChange,
  onClearCompleted
}) => {
  return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{activeCount}</strong> tareas pendientes
            </span>

            <Filters
                filterSelected ={filterSelected}
                onFilterChange={handleFitlerChange}
            />
        </footer>
  )
}
