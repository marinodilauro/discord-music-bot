module.exports = {
  name: 'play',
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
    if (!queue.isPlaying()) await queue.node.play();

    console.log(client.player.play());

    try {
      message.channel.send(`🎶 Sto riproducendo: **${result.tracks[0].title}**`);
    } catch (error) {
      console.error(error);
      message.channel.send('❌ Ops! C\'è stato un errore nel riprodurre la canzone.');
    }
  }
};
