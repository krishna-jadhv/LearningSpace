require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello krishna!')
})

app.get('/jjk',(req, res)=>{
    res.send("Your jordons are fake")
})

app.get('/DN',(req, res)=>{
    // res.send("<h1>Hello world</h1>")
    res.send('<h2>Do subscribe to my youtube channel</h2>')

    
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port} & port 2 is ${process.env.PORT}`)
})