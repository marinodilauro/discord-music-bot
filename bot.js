const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { Player } = require("discord-player");
const { YoutubeiExtractor } = require("discord-player-youtubei");
const ffmpeg = require("ffmpeg-static"); // ✅ Importa ffmpeg-static
const fs = require("fs");
require("dotenv").config();
const config = {
  token: process.env.BOT_TOKEN,
  prefix: "!",
};

// ✅ Rende ffmpeg disponibile a discord-player
process.env.FFMPEG_PATH = ffmpeg;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();

// Carica comandi
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Player musicale
client.player = new Player(client, {
  skipFFmpeg: false,
  connectionTimeout: 20000,
});

client.player.extractors.register(YoutubeiExtractor, { force: true });

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);
  if (!command) return;

  try {
    await command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    message.reply("C'è stato un errore nell'esecuzione del comando.");
  }
});

client.once("ready", () => {
  console.log(`✅ ${client.user.tag} è online!`);
});

client.login(config.token);
