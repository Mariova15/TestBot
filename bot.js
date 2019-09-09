const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_KEY;

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const bot = new TelegramBot(token, {
    polling: true
});

bot.on('message', function (msg) {

    

    switch (Math.round(Math.random() * 3)) {
        case 0:
            bot.sendMessage(msg.chat.id, "Piano piano si arriva lontano");
            break;
        case 1:
            bot.sendMessage(msg.chat.id, "Yo trabaje en IBM y te digo que esto funciona");
            break;
        case 2:
            bot.sendMessage(msg.chat.id, "Bien, tienes nivel");
            break;
      }

});