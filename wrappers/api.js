/* CONTAINS HELPER FUNCTIONS THAT CONFIGURE AN API CALL */
const refdata = require("../calls/refdata"),
    pricing = require("../calls/pricing"),
    _ = require("underscore"),
    cc = require("cryptocompare");

// helper coin func
const callCoins = (csvname) => refdata.getCoins(csvname);

// helper exchange func
const callExchanges = (csvname) => refdata.getExchanges(csvname);

// helper price func
const callPrices = (time,fsym,tsym,exch,lim) => {
    const options = {};
    options.limit = lim || 2000;
    const priceFn = {
        "day": cc.histoDay, 
        "hour": cc.histoHour, 
        "minute": cc.histoMinute
    }
    if(exch) {options.exchange = exch}
    if (_.contains(_.keys(priceFn),time)){
        pricing.getPrices(priceFn[time],fsym,tsym,options)
    }
    else{
        console.log("Please pick time from <day, hour, or minute>");
    }
}

// helper top exch func
const callTopExchanges = pricing.getTopExchanges(fsym,tsym,lim=5); 

module.exports = {
    callCoins: callCoins,
    callExchanges: callExchanges,
    callPrices: callPrices,
    callTopExchanges: callTopExchanges
}