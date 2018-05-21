/* CONTAINS HELPER FUNCTIONS THAT CONFIGURE AN API CALL */
const refdata = require("../calls/refdata"),
    pricing = require("../calls/pricing"),
    _ = require("underscore"),
    moment = require("moment"),
    cc = require("cryptocompare");

// helper coin func
const callCoins = (csvname) => refdata.getCoins(csvname);

// helper exchange func
const callExchanges = (csvname, explode) => refdata.getExchanges(csvname, explode);

// helper price func
const callPrices = (time, fsym, tsym, lim, dt, exch) => {
    const options = {};
    options.limit = lim || 2000;
    //if dt null, moment(undefined) - today();
    options.timestamp = moment(dt).toDate();
    console.log(options.timestamp);
    const priceFn = {
        "day": cc.histoDay, 
        "hour": cc.histoHour, 
        "minute": cc.histoMinute
    }
    if(exch) {options.exchange = exch}
    if (_.contains(_.keys(priceFn), time)){
        pricing.getPrices(priceFn[time], fsym, tsym, options)
    }
    else{
        console.log("Please pick time from <day, hour, or minute>");
    }
}

// helper top exch func
const callTopExchanges = (fsym, tsym, lim=5) => {
    pricing.getTopExchanges(fsym, tsym, lim); 
}

const callTopFiat = (fsym, lim=5) => {
    pricing.getTopFiat(fsym, lim);
}

module.exports = {
    callCoins: callCoins,
    callExchanges: callExchanges,
    callPrices: callPrices,
    callTopExchanges: callTopExchanges,
    callTopFiat: callTopFiat
}