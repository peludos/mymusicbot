const { Client, Intents } = require('discord.js');

// Assuming you already have a Discord client instantiated, such as:
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// The interactionCreate event handler for slash commands
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'say') {
        const message = options.getString('message');
        interaction.reply(message);
    }
});
