import express from 'express';
import { connectDb } from './config/db.js';
import { signup } from './controllers/user.controller.js';
const app  =  express()

app.use(express.json())

connectDb();

app.get('/',(req,res) => {
    res.send("HIHIHIHI")
})


app.post('/api/test/', async (req, res) =>{
    await signup(req,res).then((response) =>{
        res.send(response)
    })
}) 

export const startServer = () =>{
    app.listen(3000, ()=>{
        console.log("server started")
    })
}

