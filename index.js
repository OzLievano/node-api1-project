//import server
const server = require('./api/server');

//create port to listen
const PORT = 4000;

//get the app listening

server.listen(PORT, ()=>{
    console.log(`Server listening on port number:${PORT}`)
})