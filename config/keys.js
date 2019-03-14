if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}

const config = {};
module.exports = config.ROUND_SALT = 8;
