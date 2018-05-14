const jcsv = require("../wrapper").jsonToCsv,
    _ = require('underscore'),
    cc = require('cryptocompare');


let getCoins = async (csvName,wrp=jcsv) => {
    try {
        let coinCall = await cc.coinList();
        let coinData = _.map(_.pairs(coinCall['Data']), _.last);
        wrp(coinData, 'coins.csv')    
    }
    catch(e) {
        console.log(e); 
    }
}

let getExchanges = async (csvName,wrp=jcsv) => {
    try {
        let exchCall = await cc.exchangeList();
        let exchData = _.map(_.keys(exchCall), p => {
            let o = {};
            o['exchange'] = p
            o['coin'] = _.keys(exchCall[p]).length ? _.keys(exchCall[p]) : "";
            return o;
        });
        wrp(exchData, 'exchanges.csv', 'coin')
    }
    catch(e) {
        console.log(e); 
    }
}

module.exports.getCoins = getCoins;
module.exports.getExchanges = getExchanges;
