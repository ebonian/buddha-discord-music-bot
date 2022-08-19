const util = require("../utils");

const unlisted = ["eval", "source"];

module.exports = {
  name: "help",
  aliases: ["commands", "?", "h"],
  run: (msg) => {
    const commands = msg.client.commands
      .filter((c) => !unlisted.includes(c.name))
      .map((c) => `\`${c.name}\``);

    const embed = util
      .embed()
      .setColor("#2f3137")
      .setAuthor("Command List", msg.client.user.displayAvatarURL())
      .setDescription(commands.join(", "));

    msg.channel.send(embed);
  },
};
