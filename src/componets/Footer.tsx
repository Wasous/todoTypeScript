export const Footer: React.FC<Props> = ({
  activeCount,
  todos,
  onClearCompleted
}) => {
  return (
        <footer>
            <span>
                <strong>{todos.length}</strong> tareas pendientes
            </span>

            <Filters
                filterSelected ={}
                onFilterChange={() => {}}
            />
        </footer>
  )
}
