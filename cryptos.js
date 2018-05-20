/* MAIN CLI ENTRY POINT */

// command line part of the application
global.fetch = require("node-fetch");

// get ref data and pricing methods
const commands = require("./commands/basic")
    program = require("commander");

// command line arguments
program
    .version("1.0.0")
    .description("Crypto Compare csv wrappers from node!");

// adding a new command
const addCommand = (cmd, prog=program) => {
     prog
        .command(cmd.command)
        .alias(cmd.alias)
        .description(cmd.desc)
        .action(cmd.action)
}

// add commands we've defined in commands folder
addCommand(commands.coins);
addCommand(commands.exchanges);
addCommand(commands.prices);
addCommand(commands.topexbycoin);
addCommand(commands.topfiatbycoin);

program.parse(process.argv);
