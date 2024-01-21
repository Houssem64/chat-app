const express = require('express') ;
const mongoose = require('mongoose') ;
const cookieParser = require('cookie-parser')
const dotenv = require ('dotenv') ;
const User = require ('./models/user');
const jwt = require ('jsonwebtoken');
const cors = require ('cors');

const app = express();
app.use(express.json())
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials: true
}))

app.use(cookieParser())
dotenv.config() ;


mongoose.connect(process.env.MONGO_URL)
const jwtSecret = process.env.JWT_SECRET ; 

app.get('/test', (req,res)=> { 
    res.json('test ok');
})

app.get('/profile', (req,res)=> { 
    const {token} = req.cookies;
    if(token) { 
        jwt.verify(token, jwtSecret , {}, (err,userData) => {
            if (err) throw err
            res.json(userData)
        }) 
    }
    else { 
        res.status(401).json('no token')
    }
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
 res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
   });
   

app.post('/register', async (req,res)=> { 
    const {username , password} = req.body; 
  try{ 
    const createdUser =  await User.create({username,password})
    jwt.sign({userId:createdUser._id,username},jwtSecret,{}, (err,token) => { 
        if (err) throw err;
        res.cookie('token', token, {sameSite: 'none', secure: true}).status(201).json({ 
            id: createdUser._id,
           
        })
       
            } )
  }catch(err) { 
     if(err) throw err;
     res.status(500).json('not ok')
  }
 
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);})




