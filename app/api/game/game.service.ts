import Game = require("./game.model");
import TicketService = require("../ticket/ticket.service");
import NumberService = require("../number/number.service");
import mongoose = require("mongoose");


/**
 * @description To create the game and return it
 * @author Vignesh R
 */
export function create() {
    return Game.default.create({})
}

/**
 * @description To generate the ticket for game
 * @param {ObjectId} gameId id of the game
 * @author Vignesh R 
 */

export function createTicket({
    gameId,
    userName
}: {
    gameId: string,
    userName: string
}) {
    return TicketService.create({
        gameId,
        userName
    });
}

/**
 * @description To generate the number for game
 * @param {ObjectId} gameId id of the game
 * @author Vignesh R 
 */

export function createNumber({
    gameId,
}: {
    gameId: string,
}) {
    return NumberService.createNumber({
        gameId
    })
}

/**
 * @description To list the numbers for game
 * @param {ObjectId} gameId id of the game
 * @author Vignesh R 
 */

export function getNumbers({
    gameId,
}: {
    gameId: string,
}) {
    return NumberService.findGameNumbers({
        gameId
    })
}

/**
 * @description To genaret the stat of the game
 * @param {ObjectId} gameId id of the game
 * @author Vignesh R 
 */

export function getStats({
    gameId,
}: {
    gameId: string,
}) {
    return (async () => {
        return Game.default.aggregate([{
            $match: {
                _id: mongoose.Types.ObjectId(gameId)
            }
        }, {
            $lookup: {
                from: "tickets",
                localField: "_id",
                foreignField: "gameId",
                as: "tickets"
            }
        }, {
            $lookup: {
                from: "users",
                localField: "_id",
                foreignField: "gameId",
                as: "users"
            }
        }, {
            $lookup: {
                from: "numbers",
                localField: "_id",
                foreignField: "gameId",
                as: "numbers"
            }
        }])
    })()
}