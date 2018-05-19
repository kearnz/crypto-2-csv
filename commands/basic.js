/* ACTUAL IMPLEMENTATIONS OF BASIC COMMANDS */

const api = require("../wrappers/api"),
    {Command} = require("./command"),
    _ = require("underscore");
    
// commands
const coins = new Command(
    command = "getCoins <csvname>",
    alias = "gc",
    description = "Get all coins tracked by CryptoCompare",
    action = api.callCoins
);

const exchanges = new Command(
    command = "getExchanges <csvname>",
    alias = "ge",
    description = "Get all exchanges tracked by CryptoCompare",
    action = api.callExchanges
);

const prices = new Command(
    command = "getPrices <time> <fsym> <tsym> [exch] [limit]",
    alias = "gph",
    description = "Get historical prices based on time frequency",
    action = api.callPrices
);

const topexbycoin = new Command(
    command = "getCoinTopExchanges <fsym> <tsym> [lim]",
    alias = "gcte",
    description = "Get top exchanges for a currency",
    action = api.callTopExchanges
)

// exports
module.exports = {
    coins: coins,
    exchanges: exchanges,
    prices: prices,
    topexbycoin: topexbycoin
}