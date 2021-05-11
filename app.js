// bring in and require express to our application
const express = require("express");

// create an instance of express (an express object) and store it in a variable, so we can access to other express methods
const app = express();

// create a port variable- the address where the client and server communicate
const PORT = 3000;

//Get route at localhost:3000/
app.get("/", (req, res) => {
    res.send("here's my first application");
});

//start listening for rquests on port 3000 
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
