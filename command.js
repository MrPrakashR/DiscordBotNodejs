const { REST,Routes } = require("discord.js")

const ACCESS_TOKEN = ""
const APPLICATION_CLIENT_ID = ""

const commands = [
    {
        name:"ping",
        description:"Replies with pong!"
    },
];

const rest = new REST({version:"10"}).setToken(ACCESS_TOKEN);

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationCommands(APPLICATION_CLIENT_ID), { body:commands });

        console.log("Sucessfully reload application (/) commands.");
    } catch (error) {
        console.error(error)
    }
})();

