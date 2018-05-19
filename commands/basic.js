// get ref data and pricing methods
const refdata = require("../calls/refdata"),
    pricing = require("../calls/pricing"),
    cc = require("cryptocompare");

// helper functions
const callCoins = (csvname) => refdata.getCoins(csvname);
const callExchanges = (csvname) => refdata.getExchanges(csvname);
const callPrices = (time,fsym,tsym,exch,lim) => {
    const options = {};
    options.limit = lim || 2000;
    const priceFn = {
        "day": cc.histoDay, 
        "hour": cc.histoMinute, 
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

// command creator class
class Command {
    //constructor for basic CLI
    constructor(command,alias,description,action){
        this.command = command;
        this.alias = alias;
        this.description = description;
        this.action = action;
    }
    // call the command outside the command line
    call(){
        this.action();
    }

}

// commands
const coins = new Command(
    command = "getCoins <csvname>",
    alias = "gc",
    description = "Get all coins tracked by CryptoCompare",
    action = callCoins
);

const exchanges = new Command(
    command = "getExchanges <csvname>",
    alias = "ge",
    description = "Get all exchanges tracked by CryptoCompare",
    action = callExchanges
);

const prices = new Command(
    command = 'getPrices <time> <fsym> <tsym> [exch] [limit]',
    alias = "gph",
    description = "Get historical prices based on time frequency",
    action = callPrices
)

// exports
module.exports = {
    coins: coins,
    exchanges: exchanges,
    prices: prices
}