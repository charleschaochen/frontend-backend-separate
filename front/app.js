var express = require('express');
var app = express();
var proxy = require('express-http-proxy');

var path = require('path');
var favicon = require('serve-favicon');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Use log
var log = require("./logger");
log.use(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Reverse proxy
var oProxyConfig = require('./reverse-proxy-config');
if (oProxyConfig)
    for (var sUrlPattern in oProxyConfig) {
        app.use(sUrlPattern, proxy(oProxyConfig[sUrlPattern]));
    }

// Load routers
var routerConfig = require("./routers-config");
if (routerConfig)
    for (var i = 0; i < routerConfig.length; i++) {
        app.use(routerConfig[i].path, require(routerConfig[i].routerPath));
    }

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
