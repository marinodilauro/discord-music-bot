module.exports = {
  name: 'skip',
  async execute(message, args, client) {
    const queue = client.player.nodes.get(message.guild.id);
    if (!queue || !queue.isPlaying()) return message.reply('❌ Nessuna canzone da saltare!');
    queue.node.skip();
    message.channel.send('⏭️ Brano saltato.');
  }
};
