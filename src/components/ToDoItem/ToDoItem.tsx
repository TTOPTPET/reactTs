import { useState } from "react";
import { ToDoItemProps } from "../../models/TodoTypes";
import { Wrapper, Title } from "../../styles/ToDoItem.styles";

const ToDoItem: React.FC<ToDoItemProps> = ({ data }) => {
  const { title, completed, id } = data;

  const [editedCompleted, setEditedCompleted] = useState(completed);

  const handleChange = () => {
    localStorage.setItem(
      String(id),
      JSON.stringify({ ...data, completed: !completed })
    );
    setEditedCompleted((editedCompleted) => !editedCompleted);
  };

  return (
    <Wrapper>
      <Title $completed={editedCompleted}>{title}</Title>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default ToDoItem;
