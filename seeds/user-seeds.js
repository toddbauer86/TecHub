const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "todd",
    email: "todd@email.com",
    password: "password123",
  },
  {
    username: "jack",
    email: "jack@email.com",
    password: "password123",
  },
  {
    username: "blair",
    email: "blair@email.fm",
    password: "password123",
  },
  {
    username: "philip",
    email: "philip@email.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
