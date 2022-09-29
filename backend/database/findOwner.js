const database = require('./manageConnection');
const collections = require('./collections');

//Register a new owner, returning the result of the operation
async function findOwner(ownerEmail) {
    let foundOwner = await database.getDb().collection(collections.owners).findOne({email: ownerEmail});
    return foundOwner;
}

module.exports = findOwner;