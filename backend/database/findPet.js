const database = require('./manageConnection');
const collections = require('./collections');
const { ObjectID } = require('bson');

//Register a new owner, returning the result of the operation
async function findPet(petID) {
    let foundOwner = await database.getDb().collection(collections.pets).findOne({_id: ObjectID(petID)});
    return foundOwner;
}

module.exports = findPet;