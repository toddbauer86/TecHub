const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 4,
    comment_text: "Have you checked indeed.com?",
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "Just here for the comments",
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "edabit.com is dope",
  },
  {
    user_id: 3,
    post_id: 3,
    comment_text: "linkedin",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "lol no",
  },
  {
    user_id: 3,
    post_id: 4,
    comment_text: "w3 schools!",
  },
  {
    user_id: 2,
    post_id: 3,
    comment_text: "have you tried a flea market?",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "absolutely not",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
