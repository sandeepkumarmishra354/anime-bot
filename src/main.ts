import { config } from 'dotenv';
import { Telegraf } from "telegraf";
import {
    commandHelp, commandQuote, commandStart,
    commandSubscribe, commandUnsubscribe
} from "./controller";

config();
const bot = new Telegraf(process.env.BOT_TOKEN ?? "");

bot.command("/start", commandStart);
bot.command("/help", commandHelp);
bot.command("/subscribe", commandSubscribe);
bot.command("/unsubscribe", commandUnsubscribe);
bot.command("/quote", commandQuote);

bot.on('text', async ctx => {
    let { text } = ctx.update.message;
    console.log(text);
    ctx.reply(`replying with same: ${text}`);
});

bot.launch();
console.log("telegram AnimeBot is running...");

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export { bot };