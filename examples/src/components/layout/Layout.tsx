import type { ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

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
  const themecontext = useContext(ThemeContext)
 
  const {theme , toggletheme} = themecontext  
  return (
    
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${theme === "dark" ? "navbar-dark bg-dark" : "navbar-dark bg-light"}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold text-white" to="/">
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
                  className={({ isActive }) =>
                    `nav-link text-white ${isActive ? "fw-bold active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/debounce"
                  className={({ isActive }) =>
                    `nav-link text-white ${isActive ? "fw-bold active" : ""}`
                  }
                >
                  Debounce
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/stlifting"
                  className={({ isActive }) =>
                    `nav-link text-white ${isActive ? "fw-bold active" : ""}`
                  }
                >
                  State Lifting
                </NavLink>
              </li>
              <li className="nav-item">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      value={theme}
                      onChange={toggletheme}
                      checked={theme === "dark"}
                      id="switchCheckDefault1"
                      style={{marginTop: '11px'}}
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
