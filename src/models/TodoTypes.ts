export type ToDo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
};

export type ToDoFiltered = {
  id: number;
  title: string;
  completed: boolean;
};

export type ToDoListProps = {
  todos: ToDoFiltered[];
};

export type ToDoItemProps = {
  data: ToDoFiltered;
};

export type RequestButtonProps = {
  todos: ToDoFiltered[];
  fetchTodos: React.MouseEventHandler<HTMLButtonElement>;
};

export type AddToDoProps = {
  getTodos: () => void;
};
