//----------------------------------------------------------
//                    Variables / Imports
//----------------------------------------------------------
import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
//Tells these components to use the ai api file and discord.js respectively

dotenv.config();
console.log(process.env.TOKEN);

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});
//Declares intents for the bot (discord.js needs this for the bot to function) ^^

client.login(process.env.TOKEN);

var greetingChoices = [
  "hey x",
  "how u doin",
  "yo",
  "ready 2 learn",
  "2 kool 4 skool",
  "birds are fake",
];
//Array of greetings for testing ^^

let Greeting =
  greetingChoices[Math.floor(Math.random() * greetingChoices.length)];
//Variable to generate random greeting each run using math.random ^^

//----------------------------------------------------------
//                            Login
//----------------------------------------------------------
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//When the bot is online, states its user tag to make sure it is correct & logged in
client.on("ready", () => {
  client.user.setActivity("crying");
});
//? Function ?
//Sets the bot's status - just a little cosmetic thing :)
//----------------------------------------------------------
//                            Testing
//----------------------------------------------------------
client.on("messageCreate", (msg) => {
  if (msg.content === "ping") {
    msg.channel.send(Greeting);
  }
});
//Replies to 'ping' with a random result from the array 'Greeting' ^^

//----------------------------------------------------------
//                        Server Whitelist
//----------------------------------------------------------
const whitelist = ["993399791394508831", "939771378754801664"];
client.on("guildCreate", (guild) => {
  for (const item of whitelist) {
    console.log(item);
    if (item == guild.id) return;
    guild.leave();
  }
});
//? Loop (For loop)
//Uses a for loop to test every time the bot joins a new server and logs the whitelisted servers.
// If the server isn't whitelisted in this array, the bot will leave the server.