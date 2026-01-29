import type { ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useDispatchContext, useStatecontetx } from "../AppContext";
import { setThemeview } from "../AppContext/action";

// ---------------------------
// Types
// ---------------------------
interface LayoutProps {
  children?: ReactNode;
}

// ---------------------------
// Component
// ---------------------------
const Layout = ({ children }: LayoutProps) => {
  const { themeState } = useStatecontetx();
  const dispatch = useDispatchContext();

  console.log(themeState.themeview);

  const handletoggle = (theme: React.ChangeEvent<HTMLInputElement>) => {
    const value = theme.target.value;
    const newthemevalue = value === "dark" ? "light" : "dark";
    dispatch(setThemeview(newthemevalue));
  };

  // const { theme, toggletheme } = themecontext;
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg ${themeState.themeview === "dark" ? "navbar-dark bg-dark" : "navbar-dark bg-light"}`}
      >
        <div className="container-fluid">
          <NavLink
            className={`${themeState.themeview === "dark" ? "navbar-brand fw-bold text-white" : "navbar-brand fw-bold text-dark"}`}
            to="/"
          >
            MyApp
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={`${themeState.themeview === "dark" ? "nav-link text-white fw-bold" : "nav-link text-dark fw-bold"}`}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/debounce"
                  className={`${themeState.themeview === "dark" ? "nav-link text-white fw-bold" : "nav-link text-dark fw-bold"}`}
                >
                  Debounce
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/stlifting"
                  className={`${themeState.themeview === "dark" ? "nav-link text-white fw-bold" : "nav-link text-dark fw-bold"}`}
                >
                  State Lifting
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/conditionalRendering"}
                  className={`${themeState.themeview === "dark" ? "nav-link text-white fw-bold" : "nav-link text-dark fw-bold"}`}
                >
                  conditional Rendering
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/apifetcher"}
                  className={`${themeState.themeview === "dark" ? "nav-link text-white fw-bold" : "nav-link text-dark fw-bold"}`}
                >
                  Api Fetcher
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/todo"}
                  className={`${themeState.themeview === "dark" ? "nav-link text-white fw-bold" : "nav-link text-dark fw-bold"}`}
                >
                  Todo
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    value={themeState.themeview}
                    onChange={handletoggle}
                    checked={themeState.themeview === "dark"}
                    id="switchCheckDefault1"
                    style={{ marginTop: "11px" }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container flex-grow-1 py-4">
        {children || <Outlet />}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <div className="container">
          <small>
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
