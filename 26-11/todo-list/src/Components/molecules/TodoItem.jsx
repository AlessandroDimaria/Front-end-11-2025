import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
      <small> ({task.createdAt})</small>
      <Button onClick={() => onDelete(task.id)}>X</Button>
    </li>
  );
}

export default TodoItem;