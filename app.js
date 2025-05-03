const path = require('path');
const express = require('express')
const app = express()
const port = 4444;
const mongoose = require('mongoose');


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,`public`)));
app.use(express.json());

const signup_schema =  new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:String

});

const credentials = mongoose.model('credentials',signup_schema);

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
})
app.post('/signup',(req,res)=>{
    let {name} = req.body;
    let {email} = req.body;
    let {password} = req.body;

    const New_credentials = new credentials({
        name: name,
        email: email,
        password:password
    });
    New_credentials.save()
        .then(()=>{
            res.send({
                msg: "added data"
            });
        })
        .catch(err => console.error(err));
})
app.get('/signup_success',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','signup_page.html'))
})
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','signup.html'))
})

mongoose.connect('mongodb://localhost:27017/login_credentials')
    .then(()=>{
        console.log('mongodb connected');
        app.listen(port, () => {
            console.log(`http://localhost:` + port +`/login`);
        });
    })
