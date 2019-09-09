const  env = process.env.BOT_KEY;
const  token = '<${env}>';

const  Bot = require('node-telegram-bot-api'),
const  bot = new Bot(token, { polling: true });

bot.on('message', (msg) => {    
    bot.sendMessage(msg.chat.id,"Hola chapu "+ env);        
});
    