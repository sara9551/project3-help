// require mongoose
const mongoose = require("mongoose");
// require the schema/database
const db = require("../models");

// empties the chores list and inserts the ones below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactchorelist"
);

const choreSeed = [
  {
    chore: "Work",
    date: new Date(Date.now()),
    description:
    ""
  },
  {
    chore: "School",
    date: new Date(Date.now()),
    description:
    ""
   },
  {
    chore: "University",
    date: new Date(Date.now()),
    description:
    ""
  },
  {
    chore: "Party",
    date: new Date(Date.now()),
    description:
    ""
  },
  {
    chore: "Dinner",
    date: new Date(Date.now()),
    description:
    ""
  },
  {
    chore: "Music Classes",
    date: new Date(Date.now()),
    description:
    ""
  },
  {
    chore: "Homework",
    date: new Date(Date.now()),
    description:
    ""
  },
  {
    chore: "Meeting",
    date: new Date(Date.now()),
    description:
    ""
  },
  {
    chore: "Tutoring",
    date: new Date(Date.now()),
    description:
    ""
  },
  {
    chore: "Birthday",
    date: new Date(Date.now()),
    description:
    ""
  }
];