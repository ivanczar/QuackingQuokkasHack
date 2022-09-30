const express = require('express');
const router = express.Router();
const findOwner = require('../database/findOwner');
const findPet = require('../database/findPet');

//Pet & owner information retrieval endpoint
router.get('/retrievePet/:petID', async(req, res) => {
    try {
        let data = {owner: {}, pet: {}};
        //Retrieve the pet data, and verify the pet was found
        let pet = await findPet(req.params.petID);
        if (!pet) { 
            res.status(404).send("The pet could not be found");
        } else { //Pet found
            data.pet = pet;
            //Retrieve information on the pet's owner, and verify the owner was found
            let owner = await findOwner(pet.owner);
            if (!owner) {
                res.status(404).send("The owner of the pet could not be found");
            } else { //Owner found
                data.owner = owner;
                res.status(200).json(data);
            }
        }
    } catch(err) { //Handle errors
        console.error(err);
        res.status(500).send("A server error occured while attempting to retrieve pet and owner data")
    }
});

module.exports = router;