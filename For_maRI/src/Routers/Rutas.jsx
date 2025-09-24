import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import Minegame from '../Pages/Minegame'
import Movies from '../Pages/Movies'
import Photos from '../Pages/Photos'
import Detalles from '../Pages/Detalles'
import Games from '../Pages/Games'
import Musica from '../Pages/Musica'
import Login from '../components/Login'
import Register from '../components/register'
import Tasks from '../components/Tasks'
import Add_tasks from '../components/Add_tasks'
import Profile from '../components/Profile'
import Protector_rutas from './Protector_rutas'
import { useAuth } from '../context/AuthContext'
import Comida from '../Pages/Comida'


function Rutas() {

   const {isAuthenticated} = useAuth()

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Videojuegos" element={<Games/>}/>,
        <Route path="/Peliculas" element={<Movies/>}/>,
        <Route path="/Musicas" element={<Musica/>}/>,
        <Route path="/Galeria" element={<Photos/>}/>,
        <Route path="/Comida" element={<Comida/>}/>,
        <Route path="/login" element={<Login/>}/>,
        <Route path="/register" element={<Register/>}/>,


        <Route element={<Protector_rutas/>}/>
        <Route path="/Detalles" element={isAuthenticated ? <Detalles/> : <Navigate to='/login' />}/>,
        <Route path="/MiniJuegos" element={isAuthenticated ? <Minegame/> : <Navigate to='/login'/>}/>,  

        <Route path="/profile" element={isAuthenticated ?<Profile/> :<Navigate to='/login'/>}/>, 
        
      </Routes>
    </div>
  )
}

export default Rutas
