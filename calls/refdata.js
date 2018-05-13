const jcsv = require("../wrapper").jsonToCsv;

let getCoins = async (csvName,wrp=jcsv) => {
    try {
        const coinCall = await cc.coinList();
        const coinData = _.map(Object.entries(coinCall['Data']),_.last);
        const fields = Object.keys(coinData[0]);
        wrp(coinData, fields, 'coins.csv')    
    }
    catch(e) {
        console.log(e); 
    }
}

module.exports.getCoins = getCoins;
