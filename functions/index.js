const functions = require("firebase-functions");
const express = require("express");
const app = express();
const friendRouter = require("./routes/friend");

app.use(express.json());
app.use("/friend", friendRouter);

exports.app = functions.https.onRequest(app);
