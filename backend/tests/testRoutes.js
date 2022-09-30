require('./testFindPet'); //The test in this file is executed after the test in the required file
const chai = require('chai');
const { expect } = require('chai');
const testEnvironment = require('./setupTestEnvironment');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
let server;

//Before running this test, get the test server
before(async () => {
    server = testEnvironment.getServer();
});

//Test data
let testData = {
	"owner": {
		"email": "sampleowner23@gmail.com",
	    "phone": "0226192271"
	},
    "pet": {
        "name": "My Pet"
    }
};
let petID = "63376ead3e8475b3437f9e36"; //Use petID from previous tests

//Test the /api/register (owner & pet registration) endpoint/route
describe('test register pet endpoint (route)', function () {
    it('Should return 201, with the pet ID', async function () {
        chai
            .request(server)
            .post('/api/register')
            .send(testData)
            .end((err, res) => {
                expect(res.body).to.be.not.equal(null);
                console.log("Saved Pet ID (register endpoint test): "+res.body);
                petID = res.body; //needed for retrieve test
                expect(err).to.be.equal(null);
                expect(res.status).to.be.equal(201);
            });
    })
})

//Test the /api/retrievePet/:id (owner & pet info retrieval) endpoint/route
describe('test retrieve pet (and owner) endpoint (route)', function () {
    it('Should return 200, with the pet and owner details', async function () {
        chai
            .request(server)
            .get('/api/retrievePet/'+petID)
            .end((err, res) => {
                expect(res.body).to.be.not.equal(null);
                console.log("Retrieved Data (retrieve endpoint test):")
                console.log(res.body);
                expect(err).to.be.equal(null);
                expect(res.status).to.be.equal(200);
            });
    })
})




