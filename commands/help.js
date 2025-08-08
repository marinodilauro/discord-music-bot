
module.exports = {
  name: 'help',
  description: 'Mostra i comandi disponibili',
  async execute(message, args, client) {
    const prefix = process.env.PREFIX;

    const helpMessage = `
🎵 **__Comandi del Music Bot__** 🎵

✨ Usa i comandi con il prefisso \`${prefix}\` per controllare la musica nel server!

▶️ **${prefix}play <canzone o URL>**
    Avvia la riproduzione della canzone o aggiungila alla coda.

⏸️ **${prefix}pause**
    Metti in pausa la canzone in riproduzione.

⏹️ **${prefix}stop**
    Ferma la riproduzione e svuota la coda.

⏭️ **${prefix}skip**
    Salta la canzone corrente.

➕ **${prefix}addqueue <canzone o URL>**
    Aggiungi una canzone alla coda senza avviare subito la riproduzione.

📃 **${prefix}showqueue**
    Mostra la lista delle canzoni in coda.

❓ **${prefix}help**
    Mostra questo messaggio di aiuto.

---

💡 Se hai domande o suggerimenti, scrivimi pure!

Buon ascolto! 🎧🎶
    `;

    message.channel.send(helpMessage);
  }
};
