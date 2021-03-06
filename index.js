const app = require('express')();
app.get('/', (req, res) => {
    res.send('');
});
const keep_alive = require("./keep-alive.js")
const DBD = require("aoi.js");
const bot = new DBD.Bot({
  token: process.env.token,
  prefix: "PREFİX",
 })
bot.onMessage()
bot.onJoined()
bot.onLeave()

bot.command({
name: "ping",
code:`$ping`
})

const fs = require('fs')
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for (const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}
