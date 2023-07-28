
// Auto-generated by AutoPilot on 28-07-2023 at 05:58:29


const express = require("express");
const router = express.Router();

//Generate a random number between min and max
router.get("/random", (req, res) => {
    const min = 1; //Minimum number
    const max = 10; //Maximum number
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min); //Generate random number
    res.status(200).send({ randomNumber }); //Send generated random number
});

module.exports = router;