require('./testRegisterPet'); //The test in this file is executed after the test in the required file
const { assert } = require('chai');
const testEnvironment = require('./setupTestEnvironment');
const findPet = require("../database/findPet");
let server;

//Before running this test, get the test server
before(async () => {
    server = testEnvironment.getServer();
});

let petID = "63376ead3e8475b3437f9e36";

//Test the registerPet function (this is the first test)
describe('test pet data retrieval', function() {
    it("Should successfully retrieve the saved pet object", async function() {
        let result = await findPet(petID);
        console.log(result);
        assert.equal(result.owner, "testowner@gmail.com");
        assert.equal(result.name, "ezyPet");
    })
})



