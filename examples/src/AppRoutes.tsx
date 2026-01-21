import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Home } from "./components/Home";
import { Debounce } from "./components/Debounce";
import { Parent } from "./components/statelifting/Parent";
export const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout Wrapper */}
      <Route element={<Layout />}>
        {/* Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/debounce" element={<Debounce />} />
        <Route path="/stlifting" element={<Parent/>}/>
        {/* Optional */}
        {/* <Route path="/about" element={<About />} /> */}
      </Route>
    </Routes>
  );
};
