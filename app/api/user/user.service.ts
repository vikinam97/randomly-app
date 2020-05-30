import User = require("./user.model");

/**
 * To craete a user
 * @param {string} gameId id of the game
 * @author Vignesh R
 */

export function createUser({
    gameId,
    ticketId,
    userName
}: {
    gameId: string,
    userName: string
    ticketId: string
}) {
    return User.default.create({
        gameId: gameId,
        userName: userName,
        ticketId: ticketId
    })
}
