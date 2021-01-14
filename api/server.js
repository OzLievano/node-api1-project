const User = require("./userCalls.js");
const express = require("express");
const server = express();
server.use(express.json());

// GET all users
server.get("api/users", async(req,res)=>{
    try{
        res.status(200).json(users);
    } catch(err) {
        res.status(500).json({error:err.message});
    }
})