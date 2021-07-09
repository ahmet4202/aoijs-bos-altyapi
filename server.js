const acs = require('aoi.js');
const bot = new acs.Bot({
  token:"",
  prefix:"!"
})
bot.onMessage();
bot.command({
  name:"ping",
  code:`$addField[Pingim;$ping ms]`
})
bot.loadCommands(`./komutlar`);

// Uptime Kodu SiLMEYİNİZ.
const app = require("express")();app.get
('/', (req, res) =>{res.send("");});
app.listen(8080);
// Üstteki Uptime Kodu SiLMEYİNİZ.
