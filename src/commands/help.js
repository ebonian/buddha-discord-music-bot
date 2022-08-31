const util = require("../utils");

const unlisted = ["eval", "source"];

module.exports = {
  name: "help",
  description: "List of commands.",
  aliases: ["commands", "?", "h"],
  run: (msg) => {
    const embed = util
      .embed()
      .setColor("#2f3137")
      .setAuthor("Command List", msg.client.user.displayAvatarURL())
      .setDescription(
        msg.client.commands.map(
          (data, idx) => `\`${data.name}\` - ${data.description}`
        )
      );

    msg.channel.send(embed);
  },
};
