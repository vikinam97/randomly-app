import express = require("express");
import service = require("./ticket.service");
import responseHandler = require("../../util/reponseHandler");

export function printTable(req: express.Request, res: express.Response) {
    service.printTable({
        ticketId: req.params.ticketId
    }).then( (data: any) => {
        responseHandler.success(res, data, "Game Created Successfully");
    }).catch(error => {
        responseHandler.error(res, error, "Error retrieving Game");
    })
}