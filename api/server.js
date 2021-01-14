const User = require("./userData.js");
const express = require("express");
const server = express();
server.use(express.json());

// GET all users
server.get("/api/users", async(req,res)=>{
    const users =  await User.findAll();
    try{
        res.status(200).json(users);
    } catch(err) {
        res.status(500).json({error:err.message});
    }
})

// get specific user
server.get("/api/users/:id", async(req,res)=>{
    const {id} = req.params;
    const user =  await User.findById(id);
    try{
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json({error:err.message});
    }
})

//POST users
server.post("/api/users", async (req, res) => {
    const user = req.body;
    try {
      const newlyCreatedUser = await User.create(user);
      console.log(newlyCreatedUser);
      res.status(200).json(newlyCreatedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = server;