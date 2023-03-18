const winston = require('winston');
const newrelic = require('newrelic')

const userlogger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'applog.log' }),
    ],
});
module.exports = userlogger;