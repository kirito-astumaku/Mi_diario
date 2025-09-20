import {Router} from 'express'
import {login, register, logout, profile,verifyToken,USERSS} from '../Controllers/auth.controller.js'
import { authRequired } from '../Middlewares/validateToken.js'
import { validateSchema } from "../Middlewares/validator.middlewre.js";
import { registerSchema, loginSchema } from "../Schemas/auth.schema.js";




const router = Router();

router.post('/register', validateSchema(registerSchema), register)

router.post('/login' ,validateSchema(loginSchema) ,login)

router.post('/logout' , verifyToken, logout)

router.get('/profile' , authRequired, profile)

router.get('/verify' , verifyToken)

router.get("/user", verifyToken, USERSS)


export default router
