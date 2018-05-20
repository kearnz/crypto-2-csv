/* CLASS OBJECT FOR GENERATING SIMPLE COMMAND LINE FUNC */
module.exports.Command = class Command {
    //constructor for basic CLI
    constructor(command, alias, description, action){
        this.command = command;
        this.alias = alias;
        this.description = description;
        this.action = action;
    }
    // call the command outside the command line
    describe(){
        return `${this.description}\nCommand: ${command} can be called as ${alias}`;
    }
};
