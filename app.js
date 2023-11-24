const express = require('express');
const fs = require("fs");
const path = require("path");

const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, './public')));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('./login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('./registro', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

