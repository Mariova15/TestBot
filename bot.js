const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_KEY;

const bot = new TelegramBot(token, {
    polling: true
});

bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }

});