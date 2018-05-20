/* ACTUAL IMPLEMENTATIONS OF BASIC COMMANDS */

const api = require("../wrappers/api"),
    {Command} = require("./command"),
    _ = require("underscore");
    
// command to get all coins and their metadata
const coins = new Command(
    command = "getCoins <csvname>",
    alias = "gc",
    description = "Get all coins tracked by CryptoCompare",
    action = api.callCoins
);

// commands to get all exchanges, and either an array of their coins
// or the exploded version - a denormalized view
const exchanges = new Command(
    command = "getExchanges <csvname> [explode]",
    alias = "ge",
    description = "Get all exchanges tracked by CryptoCompare",
    action = api.callExchanges
);

// command to get the prices based on 1: day, 2: hour, 3: minute
const prices = new Command(
    command = "getPrices <time> <fsym> <tsym> [exch] [limit]",
    alias = "gph",
    description = "Get historical prices based on time frequency",
    action = api.callPrices
);

// top exchanges on which a coin trades
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