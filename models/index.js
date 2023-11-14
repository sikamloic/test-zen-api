const mongoose = require("mongoose");


const db = {};
db.mongoose = mongoose;
db.User = require("./user")

module.exports = db;