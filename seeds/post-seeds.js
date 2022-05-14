const { Post } = require("../models");

const postdata = [
  {
    post_title: "How do I use github?",
    post_text: "test",

    user_id: 1,
  },
  {
    post_title: "Does anyone know a good place to learn javascript?",
    post_text: "test",
    user_id: 4,
  },
  {
    post_title: "Where can I get an affordable video card?",
    post_text: "test",
    user_id: 3,
  },
  {
    post_title: "Do you want to buy my crypto?",
    post_text: "test",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
