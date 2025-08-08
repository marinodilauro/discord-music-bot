module.exports = {
  name: 'stop',
  async execute(message, args, client) {
    const queue = client.player.nodes.get(message.guild.id);
    if (!queue) return message.reply('❌ Nessuna canzone da fermare!');
    queue.delete();
    message.channel.send('⏹️ Musica fermata e coda cancellata.');
  }
};
