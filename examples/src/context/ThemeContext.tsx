
/*
  ✅ 3. TOGGLE THEME (CONTEXT API)
❓ Question:

Why did you use Context for theme instead of props?

💬 Comment:

Because the theme is a global UI state that multiple components like navbar, footer, and pages need. Using Context avoids prop drilling and provides a centralized state.

❓ Question:

What is the role of a Context Provider?

💬 Comment:

The Provider supplies the context value to all components in its component tree, allowing them to consume the state using useContext.

❓ Question:

How does your theme toggle work internally?

💬 Comment:

The toggle function updates the theme state in the provider, which triggers a re-render of all consuming components. 
I use Bootstrap’s data-bs-theme attribute to switch between light and dark UI styles.
*/

import { createContext, useState } from "react";
interface ThemeContextType {
     theme : string
     toggletheme:()=> void
}

export const ThemeContext  = createContext<ThemeContextType>({
  theme: "light",
  toggletheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, settheme] = useState("dark");

  const toggletheme = () => {
    settheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggletheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
