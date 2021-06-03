import express from 'express';
import config from "../config/config.js";

const app = express();

const port = config.serverPort || 5000;
const host = config.serverHost || "127.0.0.1";

/*
    The code below this comment doesn't need '/' to be specified as this 
    is the base path by default.
*/
app.use('/', (req, res) => {
    return res.send("Welcome to the to do back end");
});

app.use('/api', routes); //parameters: basePath & endPoints

app.listen(port, host, () => {
    console.log(`Server is running successfully @ ${host}:${port}`)
});