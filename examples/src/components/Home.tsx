import React, { useReducer } from "react";

// ---------------------------
// Types
// ---------------------------
interface CounterState {
  past: number[];
  present: number;
  future: number[];
}

// ---------------------------
// Action Types
// ---------------------------
const INCREMENT = "INCREMENT" as const;
const DECREMENT = "DECREMENT" as const;
const UNDO = "UNDO" as const;
const REDO = "REDO" as const;
const RESET = "RESET" as const;

type CounterAction =
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof UNDO }
  | { type: typeof REDO }
  | { type: typeof RESET };

const initialState: CounterState = {
  past: [],
  present: 0,
  future: [],
};

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { past, present, future } = state;

  switch (action.type) {
    case INCREMENT:
      return {
        past: [...past, present],
        present: present + 1,
        future: [],
      };

    case DECREMENT:
      return {
        past: [...past, present],
        present: present - 1,
        future: [],
      };

    case UNDO:
      if (past.length === 0) return state;
      const previous = past[past.length - 1];
      return {
        past: past.slice(0, past.length - 1),
        present: previous,
        future: [present, ...future],
      };

    case REDO:
      if (future.length === 0) return state;
      const next = future[0];
      return {
        past: [...past, present],
        present: next,
        future: future.slice(1),
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};


export const Home = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const { present, past, future } = state;

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-75">
      <div className="card shadow p-4 text-center" style={{ width: "22rem" }}>
        <h3 className="mb-3">Counter App</h3>

        <h1 className="display-4 fw-bold mb-4">{present}</h1>

        <div className="d-flex justify-content-between gap-3">
          <button
            className="btn btn-danger w-100"
            onClick={() => dispatch({ type: DECREMENT })}
          >
            Decrease
          </button>

          <button
            className="btn btn-success w-100"
            onClick={() => dispatch({ type: INCREMENT })}
          >
            Increase
          </button>

          <button
            className="btn btn-info w-100"
            onClick={() => dispatch({ type: RESET })}
          >
            Reset
          </button>
        </div>

        <div className="d-flex justify-content-center gap-2 mt-3">
          <button
            className="btn btn-secondary"
            disabled={past.length === 0}
            onClick={() => dispatch({ type: UNDO })}
          >
            Undo
          </button>

          <button
            className="btn btn-primary"
            disabled={future.length === 0}
            onClick={() => dispatch({ type: REDO })}
          >
            Redo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
