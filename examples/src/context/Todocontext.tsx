import React, { createContext, useContext, useState } from "react";
import type { Todo, Todocontexttype } from "../types/type";


export const TodoContextProvider = createContext<Todocontexttype | undefined>(undefined);

const data: Todo[] = [
    { id: 1, title: "React" },
    {id : 2 , title : "javascript"},
     { id: 3, title: "vanila" },
    {id : 4, title : "java"},
     { id: 5, title: "node" },
    {id : 6 , title : "vue"}
];

const TodoContext = ({ children }: { children: React.ReactNode }) => {
  const [list, setList] = useState<Todo[]>(data);

  return (
    <TodoContextProvider.Provider value={{ list, setList }}>
      {children}
    </TodoContextProvider.Provider>
  );
};
export default TodoContext;

export const useTodoContext = () => {
     const context = useContext(TodoContextProvider)

     if(!context){
         throw new Error("used in cmps")
     }
     return context
}

