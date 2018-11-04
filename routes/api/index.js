const router = require("express").Router();
const choreRoutes = require("./chores");

// chores route
router.use("/chores", choreRoutes);

module.exports = router;
