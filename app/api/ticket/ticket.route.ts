import express = require("express");
import controller = require("./ticket.controller");
const router = express.Router();

router.get("/ticket/:ticketId", 
    controller.printTable
)

module.exports = router;