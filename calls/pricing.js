/* PRICING API CALLS */

const jcsv = require("../wrappers/fileparser").jsonToCsv,
    _ = require("underscore"),
    cc = require("cryptocompare");
    
// generic pricing function
// fnName = histoDay, histoHour, histoMinute
const getPrices = async (fnName,fsym,tsym,options,wrp=jcsv) => { 
    try {
        const priceCall = await fnName(fsym,tsym,options);
        const priceData = _.map(priceCall,p => {
            p["symbol"] = fsym;
            p["tsym"] = tsym;
            p["exchange"] = options.exchange || "average";
            return p;
        });
        const tm = options.timestamp;
        const exc = priceData[0].exchange;
        const csvName = `${fnName.name}_${fsym}_${tsym}_${exc}_${tm}.csv`;
        await wrp(priceData,csvName)
    } 
    catch (e) {
        console.log(e);
    }
}

// topexchanges by coin
const getTopExchanges = async (fsym, tsym, lim, wrp=jcsv) => {
    try {
        const topExchData = await cc.topExchanges(fsym, tsym, lim);
        const csvName = `Top_vol_${fsym}_${tsym}_${lim}.csv`;
        await wrp(topExchData,csvName)
    }
    catch (e){
        console.log(e);
    }
}

// top fiat pairing and exchange
const getTopFiat = async (fsym, lim, wrp=jcsv) => {
    try {
        const topFiatData = await cc.topPairs(fsym, lim);
        const csvName = `Top_pairs_${fsym}_${lim}.csv`;
        await wrp(topFiatData, csvName)
    }
    catch (e){
        console.log(e);
    }
}

// exports
module.exports = {
    getPrices: getPrices,
    getTopExchanges: getTopExchanges,
    getTopFiat: getTopFiat
}



