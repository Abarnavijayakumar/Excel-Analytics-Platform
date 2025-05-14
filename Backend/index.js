const express = require ('express'); // for server creating

const server = express(); // creating server
const port =5000; // port number
server.get('/', (req,res) => {
    res.send('server is running');
}) // for testing
server.listen(port,()=>{
    console.log(`server is running on port:${port}`);

})