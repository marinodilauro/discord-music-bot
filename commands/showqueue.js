module.exports = {
  name: 'showqueue',
  async execute(message, args, client) {
    const queue = client.player.nodes.get(message.guild.id);
    if (!queue || !queue.isPlaying()) return message.reply('❌ Nessuna coda attiva.');

    const tracks = queue.tracks.toArray();
    const current = queue.currentTrack;

    let description = `🎵 **Ora in riproduzione:** ${current.title}\n\n📜 **In coda:**\n`;
    if (tracks.length === 0) {
      description += '❌ Nessuna canzone in coda.';
    } else {
      description += tracks
        .slice(0, 10)
        .map((track, i) => `${i + 1}. ${track.title}`)
        .join('\n');
    }

    message.channel.send(description);
  }
};
