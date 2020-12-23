const express = require("express");
const { getId } = require("../../Controllers/api/getId");

const router = express.Router();

router.route("/").get(getId);

module.exports = router;
