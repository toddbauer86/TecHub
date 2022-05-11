const { Post } = require("../models");

const postdata = [
  {
    title: "How do I use github?",

    user_id: 1,
  },
  {
    title: "Does anyone know a good place to learn javascript?",

    user_id: 4,
  },
  {
    title: "Where can I get an affordable video card?",

    user_id: 3,
  },
  {
    title: "Do you want to buy my crypto?",

    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
