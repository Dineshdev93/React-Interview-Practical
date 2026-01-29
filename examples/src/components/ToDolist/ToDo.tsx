import { useState } from "react";
import { useTodoContext } from "../../context/Todocontext";
import type { Todo } from "../../types/type";

export const ToDo = () => {
  const contextCalues = useTodoContext();
  const {list , setList} = contextCalues ; 
  const [inputval, setInputVal] = useState<string>("");

  const deletefun = (id: number) => {  
    const result = contextCalues?.list.filter((resid) => resid.id !== id);
    setList(result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  const Addtodo = () => {
      const newTodo : Todo = {
          id : Date.now() , 
          title : inputval.trim()
      }
      setList((prev)=> [...prev , newTodo])
      setInputVal("")
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-center mb-4">ToDo List</h4>

                {/* Search Input */}

                <div className="d-flex justify-content-between align-items-center gap-3">
                  <div className="mb-3">
                    <input
                      type="text"
                      value={inputval}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Search tasks..."
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-danger mt-3"
                      onClick={Addtodo}
                    >
                      Add
                    </button>
                  </div>
                </div>
                {/* Todo List */}
                <ul className="list-group">
                  <li className="list-group-item d-flex flex-column">
                    {list.map((item, key) => {
                      return (
                        <div className="d-flex justify-content-between gap-2 align-items-center">
                          <span>{item.title}</span>
                          <button
                            className="btn btn-sm btn-danger mt-3"
                            onClick={() => deletefun(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      );
                    })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
