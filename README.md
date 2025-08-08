# 🎵 Discord Music Bot

A powerful, easy-to-use Discord Music Bot built with [`discord.js`](https://discord.js.org), [`discord-player`](https://discord-player.js.org), and [`discord-player-youtubei`](https://www.npmjs.com/package/discord-player-youtubei).  
Stream music from YouTube directly into your Discord server using simple text commands!

---

## 🚀 Features

- 🔎 Search and play music from YouTube (via name or URL)
- ⏸️ Pause, resume, skip, and stop music
- 📄 Queue system to manage tracks
- ➕ Add songs to the queue without playing immediately
- 🛠️ Fully command-based using a customizable prefix

---

## 🛠 Requirements

- [Node.js](https://nodejs.org/) **v20 or higher**
- A registered Discord bot with a token
- A Discord server where the bot has the following permissions:
  - `Send Messages`
  - `Read Message History`
  - `Connect`
  - `Speak`

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/discord-music-bot.git
cd discord-music-bot
npm install
```

### 2. Install Dependencies

```bash
npm install
```

### Configure the Bot

Create a config.json file in the root directory with the following content:

```json
{
  "token": "YOUR_DISCORD_BOT_TOKEN",
  "prefix": "!" // You can choose any prefix you want for the commands
}
```

🔐 Important: Never share your bot token publicly!

### 4. Start the Bot

```bash
node bot.js
```

## 💡 Commands

Use the prefix defined in your config.json (default: !).

| Command                   | Description                                   |
| ------------------------- | --------------------------------------------- |
| `!play <song or URL>`     | 🎶 Play a song or add it to the queue         |
| `!pause`                  | ⏸️ Pause the current track                    |
| `!stop`                   | ⏹️ Stop the music and clear the queue         |
| `!skip`                   | ⏭️ Skip the current song                      |
| `!addqueue <song or URL>` | ➕ Add a song to the queue without playing it |
| `!showqueue`              | 📃 Show the current music queue               |
| `!help`                   | 🆘 Show all available commands                |

## 🌐 Hosting (Optional)

To keep your bot online 24/7, you can deploy it to services like:

- Replit
- Railway
- Render
- VPS providers like Hetzner, DigitalOcean
- A Raspberry Pi or your own server

## 🤝 Contributing

Found a bug or want to suggest a feature?
Feel free to open an issue or submit a pull request.

## ⚠️ Legal Disclaimer

This bot uses YouTube as a music source.
Please make sure you comply with YouTube’s Terms of Service and Discord’s Terms of Service.

## 📄 License

This project is licensed under the MIT License.
