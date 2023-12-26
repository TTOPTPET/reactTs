import { useState } from "react";
import { v4 as uuid } from "uuid";
import { AddToDoProps } from "../../models/TodoTypes";
import { Button, Input, Wrapper } from "../../styles/AddToDoForm.styles";

const AddToDoForm: React.FC<AddToDoProps> = ({ getTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = () => {
    const id = uuid();
    localStorage.setItem(id, JSON.stringify({ title, completed: false, id }));
    setTitle("");
    getTodos();
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Новая запись"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={addTodo}>Создать</Button>
    </Wrapper>
  );
};

export default AddToDoForm;
