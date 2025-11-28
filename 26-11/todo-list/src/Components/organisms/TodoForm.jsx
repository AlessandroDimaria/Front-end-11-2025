import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

 function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input value={text} onChange={setText} placeholder="Scrivi un task..." />
      <Button type="submit">Aggiungi</Button>
    </form>
  );
}
export default TodoForm;