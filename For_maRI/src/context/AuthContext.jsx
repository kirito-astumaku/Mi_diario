import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest} from "../Api/auth"
import  Cookies  from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;

};


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
     const [loading, setLoading] = useState(true);
    
    const signup = async (user) =>{
       try {
         const res = await registerRequest(user)
        console.log(res)
        setUser(res.data)
        setIsAuthenticated(true)

       } catch (error) {
        console.log(error.response.data);
        setErrors(error.response.data);        
       }
    };

    const signin = async (user) => {
      
      try {
        
        const res = await loginRequest(user)
        setIsAuthenticated(true)
        console.log(res)

      }catch (error) {
        if(Array.isArray(error.response.data)){
          return setErrors(error.response.data)
        }
        setErrors([error.response.data.message])
        
      }
    }


  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);


  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);



    const logout = () =>{
      Cookies.remove("token")
      setUser(null)
      setIsAuthenticated(false)
    }

    return(
        <AuthContext.Provider value={{signup,signin,user,isAuthenticated,loading,errors,logout}}>
            {children}
        </AuthContext.Provider>
    )
}