require("dotenv").config();
const express = require("express");
const { notFoundHandler, applicationErrorHandler } = require("./error");

const app = express();

app.use(require("./middleware"));
app.use(require("./routes"));
const myDb = require("../db/database");
myDb.create("user 1", 10);
myDb.create("user 2", 10);
myDb.create("user 3", 10);
myDb.create("user 4", 10);
myDb.create("user 5", 10);
myDb.create("user 6", 10);
myDb.createBulk("user 7", 12, 3);
console.log("Tickets: ", myDb.find());
console.log("Winners: ", myDb.draw(3));

// Error handler
app.use(notFoundHandler);
app.use(applicationErrorHandler);

module.exports = app;
