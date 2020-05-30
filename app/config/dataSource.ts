'use strict';

module.exports = function (config: any) {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    // Connect to database
    mongoose.connect(config.mongo.uri, config.mongo.options,function() {
        console.log("Database Connection Successfull");
    });
    mongoose.connection.on('error', function (err: any) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    });
}