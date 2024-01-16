const express = require('express') ;
const mongoose = require('mongoose') ;
const app = express();
const dotenv = require ('dotenv') ;
const User = require ('./models/user')
const jwt = require ('jsonwebtoken')

dotenv.config() ;
mongoose.connect(process.env.MONGO_URL)
const jwtSecret = process.env.JWT_SECRET ; 

app.get('/test', (req,res)=> { 
    res.json('test ok');
})

app.listen(4000) ; 

app.post('/register', async (req,res)=> { 
    const {username , password} = req.body; 
   const createdUser =  await User.create({username,password})
    jwt.sign({userId:createdUser._id},jwtSecret, (err, token) => { 
        if (err) throw err;
        res.cookie('token', token).status(201).json('ok')
            } )
})




