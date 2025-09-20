import { useForm} from 'react-hook-form'
import {useAuth} from '../context/AuthContext'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Message, Button, Input, Label } from "../assets/ui";
import { Link } from 'react-router-dom';

function Register() {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate("/")
    } , [isAuthenticated])



    const Onsumit = handleSubmit( async (values) => {
        signup(values);
      
      })

  return (
        <div className="h-[calc(104vh-100px)] flex items-center justify-center bg-zinc-900">
      <Card>
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-3xl font-bold text-sky-500">Register</h1>
        <form onSubmit={handleSubmit(Onsumit)}>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            name="username"
            placeholder="Write your name"
            {...register("username")}
            autoFocus
          />
          {errors.username?.message && (
            <p className="text-red-500">{errors.username?.message}</p>
          )}

          <Label htmlFor="email">Email:</Label>
          <Input
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}

          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}

          <Label htmlFor="confirmPassword">Confirm Password:</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          )}
          <Button>Submit</Button>
        </form>
        <p>
          Already Have an Account?
          <Link className="text-sky-500" to="/login">
            Login
          </Link>
        </p>
      </Card>
    </div>
  )
}

export default Register
