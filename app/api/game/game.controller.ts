import express = require("express");
import service = require("./game.service");
import responseHandler = require("../../util/reponseHandler");

export function create(req: express.Request, res: express.Response) {
    service.create().then( (data: any) => {
        responseHandler.success(res, {
            gameId: data._id
        }, "Game Created Successfully");
    }).catch(error => {
        responseHandler.error(res, error, "Error creating Game");
    })
}

export function createTicket(req: express.Request, res: express.Response) {
    service.createTicket({
        gameId: req.params.gameId,
        userName: req.params.userName
    }).then( (data: any) => {
        responseHandler.success(res, {
            ticketId: data._id
        }, "Ticket Created Successfully");
    }).catch(error => {
        responseHandler.error(res, error, "Error creating Number");
    })
}

export function createNumber(req: express.Request, res: express.Response) {
    service.createNumber({
        gameId: req.params.gameId
    }).then( (data: any) => {
        responseHandler.success(res, {
            number: data.number
        }, "Number Created Successfully");
    }).catch(error => {
        responseHandler.error(res, error, "Error creating Number");
    })
}

export function getNumbers(req: express.Request, res: express.Response) {
    service.getNumbers({
        gameId: req.params.gameId
    }).then( (data: any) => {
        responseHandler.success(res, {
            numbers: data.map((n: any) => n.number)
        }, "Number Created Successfully");
    }).catch(error => {
        responseHandler.error(res, error, "Error creating Number");
    })
}

export function getStats(req: express.Request, res: express.Response) {
    service.getStats({
        gameId: req.params.gameId
    }).then( (data: any) => {
        responseHandler.success(res, {
            numbers: data[0].numbers.map((n: any) => n.number),
            userCount: data[0].users.length,
            ticketCount: data[0].tickets.length
        }, "Game Stats retrieved Successfully");
    }).catch(error => {
        console.log(error);
        responseHandler.error(res, error, "Error retrieving Game Stats");
    })
}