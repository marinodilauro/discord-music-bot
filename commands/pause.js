module.exports = {
  name: 'pause',
  async execute(message, args, client) {
    const queue = client.player.nodes.get(message.guild.id);
    if (!queue || !queue.isPlaying()) return message.reply('❌ Nessuna canzone in riproduzione!');
    queue.node.pause();
    message.channel.send('⏸️ Pausa!');
  }
};
