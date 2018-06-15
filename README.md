# Crypto 2 CSV
Microservice to get Cryptocurrency data and a few examples of time series analysis

## Main Dependencies

* commander ^2.15.1
* cryptocompare ^0.5.0
* json2csv ^4.1.2
* node-fetch ^2.1.2
* underscore ^1.9.0

## About

This project started as a simple way to parse JSON and return CSV files that are easy to load into pandas or R dataframes. It is currently a command line tool with some pre-configured api calls that allow a user to easily grab OHLCV for any coin or metadata regarding the coin marketplace. 

This repo also contains a few simple examples of how this CLI could be useful. It cointains:
* A bash script to pull data for the top 25 coins
* An R-markdown to load the coins into R dataframes for analysis

## Progress

This project is a major work in progress. Steps taken so far:

1. Build command line tool to work with the Crypto Compare API through node's cryptocompare package.
2. Write simple JSON to CSV parser based on crypto specific calls.
3. Add time component to the pricing API Calls.
4. Test functionality of prebuild commands.
5. Pull data on the top 25 coins.
6. Compute some simple time series analysis to model price mean and variance.

Please use and break the application! I welcome any comments, suggestions, pull requests, etc.

## Future Steps

1. Clean up the command line methods. Use options and arguments as opposed to just arguments.
2. Add better error handling and unit testing.
3. Add more options than simply csv (extend to store in DB).
4. Integrate with other data sources and APIs.
5. Add in more advanced time series analysis, including ARFIMA & LTSM

## Installation and Use

- First, make sure you have git and node installed on your local computer
- Then, clone this repository and navigate into the crypto-2-csv folder
- Run `npm install` or `yarn install` to get install dependencies locally
- Use the command line to make API calls and get data as CSV

## Examples

1. Description: `node cryptos -h`
1. Get all coins: `node cryptos gc coins.csv`
3. Get last day of prices for ETH-USD in minutes: `node cryptos gph minute ETH USD 1440`
4. Get daily XRP-USD for the month of Jan 2018: `node cryptos gph daily XRP USD 31 2018-01-31`  
5. Get top 10 exchanges by volume for crypto-fiat pairing: `node cryptos gtce BTC JPY 10`

