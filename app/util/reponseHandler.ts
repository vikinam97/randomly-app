import express = require("express");

export function success(resObject: express.Response, data: any, msg: string) {
    resObject.status(200).json({
        error: false,
        message: msg,
        data: data
    })
}

export function error(resObject: express.Response, error: any, msg: string) {
    resObject.status(500).json({
        error: true,
        message: msg,
        data: error
    })
}