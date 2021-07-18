import express from 'express';  
import routes from './routes/api.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import cors from 'cors';

const result = dotenv.config(); //loads data in .env file into process.env object.

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.SERVER_HOST || "127.0.0.1";

/*
    The code below this comment doesn't need '/' to be specified as this 
    is the base path by default.
*/

app.use(cors());
app.use(bodyParser.json()); //Ensures the request body object can be parsed, otherwise results in undefined.
app.use('/', routes); //parameters: basePath & endPoints

//We should put the least specific routes at the end, as the 1st route that matches is invoked.
app.use('/', (req, res) => {
    return res.send("Welcome to the ToDo back end");
});
/*
    Connecting to database
*/
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log(`Successfully connected to database: ${process.env.MONGO_URI}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Unable to connect to database @ ${process.env.MONGO_URI} \n ${err}`);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    });

}

process.on('uncaughtException', () => {
    app.close();
})

app.listen(port, host, () => {
    console.log(`Server is running successfully @ ${host}:${port}`)
});

