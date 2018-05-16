const jcsv = require("../wrapper").jsonToCsv,
    _ = require("underscore"),
    cc = require("cryptocompare");

// generic pricing function
let getPrices = async (fnName,fsym,tsym,options,wrp=jcsv) => {
    try {
        let priceCall = await fnName(fsym,tsym,options);
        let priceData = _.map(priceCall,p => {
            p["symbol"] = fsym;
            p["tsym"] = tsym;
            p["exchange"] = options.exchange || "average";
            return p;
        });
        let csvName = `${fnName.name}_${fsym}_${tsym}_${priceData[0].exchange}.csv`;
        await wrp(priceData,csvName)
    } 
    catch (e) {
        console.log(e);
    }
}

module.exports = {
    getPrices: getPrices
}



