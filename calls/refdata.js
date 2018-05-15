const jcsv = require("../wrapper").jsonToCsv,
    _ = require("underscore"),
    cc = require("cryptocompare");

// get all available coins tracked by cc and store in flattened csv
let getCoins = async (csvName,wrp=jcsv) => {
    try {
        let coinCall = await cc.coinList();
        let coinData = _.map(_.pairs(coinCall["Data"]), _.last);
        await wrp(coinData, csvName)    
    }
    catch(e) {
        console.log(e); 
    }
}

/* get all exchanges, as well as the coins that trade on them
// flatten into csv
// NOTE - could extend to get all currencies for coins
*/
let getExchanges = async (csvName,wrp=jcsv) => {
    try {
        let exchCall = await cc.exchangeList();
        let exchData = _.map(_.keys(exchCall), p => {
            let o = {};
            o["exchange"] = p
            o["coin"] = _.keys(exchCall[p]).length ? _.keys(exchCall[p]) : "";
            return o;
        });
        await wrp(exchData, csvName, "coin")
    }
    catch(e) {
        console.log(e); 
    }
}

// export both methods
module.exports = {
    getCoins: getCoins,
    getExchanges: getExchanges
}
