import User from '../Models/user.model.js'
import bcrypt from 'bcryptjs'
import {createdAccessToken} from '../libs/jwt.js'
import { TOKEN_SECRET } from '../config.js'
import jwt from 'jsonwebtoken';



export const register = async (req, res ) => {
    
    const {email, password, username} = req.body
       
  try {

     const userFound = await User.findOne({email});
     if (userFound) return res.status(400).json(["the email already"]);
        
       const passwordHash = await bcrypt.hash(password, 10)

      const newUser = new User({
          username,
          email,
          password: passwordHash,

    })
    
    const userSaved = await newUser.save();
    const token = await createdAccessToken({id: userSaved._id})
    res.cookie('token', token);
    res.json({
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
        createdAt : userSaved.createdAt,
        updatedAt: userSaved.updatedAt
    }) 

  } catch (error) {
    res.status(500).json({message: error.message})
  }

    
}

export const login = async (req, res ) => {
    
    const {email, password} = req.body
       
  try {

       const userFound = await User.findOne({email})
       if(!userFound) return res.status(400).json({message: "user not found"})
        
       const isMatch = await bcrypt.compare(password, userFound.password);
       
       if(!isMatch) return res.status(400).json({massage: "incorrect password"}) 


    const token = await createdAccessToken({id: userFound._id})

    res.cookie('token', token);
    res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt : userFound.createdAt,
        updatedAt: userFound.updatedAt
    }) 

  } catch (error) {
    res.status(500).json({message: error.message})
  }

    
}


export const logout = async (req, res) => {
  res.cookie("token", "", {
    
    expires: new Date(0),
  });
  return res.sendStatus(200);
};


export const profile = async (req, res) => {
  try {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(401).json({ message: "Token inválido" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el perfil" });
  }
};


export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};



export const USERSS = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select('-password'); // excluye la contraseña
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
};

