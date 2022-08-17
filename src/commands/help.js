const util = require("../utils");

const unlisted = ["eval", "source"];

module.exports = {
  name: "help",
  aliases: ["commands", "?"],
  run: (msg) => {
    const commands = msg.client.commands
      .filter((c) => !unlisted.includes(c.name))
      .map((c) => `\`${c.name}\``);

    const embed = util
      .embed()
      .setAuthor("Command List", msg.client.user.displayAvatarURL())
      .setDescription(commands.join(", "))
      .setTimestamp();

    msg.channel.send(embed);
  },
};
