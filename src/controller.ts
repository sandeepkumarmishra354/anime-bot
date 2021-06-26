import { Context } from "telegraf";
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.BASE_URL,
    responseType: 'json'
});

export const commandStart = async (ctx: Context) => {
    ctx.reply("Hello welcome to AnimeBot, I will send you one Anime Quote daily." +
        " For more information send command /help");
    // add new user to database
}

export const commandHelp = async (ctx: Context) => {
    ctx.reply(`
    Useful commands
    /help - To display this message.,
    /subscribe - Subscribe to daily quote.,
    /unsubscribe - Unsubscribe to daily quote.,
    /quote - Get a random quote.,
`);
}

export const commandQuote = async (ctx: Context) => {
    // send a random quote to user
    api.get("/random")
        .then(res => {
            const body = res.data;
            console.log(body);
            ctx.reply(`Here is a random quote by - ${body.character} from ${body.anime} 😃 🎉\n\n${body.quote}`);
        })
        .catch(console.error);
}

export const commandSubscribe = async (ctx: Context) => {
    // subscribe to user
}

export const commandUnsubscribe = async (ctx: Context) => {
    // unsubscribe to user
}