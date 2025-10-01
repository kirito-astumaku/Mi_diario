import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useAuth } from "../context/AuthContext";



function Navbar() {
const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);

const {isAuthenticated, user} = useAuth()

  return (
   <div>
    {isAuthenticated?(
      <nav className='flex justify-between p-4 items-center border-bbg-white dark:bg-linear-to-r from-cyan-500 to-blue-500 nav'>
      <h1 className='text-3xl logo'>Mi diario</h1>
      <ul className='hidden  md:flex gap-6'>
        <Link to='/'><li className="">Pagina Principal</li></Link>
        <Link to='/Videojuegos'><li>Videojuegos</li></Link>
        <Link to='/Peliculas'><li>Series y Peliculas</li></Link>
        <Link to='/Musicas'><li>Musica</li></Link>
        <Link to='/Comida'><li className='hover:text-teal-700'>Comida</li></Link>
        <Link to='/MiniJuegos'><li>Minijuegos</li></Link>
        <Link to='/Comida'><li>Comida</li></Link>
        <Link to='/Galeria'><li>Galeria</li></Link>
        <Link to='/profile'><li>{user.username}</li></Link>

      </ul>
      {/* Hamburger or Close Icon */}
      <div className=' md:hidden z-10' onClick={handleClick}>
        {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={25}/>}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <Link to='/'><li className='hover:text-teal-700'>Pagina Principal</li></Link>
        <Link to='/Videojuegos'><li className='hover:text-teal-700'>Videojuegos</li></Link>
        <Link to='/Peliculas'><li className='hover:text-teal-700'>Series y Peliculas</li></Link>
        <Link to='/Musicas'><li className='hover:text-teal-700'>Musica</li></Link>
        <Link to='/Comida'><li className='hover:text-teal-700'>Comida</li></Link>
         <Link to='/Galeria'><li className='hover:text-teal-700'>Galeria</li></Link>
        <Link to='/MiniJuegos'><li className='hover:text-teal-700'>Minijuegos</li></Link>
        <Link to='/profile'><li className='hover:text-teal-700'>{user.username}</li></Link>
      </ul>
    </nav>
    ):(
    
    <nav className='flex justify-between p-4 items-center border-bbg-white dark:bg-linear-to-r from-cyan-500 to-blue-500 nav'>
      <h1 className='text-3xl logo'>Mi diario</h1>
      <ul className='hidden  md:flex gap-6'>
        <Link to='/'><li className="">Pagina Principal</li></Link>
        <Link to='/Videojuegos'><li>Videojuegos</li></Link>
        <Link to='/Peliculas'><li>Series y Peliculas</li></Link>
        <Link to='/Musicas'><li>Musica</li></Link>
        <Link to='/Galeria'><li>Galeria</li></Link>
        <Link to='/MiniJuegos'><li>Minijuegos</li></Link>
        <Link to='/Comida'><li>Comida</li></Link>
        <Link to='/login'><li>Login</li></Link>
         <Link to='/register'><li>Register</li></Link>               
      </ul>
      {/* Hamburger or Close Icon */}
      <div className=' md:hidden z-10' onClick={handleClick}>
        {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={25}/>}
      </div>
      {/* Mobile Menu */}
      <ul
        className={`${
          nav
            ? 'text-white opacity-100 transform translate-x-0'
            : 'opacity-0 transform -translate-y-full'
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNav(false)}
      >
        <Link to='/'><li className='hover:text-teal-700'>Pagina Principal</li></Link>
        <Link to='/Videojuegos'><li className='hover:text-teal-700'>Videojuegos</li></Link>
        <Link to='/Peliculas'><li className='hover:text-teal-700'>Series y Peliculas</li></Link>
        <Link to='/Musicas'><li className='hover:text-teal-700'>Musica</li></Link>
        <Link to='/MiniJuegos'><li className='hover:text-teal-700'>Minijuegos</li></Link>
        <Link to='/Comida'><li className='hover:text-teal-700'>Comida</li></Link>
        <Link to='/login'><li className='hover:text-teal-700'>Login</li></Link>
        <Link to='/register'><li className='hover:text-teal-700'>Register</li></Link>
        
      </ul>
    </nav>)}
   </div>
  )
}

export default Navbar