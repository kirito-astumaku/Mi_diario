import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'



function Profile() {

   const {user ,isAuthenticated,logout} = useAuth()
   const navigate = useNavigate();



  return (
   
    <div className='bg-zinc-900 w-475. h-217 p-5'>
        {isAuthenticated?(
          <div className='w-m h-max border-3 border-sky-700 text-center rounded-lg p-4 text-white text-lg'>
           <h1>User:  {user.username}</h1>
           <h1>Email: {user.email}</h1>
           <h1>password: ********</h1>
           <button 
           onClick={() => {logout(); navigate("/");}  }
           className='bg-sky-700 p-2 mt-3 rounded-lg'
           >
            logout
           </button>
          </div>
          
        ):(
          <h1>User:no</h1>
        )}
    </div>
  )
}

export default Profile
