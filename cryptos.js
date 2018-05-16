global.fetch = require("node-fetch");

// get ref data and pricing methods
const refdata = require("./calls/refdata"),
    pricing = require("./calls/pricing"),
    command = require("commander"),
    cc = require("cryptocompare");

// command line arguments
command
    .version('1.0.0')
    .description('Crypto Compare csv wrappers from node!');

// get all coins
command
    .command('getCoins <csvname>')
    .alias('gc')
    .description('Get all coins tracked by Crypto Compare')
    .action(csvname => refdata.getCoins(csvname));

// get all exchanges
command
    .command('getExchanges <csvname>')
    .alias('ge')
    .description('Get all exchanges and coins on them from Crytpo Compare')
    .action(csvname => refdata.getExchanges(csvname));

// get daily prices
command
    .command('getDailyPrices <fsym> <tsym> [lim] [exch]')
    .alias('gdp')
    .description('Daily prices from Crypto Compare')
    .action((fsym,tsym,lim,exch) => {
        let options = {};
        options.limit = lim || 2000;
        if(exch) {options.exchange = exch}
        console.log(options);
        pricing.getPrices(cc.histoDay,fsym,tsym,options)
    });
// get hourly prices
command
    .command('getHourlyPrices <fsym> <tsym> [lim] [exch]')
    .alias('ghp')
    .description('Hourly prices from Crypto Compare')
    .action((fsym,tsym,lim,exch) => {
        let options = {};
        options.limit = lim || 2000;
        if(exch) {options.exchange = exch}
        pricing.getPrices(cc.histoHour,fsym,tsym,options)
    });

command.parse(process.argv);

//refdata.getExchanges("exchanges.csv");
// generate daily and hourly for top 5 coins
//["BTC","ETH","BCH","XRP","EOS"].map(i => {
//    pricing.getPrices(cc.histoDay,i,"USD",{"limit":2000})
//    pricing.getPrices(cc.histoHour,i,"USD",{"limit":2000})
//});

