const TelegramBot = require('node-telegram-bot-api');

const token = '6738484855:AAG-94s7v9wUvKkOp47PyMIJRhmARA92bGs';
const webAppUrl = 'https://earnest-manatee-0dab0e.netlify.app';

const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg)=> {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId, 'приложение poizon', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Сделать заказ', web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
})

