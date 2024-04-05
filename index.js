
import express from "express";
import dotenc from "dotenv";
dotenc.config()
// require('dotenv').config();
const app = express()

app.get("/", (req,res)=>{
    res.send("Hello World");
})

app.get("/getsum", (req,res)=>{
    const data = [
        {
            id:1,
            name:"vishnu",
            emai:"vishnutak@gmail.com"
        },
        {
            id:2,
            name:"Yash",
            emai:"vishnutak@gmail.com"
        },
        {
            id:3,
            name:"Nikhil",
            emai:"vishnutak@gmail.com"
        }
    ]

    res.json(data);
})

app.listen(process.env.PORT,()=>{
    console.log(`Namste Duniya  ${process.env.PORT}`);
})