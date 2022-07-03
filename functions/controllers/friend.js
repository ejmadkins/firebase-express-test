"use strict";

const Friend = require("../models/friend");
const { db } = require("../db");

exports.create = async (req, res) => {
  try {
    const data = req.body;
    await db.collection("friends").doc().set(data);
    res.send("Record saved successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.read = async (_, res) => {
  try {
    const snapshot = await db.collection("friends");
    const data = await snapshot.get();
    const friendsArray = [];
    if (data.empty) {
      res.status(404).send("No friends record found");
    } else {
      data.forEach((doc) => {
        const friend = new Friend(
          doc.id,
          doc.data().firstName,
          doc.data().lastName
        );
        friendsArray.push(friend);
      });
      res.send(friendsArray);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
