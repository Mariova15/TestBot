const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_KEY;

const bot = new TelegramBot(token, {
    polling: true
});

const https = require('https')

https.createServer().listen(process.env.PORT || 5000).on('request', function (req, res) {
    Res.end()
});

bot.on('message', (msg) => {

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Hello dear user");
    }

});