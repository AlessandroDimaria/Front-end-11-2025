import TodoItem from "../molecules/TodoItem";

function TodoList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) return <p>Nessun task</p>;

  return (
    <ul>
      {tasks.map((t) => (
        <TodoItem
          key={t.id}
          task={t}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;