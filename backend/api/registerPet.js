const express = require("express");
const router = express.Router();
const registerOwner = require("../database/registerOwner");
const findOwner = require("../database/findOwner");
const registerPet = require("../database/registerPet");

router.use(express.json());

//Pet & owner (if needed) registration endpoint
router.post("/register", async (req, res) => {
  try {
    //Check whether the owner is already registered
    let owner = await findOwner(req.body.owner.email);

    //If the owner isn't registered, register the owner
    if (!owner) {
      owner = await registerOwner(req.body.owner);
      if (!owner.acknowledged) {
        //If owner registration failed, return 500 error
        res.status(500).send("Failed to register owner");
      } else {
        //If owner registration succeeded, retrieve their details
        owner = await findOwner(req.body.owner.email);
      }
    }

    //Add the owner's email to the pet object
    req.body.pet.owner = owner.email;

    //Register the pet. Return the pet ID if successful, or 500 error if not
    let registeredPet = await registerPet(req.body.pet);
    if (registeredPet.acknowledged) {
      res.status(201).send(registeredPet.insertedId);
    } else {
      res.status(500).send("Failed to register pet");
    }
  } catch (err) {
    //Handle errors
    console.error(err);
    res.status(500).send("An error occured during registration");
  }
});

module.exports = router;
