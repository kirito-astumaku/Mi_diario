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
import SI_NO from '../Juegos/SI_NO'
import Regalo from '../Juegos/Regalo'
import Rompecabezas from '../Juegos/Rompecabezas'


function Rutas() {

   const {isAuthenticated} = useAuth()

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>,
        <Route path="/register" element={<Register/>}/>,
        <Route path="/SI_NO" element={<SI_NO/>}/>,
        <Route path="/Regalo" element={<Regalo/>}/>,
        <Route path="/Rompecabezas" element={<Rompecabezas/>}/>,

        <Route element={<Protector_rutas/>}/>
        <Route path="/Videojuegos" element={isAuthenticated ? <Games/>: <Navigate to='/login' />}/>,
        <Route path="/Peliculas" element={isAuthenticated ? <Movies/>: <Navigate to='/login' />}/>,
        <Route path="/Musicas" element={isAuthenticated ? <Musica/>: <Navigate to='/login' />}/>,
        <Route path="/Galeria" element={isAuthenticated ? <Photos/>: <Navigate to='/login' />}/>,
        <Route path="/Comida" element={isAuthenticated ? <Comida/>: <Navigate to='/login' />}/>,
        <Route path="/Detalles" element={isAuthenticated ? <Detalles/> : <Navigate to='/login' />}/>,
        <Route path="/MiniJuegos" element={isAuthenticated ? <Minegame/> : <Navigate to='/login'/>}/>,  

        <Route path="/profile" element={isAuthenticated ?<Profile/> :<Navigate to='/login'/>}/>, 
        
      </Routes>
    </div>
  )
}

export default Rutas
