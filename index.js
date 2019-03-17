const express = require("express");
const welcome = require("./routes/api/welcome");
const users = require("./routes/api/users");

const app = express();

app.use("/", welcome);
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
