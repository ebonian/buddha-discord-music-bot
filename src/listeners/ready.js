module.exports = {
  name: "ready",
  run: async (client) => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setPresence({
      status: "online",
      activity: {
        name: "-help",
        type: "LISTENING",
      },
      // status: "dnd",
      // activity: {
      //   name: "Ebonian coding myself",
      //   type: "WATCHING",
      // },
    });

    if (client.spotify) await client.spotify.requestToken();

    const nodes = [...client.manager.nodes.values()];
    for (const node of nodes) {
      try {
        await node.connect();
      } catch (e) {
        client.manager.emit("error", e, node);
      }
    }
  },
};
