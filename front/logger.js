/**
 * Logger module
 * @type {exports}
 */
var log4js = require('log4js');
log4js.configure({
    appenders: [
        {
            type: 'console',
            category: "console"
        }, //控制台输出
        {
            type: "dateFile",
            filename: 'logs/log.log',
            pattern: "_yyyy-MM-dd",
            alwaysIncludePattern: false,
            category: 'dateFileLog'
        }//日期文件格式
    ],
    replaceConsole: true,   //替换console.log
    levels:{
        dateFileLog: 'INFO'
    }
});

var dateFileLog = log4js.getLogger('dateFileLog');

module.exports.logger = dateFileLog;
module.exports.use = function(app) {
    app.use(log4js.connectLogger(dateFileLog, {level:'info', format:':method :url'}));
}