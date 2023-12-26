import { ToDoItemProps } from "../../models/TodoTypes";
import { Wrapper, Title } from "../../styles/ToDoItem.styles";

const ToDoItem: React.FC<ToDoItemProps> = ({ data }) => {
  const { title, completed, id } = data;

  const handleChange = () => {
    localStorage.setItem(
      String(id),
      JSON.stringify({ ...data, completed: !completed })
    );
  };

  return (
    <Wrapper>
      <Title className="todoTitle" style={{ color: "#000", fontSize: "14px" }}>
        {title}
      </Title>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default ToDoItem;
