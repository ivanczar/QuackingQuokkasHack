const { assert } = require('chai');
const testEnvironment = require('./setupTestEnvironment');
const registerOwner = require("../database/registerOwner");
let server;

//Before running any tests, setup the test environment
before(async function() {
    this.timeout(10000); 
    await testEnvironment.setup();
    server = testEnvironment.getServer();
});

//Test data
let ownerTest = {
    "email": "testowner@gmail.com",
    "phone": "021345678"
}

//Test the registerPet function (this is the first test)
describe('test owner registration', function() {
    it("Should successfully register a new owner in the database (acknowledged = true)", async function() {
        let result = await registerOwner(ownerTest);
        console.log(result);
        assert.equal(result.acknowledged, true);
    })
})