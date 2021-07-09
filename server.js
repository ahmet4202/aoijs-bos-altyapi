const acs = require('aoi.js');
const bot = new acs.Bot({
  token:"tokeniburayagirin",//Tokeninizi Girin
  prefix:"!" // Prefixinizi Girin
})
bot.onMessage();
bot.loadCommands(`./komutlar`);

// Uptime Kodu SiLMEYİNİZ.
const app = require("express")();app.get
('/', (req, res) =>{res.send("");});
app.listen(8080);
// Üstteki Uptime Kodu SiLMEYİNİZ.
