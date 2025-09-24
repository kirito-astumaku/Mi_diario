import { useForm} from 'react-hook-form'
import { Card, Message, Button, Input, Label } from "../assets/ui";
import { Link} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  const {signin, isAuthenticated ,errors: signinErrors} = useAuth()
  const Onsumit = handleSubmit((data) =>{ signin(data)})
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate("/")
    } , [isAuthenticated])

  return (
    <div className="h-[calc(100vh-100px)] flex items-center bg-zinc-900 justify-center">
     <Card>
        {signinErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-2xl font-bold text-sky-500">Login</h1>

        <form onSubmit={handleSubmit(Onsumit)}>
          <Label htmlFor="email">Email:</Label>
          <Input
            label="Write your email"
            type="email"
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email", { required: true })}
          />
          <p>{errors.email?.message}</p>

          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Write your password"
            {...register("password", { required: true, minLength: 6 })}
          />
          <p>{errors.password?.message}</p>

          <Button>Login</Button>
        </form>

        <p className="flex gap-x-2 justify-between">
          Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
        </p>
      </Card>
      </div>
  )
}

export default Login
