"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: "",
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(126),
        defaultValue: "",
        allowNull: false,
        unique: true
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: ""
      },
      gender: {
        type: Sequelize.STRING,
        defaultValue: "",
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      created_at: {
        type: Sequelize.DATE(),
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")
      },
      updated_at: {
        type: Sequelize.DATE(),
        allowNull: false,
        defaultValue: Sequelize.fn("NOW")
      }
    }),
  down: queryInterface => queryInterface.dropTable("users")
};
