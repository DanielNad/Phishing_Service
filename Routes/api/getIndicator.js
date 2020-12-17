const express = require('express');
const {getId,error} = require('../../Controllers/api/getIndicator');

const router = express.Router();

router.route("/getIndicator")
.get(getId)
router.use(error)

module.exports = router