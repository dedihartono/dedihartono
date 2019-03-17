const express = require("express");
const bodyParser = require("body-parser");
const welcome = require("./routes/api/welcome");
const users = require("./routes/api/users");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use("/", welcome);
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
module.exports = app;
