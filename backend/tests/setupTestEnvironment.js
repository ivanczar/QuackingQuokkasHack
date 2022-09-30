const express = require('express')
const app = express();
const database = require('../database/manageConnection');
let db;
let server;

module.exports = {
    //Setup a test environment (server and database) to use for unit testing
    setup: async function () {
        //Setup database connection
        await database.connectToCluster();

        //Setup routing
        const registerPet = require('../api/registerPet');
        const retrievePet = require('../api/retrievePet');
        app.use('/api', registerPet);
        app.use('/api', retrievePet);
        console.log("Test Environmemt: Route setup complete")

        //Start test server
        server = app.listen(4444, () => {
            console.log(`Test Environment: Unit testing server started on port 4444`);
        });

        //Configure database
        db = database.getDb();
        await db.createCollection("owners");
        await db.createCollection("pets");
        console.log("Test Environment: Database setup complete\n");
    },

    //Return the server object
    getServer: function () {
        return server;
    },

    //Shutdown the test environment (close server & database)
    shutdown: async function () {
        database.disconnectFromCluster()
        .then(() => {
            server.close(() => {
                console.log("Test Environment: Closed database connection and server");
            })
        })
    }
};