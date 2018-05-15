global.fetch = require('node-fetch');

const refdata = require('./calls/refdata');

// creates the generic csv's
refdata.getCoins();
refdata.getExchanges();