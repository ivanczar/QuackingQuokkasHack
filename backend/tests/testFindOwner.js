require('./testRegisterOwner'); //The test in this file is executed after the test in the required file
const { assert } = require('chai');
const testEnvironment = require('./setupTestEnvironment');
const findOwner = require("../database/findOwner");
let server;

//Before running this test, get the test server
before(async () => {
    server = testEnvironment.getServer();
});

//Test data
let ownerEmail = "testowner@gmail.com";

//Test the registerPet function (this is the first test)
describe('test owner data retrieval', function() {
    it("Should successfully retrieve the saved owner object", async function() {
        let result = await findOwner(ownerEmail);
        console.log(result);
        assert.equal(result.email, "testowner@gmail.com");
        assert.equal(result.phone, "021345678");
    })
})



