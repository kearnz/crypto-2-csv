global.fetch = require('node-fetch');

const refdata = require('./calls/refdata');

// creates the genaric csv's
refdata.getCoins();
refdata.getExchanges();