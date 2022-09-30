require('./testFindOwner'); //The test in this file is executed after the test in the required file
const { assert } = require('chai');
const testEnvironment = require('./setupTestEnvironment');
const registerPet = require("../database/registerPet");
const { ObjectId } = require('mongodb');
let server;

//Before running this test, get the test server
before(async () => {
    server = testEnvironment.getServer();
});

//Test data
let petTest = {
    "_id": ObjectId("63376ead3e8475b3437f9e36"),
    "name": "ezyPet",
    "owner": "testowner@gmail.com"
}

//Test the registerPet function (this is the first test)
describe('test pet registration', function() {
    it("Should successfully register a new pet in the database (acknowledged = true)", async function() {
        let result = await registerPet(petTest);
        assert.equal(result.acknowledged, true);
    })
})

 