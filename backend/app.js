const express = require('express');
const dotenv = require('dotenv').config({ path: "./.env" });
const port = process.env.PORT || 4000;
const database = require('./database/manageConnection');
const app = express();

//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Connect to the database cluster, then start the server
database.connectToCluster()
.then(() => {
    //Setup routes
    const registerPet = require('./api/registerPet');
    const retrievePet = require('./api/retrievePet');
    app.use('/api', registerPet);
    app.use('/api', retrievePet);

    //Start the server
    const server = app.listen(port, () => {
        console.log(`Server listening on port ${port} for requests from http://localhost:3000, and connected to database cluster`);
    });

    //Shut down the server gracefully
    process.on('SIGINT' || 'SIGTERM', function() {
        database.disconnectFromCluster()
        .then(() => {
            server.close(() => {
                console.log("Closed database connection and server");
            })
        })
    })
}) //Handle any errors that occur during startup
.catch((error) => {
    console.error("An error occured while attempting to start the server: "+error);
});