#!/bin/bash

# hard code csv name for exchanges and results
CSV="exchanges.csv"
RES="topresults.csv" 

# get which coins trade on which exchange using our command line app
node cryptos getExchanges $CSV coin

# count the number of exchanges each coin trades on, and take the top n coins. best guess of liquidity.
awk -F',' '{print $2}' $CSV | sort -n | uniq -c | sort -nr | head -n "$1" > $RES

# show the top coins that we got to show results
head $RES

# get coin array
COINARR=($(awk '{print $2}' $RES | tr -d '"'))

# loop through coins and run jobs to get csvs
# NOTE - below is for example only - would not want these values if scheduled job
for coin in ${COINARR[@]}
do
    node cryptos gph day $coin USD 2000 "2018-05-22T00:00:00" &
    node cryptos gph hour $coin USD 2000 "2018-05-22T00:00:00" &
    # have to sleep to avoid api limits
    sleep 1
done
