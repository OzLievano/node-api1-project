//import server
const server = require('./api/server.js');

//create port to listen
const PORT = 5000;

//get the app listening

server.listen(PORT, ()=>{
    console.log(`Server listening on port number:${PORT}`)
})