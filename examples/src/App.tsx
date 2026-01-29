import { AppContextProvider } from "./AppContext"
import { AppRoutes } from "./AppRoutes"
import { ThemeProvider } from "./context/ThemeContext"
function App() {
  return (
    
     <>
       <AppContextProvider>
         <AppRoutes/>
       </AppContextProvider>
     
     </>
  )
}

export default App
