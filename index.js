global.fetch = require('node-fetch');

const refdata = require('./calls/refdata')
    cc = require('cryptocompare'),
    JsonCsv = require('json2csv').Parser;
    fs = require('fs'),
    _ = require('underscore');

refdata.getCoins();