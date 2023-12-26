import ToDoItem from "../ToDoItem/ToDoItem";
import { ToDoListProps } from "../../models/TodoTypes";
import { Wrapper } from "../../styles/ToDoList.styles";

const ToDoList: React.FC<ToDoListProps> = ({ todos }) => {
  return (
    <Wrapper>
      {todos.map((item) => {
        return <ToDoItem data={item} key={item.id} />;
      })}
    </Wrapper>
  );
};

export default ToDoList;
