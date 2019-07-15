import { CommandoClient, Command, CommandMessage } from "discord.js-commando";

module.exports = class InfoCommand extends Command {
    constructor(bot: CommandoClient) {
        super(bot, {
            name: 'info',
            aliases: ['i'],
            group: 'bot',
            memberName: 'info',
            description: 'shows you information about me.'
        });
    }

    async run(msg: CommandMessage, args) {
        return msg.channel.send("We're live!")
    }
}
