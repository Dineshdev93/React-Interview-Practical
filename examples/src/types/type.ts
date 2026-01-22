export interface Todo {
  id: number;
  title: string;
}

export interface Todocontexttype {
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
}
