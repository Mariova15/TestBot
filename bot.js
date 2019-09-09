var  env = process.env.BOT_KEY;
var  token = '<${env}>';

var  Bot = require('node-telegram-bot-api'),
  bot = new Bot(token, { polling: true });

bot.on('message', (msg) => {    
    bot.sendMessage(msg.chat.id,"Hola chapu "+ env);        
});
    