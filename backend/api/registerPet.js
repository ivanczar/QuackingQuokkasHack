const express = require('express');
const router = express.Router();
const registerOwner = require('../database/registerOwner');
const findOwner = require('../database/findOwner');
const registerPet = require('../database/registerPet');

router.use(express.json());

//Pet registration endpoint
router.post('/register', async(req, res) => {
    try {
        let ownerId;
        
        //Check whether the owner is already registered
        let owner = await findOwner(req.body.owner.email);
        
        //If the owner isn't registered, register the owner
        if (!owner) {
            owner = await registerOwner(req.body.owner);   
            if (!owner.acknowledged) { //If owner registration failed, return 500 error
                res.status(500).send("Failed to register owner");
            } else { //If owner registration succeeded, record the ID
                ownerId = owner.insertedId;
            }
        } else { //If the owner was found, record the ID
            ownerId = owner._id;
        }

        //Add the owner ID to the pet object
        req.body.pet.owner = ownerId;
        
        //Register the pet. Return the pet ID if successful, or 500 error if not
        let registeredPet = await registerPet(req.body.pet);
        if (registeredPet.acknowledged) {
            res.status(201).send(registeredPet.insertedId);
        } else {
            res.status(500).send("Failed to register pet");
        }
    } catch(err) { //Handle errors
        console.error(err);
        res.status(500).send("A server error occured while attempting to register your pet")
    }
});

module.exports = router;