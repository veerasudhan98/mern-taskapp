const express = require("express");
const path = require("path");

require("./db/mongoose");

const userRouter = require("./router/users-route");
const taskRouter = require("./router/task-route");
const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//server static asset if in production
if (process.env.NODE_ENV === "production") {
    //set static foler
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        // res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
        res.sendFile(
            path.resolve(__dirname, "../client", "build", "index.html")
        );
    });
}

module.exports = app;
