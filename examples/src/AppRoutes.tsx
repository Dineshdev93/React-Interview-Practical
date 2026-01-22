import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { Home } from "./components/Home";
import { Debounce } from "./components/Debounce";
import { Parent } from "./components/statelifting/Parent";
import { ConditionalRendering } from "./components/conditionalRendering/ConditionalRendering";
import { Apifetcher } from "./components/Apifetcher/Apifetcher";
import { ToDo } from "./components/ToDolist/ToDo";
import TodoContext from "./context/Todocontext";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout Wrapper */}
      <Route element={<Layout />}>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/debounce" element={<Debounce />} />
        <Route path="/stlifting" element={<Parent />} />
        <Route
          path="/conditionalRendering"
          element={<ConditionalRendering />}
        />
        <Route path="/apifetcher" element={<Apifetcher />} />
        <Route
          path="/todo"
          element={
            <TodoContext>
              <ToDo />
            </TodoContext>
          }
        />

        {/* Optional */}
        {/* <Route path="/about" element={<About />} /> */}
      </Route>
    </Routes>
  );
};
