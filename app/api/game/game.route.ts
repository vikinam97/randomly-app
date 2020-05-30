import express = require("express");
import controller = require("./game.controller");

const router = express.Router();

router.post("/game/create", 
    controller.create
)

router.post("/game/:gameId/ticket/:userName/generate",
    controller.createTicket
)

router.post("/game/:gameId/number/random",
    controller.createNumber
)

router.get("/game/:gameId/numbers",
    controller.getNumbers
)

router.get("/game/:gameId/stats",
    controller.getStats
)

module.exports = router;