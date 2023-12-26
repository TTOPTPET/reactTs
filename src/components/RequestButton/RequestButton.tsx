import { RequestButtonProps } from "../../models/TodoTypes";
import { Button } from "../../styles/RequestButton.styles";

const RequestButton: React.FC<RequestButtonProps> = ({ fetchTodos, todos }) => {
  return (
    <>
      <Button onClick={fetchTodos} disabled={todos && todos.length > 190}>
        Загрузить
      </Button>
    </>
  );
};

export default RequestButton;
