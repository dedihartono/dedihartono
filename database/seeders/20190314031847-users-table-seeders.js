"use strict";

const bcrypt = require("bcryptjs");
const config = require("../../config/keys");

function hashPassword(password) {
  return bcrypt.hashSync(password, config.ROUND_SALT);
}

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert("users", [
      {
        id: "6d730960-1133-11e8-b815-ef31569eb8a0",
        name: "Dedi Hartono",
        email: "dedihartono1993@gmail.com",
        phone_number: "552863",
        gender: "L",
        password: hashPassword("password")
      }
    ]),

  down: queryInterface => queryInterface.bulkDelete("users", null, {})
};
