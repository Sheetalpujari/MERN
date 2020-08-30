const express = require("express");

const app = express();

// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const port = 8000
app.get('/login',(req,res)=> res.send("hello this is login"))
app.get("/admin",(req,res)=>{
    return res.send("You are in login route")
})



app.get('/',(req,res)=> res.send("hello this is home page"))
app.get('/signup',(req,res)=> res.send("hello this is signup"))

app.listen(port,()=>console.log("listening on port 8000......."))