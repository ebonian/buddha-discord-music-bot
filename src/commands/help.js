const util = require("../utils");

const unlisted = ["eval", "source"];

module.exports = {
  name: "help",
  description: "List of commands.",
  aliases: ["commands", "?", "h"],
  run: (msg) => {
    // const commands = msg.client.commands
    //   .filter((c) => !unlisted.includes(c.name))
    //   .map((c) => `\`${c.name}\``);

    const embed = util
      .embed()
      .setColor("#2f3137")
      .setAuthor("Command List", msg.client.user.displayAvatarURL())
      .setDescription(
        msg.client.commands.map(
          (data, idx) => `\`${data.name}\` - ${data.description}`
        )
      );
    // .setDescription(commands.join(", "));

    console.log(msg.client.commands);

    msg.channel.send(embed);
  },
};
