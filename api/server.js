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

  server.delete("/api/users/:id", async(req,res)=>{
      const {id}= req.params;
      try {
        const user = await User.delete(id);
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: "unknown ID" });
        }
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
  })

  server.put('/api/users/:id', async (req,res)=> {
    const {id} = req.params;
    const changes = req.body;

    if(!user.name || !dpg.weight){
        res.status(400).json({message:'must include weight and name'})
    } else {
        try{
            const updatedUser = await user.update(id,changes);
            if(updatedUser){
                res.status(200).json(updateUser);
            }else{
                res.status(404).json({message:"unkown id"});
            }
        }catch(err){
            res.status(500).json({error:err.message})
        }
    }
})

module.exports = server;