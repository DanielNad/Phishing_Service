const express = require("express");
const { getUrlList } = require("../../Controllers/api/getUrlList");

const router = express.Router();

router.route("/").get(getUrlList);

module.exports = router;
