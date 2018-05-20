/* REF DATA API CALLS */

const jcsv = require("../wrappers/fileparser").jsonToCsv,
    _ = require("underscore"),
    cc = require("cryptocompare");

// get all available coins tracked by cc and store in flattened csv
const getCoins = async (csvName, wrp=jcsv) => {
    try {
        let coinCall = await cc.coinList();
        let coinData = _.map(_.pairs(coinCall["Data"]), _.last);
        await wrp(coinData, csvName)    
    }
    catch(e) {
        console.log(e); 
    }
}

// get all exchanges, as well as the coins that trade on them
const getExchanges = async (csvName, explode, wrp=jcsv) => {
    try {
        let exchCall = await cc.exchangeList();
        let exchData = _.map(_.keys(exchCall), p => {
            let o = {};
            o["exchange"] = p
            o["coin"] = _.keys(exchCall[p]).length ? _.keys(exchCall[p]) : "";
            return o;
        });
        if (typeof explode === 'undefined') { 
            explode = false
        }
        await wrp(exchData, csvName, explode)
    }
    catch(e) {
        console.log(e); 
    }
}

// exports
module.exports = {
    getCoins: getCoins,
    getExchanges: getExchanges
}
