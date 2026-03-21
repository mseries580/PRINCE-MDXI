const fs = require("fs");

module.exports = {
  name: "rename",
  alias: ["rn"],

  async run(m, { conn, args }) {
    if (!m.quoted) return m.reply("Reply to file");

    if (!args[0]) return m.reply("Enter new name");

    let buffer = await m.quoted.download();
    let newName = args.join(" ");
    let path = `./temp/${newName}`;

    fs.writeFileSync(path, buffer);

    await conn.sendMessage(
      m.chat,
      { document: fs.readFileSync(path), fileName: newName },
      { quoted: m }
    );

    fs.unlinkSync(path);
  },
};
