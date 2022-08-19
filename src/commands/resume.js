const util = require("../utils");

module.exports = {
  name: "resume",
  run: async (msg) => {
    const { music } = msg.guild;
    if (!music.player || !music.player.playing)
      return msg.channel.send(
        util
          .embed()
          .setColor("#2f3137")
          .setDescription("🙏 | **Nothing is playing right now...**")
      );
    if (!msg.member.voice.channel)
      return msg.channel.send(
        util
          .embed()
          .setColor("#2f3137")
          .setDescription(
            "🙏 | **You must be in a voice channel to use this command!**"
          )
      );
    if (
      msg.guild.me.voice.channel &&
      !msg.guild.me.voice.channel.equals(msg.member.voice.channel)
    )
      return msg.channel.send(
        util
          .embed()
          .setColor("#2f3137")
          .setDescription(
            `**🙏 | You must be on ${msg.guild.me.voice.channel} to use this command!**`
          )
      );

    try {
      await music.resume();
      msg.react("▶️").catch((e) => e);
    } catch (e) {
      msg.channel.send(`An error occured: ${e.message}.`);
    }
  },
};
