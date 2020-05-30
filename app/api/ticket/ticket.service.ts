import Ticket = require("./ticket.model");
import UserService = require("../user/user.service");
/**
 * To generate the ticket for game
 * @param {String} gameId id of the game 
 * @author Vignesh R
 */

export function create({
    gameId,
    userName
}: {
    gameId: string,
    userName: string
}) {
    return (async() => {
        let ticketObj: any = await Ticket.default.create({
            gameId
        });
        let userObj: any = await UserService.createUser({
            gameId,
            ticketId: ticketObj._id,
            userName
        })
        return ticketObj;
    })()
}

/**
 * @description To prtin the table as per ticket
 * @param {String} ticketId id of the ticket
 * @author Vignesh R 
 */

export function printTable({
    ticketId
}: {
    ticketId:  string
}) {
    return (async () => {
        try {
            let ticketObj: any = await Ticket.default.findOne({
                _id: ticketId
            }, {
                _id: 1,
                gameId: 1,
                userName: 1
            });
            if(!ticketObj) throw "Invalid Ticket"
            
            return "<table>" +
                "<tr>"+
                "<th>Ticket ID</th>"+
                "<th>Game ID</th>"+
                "<th>User Name</th>"+
                "</tr>"+
                "<tr>"+
                `<td>${ticketObj._id}</td>`+
                `<td>${ticketObj.gameId}</td>`+
                `<td>${ticketObj.userName}</td>`+
                `</tr>`+
            "</table>"            
        } catch (error) {
            return Promise.reject(error)
        }
    })()
}