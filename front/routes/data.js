/**
 * Created by ccn1069 on 2015/6/26.
 */

var express = require("express");
var router = express.Router();

router.get("/", function (req,res, next) {
    res.send({retcode: 0, msg: "response"});
});

module.exports = router;