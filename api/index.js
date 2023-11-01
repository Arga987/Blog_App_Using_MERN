const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/User')
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const salt = bcrypt.genSaltSync(10);
const secret = 'aawdawdawfhfafg'
app.use(cors({credentials: true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://blog:rKHFKc428D90AWn6@cluster0.qqspmsh.mongodb.net/?retryWrites=true&w=majority');


app.post('/register', async (req,res) => {
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({username, 
        password: bcrypt.hashSync(password, salt),});
        res.json(userDoc);
    }
    catch(e) {
        console.log(e)
        res.status(400).json(e);
    }
    
    
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.findOne({ username });
        if (!userDoc) {
            // User not found
            return res.status(400).json('User not found');
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            // Passwords match, generate token and send it in response
            jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({
                    id:userDoc._id,
                    username,
                });
            });
        } else {
            // Passwords do not match
            res.status(400).json('Wrong credentials');
        }
    } catch (error) {
        // Handle other errors, such as database connection issues
        console.error('Error during login:', error);
        res.status(500).json('Internal Server Error');
    }
});

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info) => {
        if (err) throw err;
        res.json(info);
    })
})

app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
})

app.listen(4000);

//
//