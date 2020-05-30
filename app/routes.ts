'use strict'

module.exports = function (app: any) {
    app.use("/api", require("./api/game/game.route"));
    app.use("/api", require("./api/ticket/ticket.route"));
}