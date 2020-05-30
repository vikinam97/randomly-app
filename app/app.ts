import express = require('express');
require('dotenv').config({
    path: __dirname + "/./../app/config/.env"
});
require("./config/dataSource")({
    mongo: {
        uri: process.env.MONGO_URI,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
})
const app: express.Application = express();

require("./routes")(app);

app.get("/", (req, res) => {
    res.end("Done");
    console.log(process.env.NAME);
})

app.listen(process.env.PORT, () => {
    console.log("Server started at " + process.env.PORT);
})