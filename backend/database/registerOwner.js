const database = require('./manageConnection');
const collections = require('./collections');

//Register a new owner, returning the result of the operation
async function registerOwner(ownerDetails) {
    let registered = await database.getDb().collection(collections.owners).insertOne(ownerDetails);
    return registered;
}

module.exports = registerOwner;
    