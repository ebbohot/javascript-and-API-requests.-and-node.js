const chalk = require('chalk') 
const express = require('express')
const app=express()
const port=3000
//===========END REQUIRES==============

app.use(express.static('public'))

//===========START url to home,about,contact,404==============
app.get('/' ,(req,res)=>res.sendFile(__dirname +'/public/index.html'))
app.get('/home' ,(req,res)=>res.sendFile(__dirname +'/public/index.html'))
app.get('/about' ,(req,res)=>res.sendFile(__dirname +'/public/about.html'))
app.get('/contact' ,(req,res)=>res.sendFile(__dirname +'/public/contact.html'))
app.get('/404',(req,res)=>res.sendFile (__dirname +'/public/404/help.html'))
app.get('/help',(req,res)=>res.sendFile (__dirname +'/public/404/help.html'))

//===========STENDART url to home,about,contact,404==============


app.listen(port,()=>console.log(chalk.green('server is working from port '+port+'!')))



