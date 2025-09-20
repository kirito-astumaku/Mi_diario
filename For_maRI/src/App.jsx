import { BrowserRouter } from "react-router-dom"
import Rutas from "./Routers/Rutas"
import './app.css';
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
       <Navbar/>  
       <Rutas /> 
  
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  )
}

export default App
