
import { Client, Intents, Message } from "discord.js";
import dotenv from "dotenv";
//Imports
dotenv.config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});
//Bot intents

var greetingChoices = [
  "hey x",
  "how u doin",
  "yo",
  "ready 2 learn",
  "2 kool 4 skool",
  "birds are fake",
];

let Greeting =
  greetingChoices[Math.floor(Math.random() * greetingChoices.length)];
//Runs random greeting

client.login(process.env.TOKEN);
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
//Login

client.on("ready", () => {
  client.user.setActivity("crying");
});
//Bot status

client.on("messageCreate", (msg) => {
  if (msg.content === "ping") {
    msg.channel.send(Greeting);
  }
});
//Test message

// const whitelist = ["993399791394508831", "939771378754801664", "1001377114152505455"];
// client.on("guildCreate", (guild) => {
//   for (const item of whitelist) {
//     console.log(item);
//     if (item == guild.id) return;
//     guild.leave();
//   }
// });
//Whitelist

function pomodoro1(msg) {
  msg.channel.send("**Setting a timer for 25 minutes...**");
}

function pomodoro2(msg) {
  msg.channel.send("**Timer set!** Enjoy your study!")
}

function pomodoro3(msg) {
  msg.channel.send("**Take a break!** Set a new study timer when you're ready to come back.");
}

client.on("messageCreate", (msg) => {
  if (msg.content === "w!study") {
    setTimeout (() => pomodoro1(msg), 2000);
    setTimeout (() => pomodoro2(msg), 3000);
    setTimeout (() => pomodoro3(msg), 1500000);
  }
})