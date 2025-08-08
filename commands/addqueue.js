module.exports = {
  name: 'addqueue',
  async execute(message, args, client) {
    const query = args.join(' ');
    if (!query) return message.reply('❌ Fornisci una canzone o URL!');

    const channel = message.member.voice.channel;
    if (!channel) return message.reply('🔊 Unisciti a un canale vocale prima!');

    const result = await client.player.search(query, { requestedBy: message.author });
    if (!result.hasTracks()) return message.reply('❌ Nessun risultato trovato.');

    const queue = await client.player.nodes.create(channel);

    try {
      if (!queue.connection) await queue.connect(channel);
    } catch {
      client.player.nodes.delete(message.guild.id);
      return message.reply('🔈 Non riesco a connettermi al canale vocale!');
    }

    queue.addTrack(result.tracks[0]);



    message.channel.send(`➕ Aggiunto in coda: **${result.tracks[0].title}**`);
  }
};
