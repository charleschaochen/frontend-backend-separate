var express = require("express");
var router = express.Router();
var log = require("../logger").logger;

router.get("/", function (req, res, next) {
    log.info("[sayHello][The request is being processed in router sayHello]");
    res.render('sayHello', {name: 'Jade in Expres'});
});

module.exports = router;