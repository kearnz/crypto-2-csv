global.fetch = require('node-fetch');

// get ref data and pricing methods
const refdata = require('./calls/refdata'),
    pricing = require('./calls/pricing'),
    cc = require('cryptocompare');

// creates the generic csv's
// refdata.getCoins('coins.csv');
// refdata.getExchanges('exchanges.csv');
// generate daily and hourly for top 5 coins

/*
['BTC','ETH','BCH','XRP','EOS'].map(i => {
    pricing.getPrices(cc.histoDay,i,'USD',{'limit':2000})
    pricing.getPrices(cc.histoHour,i,'USD',{'limit':2000})
})
*/
