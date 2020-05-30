import Number = require("./number.model");

/**
 * To craete a Number
 * @param {string} gameId id of the game
 * @author Vignesh R
 */

export function createNumber({
    gameId
}: {
    gameId: string
}) {
    return Number.default.create({
        gameId: gameId,
        number: genRandom()
    })
}

/**
 * @description To pick random number
 * @author Vignesh R
 */

function genRandom() {
    return new Date().getTime()
}

/**
 * To list all the number for the game'
 * @param {string} gameId id of the game
 * @author Vignesh R
 */

export function findGameNumbers({
    gameId
}: {
    gameId: string
}) {
    return Number.default.find({
        gameId
    }, {
        number: 1
    });
}