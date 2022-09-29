const database = require('./manageConnection');
const collections = require('./collections');

//Register a new owner, returning the result of the operation
async function registerOwner(petDetails) {
    let registered = await database.getDb().collection(collections.pets).insertOne(petDetails);
    return registered;
}

module.exports = registerOwner;
    