// https://github.com/17teen
// Discord: 7teen#3868

const Discord = require("discord.js");
const { red, green, blue, yellow, cyan, greenBright, cyanBright, yellowBright } = require('chalk');
const bot = new Discord.Client({ ws: { large_threshold: 100000, compress: true } });
const settings = require('./settings.json');
const token = settings.token;


const title = String.raw`


                           ██▓███   █    ██  ██▀███    ▄████ ▓█████  ██▀███  
                          ▓██░  ██▒ ██  ▓██▒▓██ ▒ ██▒ ██▒ ▀█▒▓█   ▀ ▓██ ▒ ██▒
                          ▓██░ ██▓▒▓██  ▒██░▓██ ░▄█ ▒▒██░▄▄▄░▒███   ▓██ ░▄█ ▒
                          ▒██▄█▓▒ ▒▓▓█  ░██░▒██▀▀█▄  ░▓█  ██▓▒▓█  ▄ ▒██▀▀█▄  
                          ▒██▒ ░  ░▒▒█████▓ ░██▓ ▒██▒░▒▓███▀▒░▒████▒░██▓ ▒██▒
                          ▒▓▒░ ░  ░░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░ ░▒   ▒ ░░ ▒░ ░░ ▒▓ ░▒▓░
                          ░▒ ░     ░░▒░ ░ ░   ░▒ ░ ▒░  ░   ░  ░ ░  ░  ░▒ ░ ▒░
                          ░░        ░░░ ░ ░   ░░   ░ ░ ░   ░    ░     ░░   ░ 
                          ░        ░           ░    ░  ░   ░     
                                                   
                                         Author: 7teen#3868

`;

console.log(red(title))


bot.on('ready', () => {
    console.log(red('              ════════════════════════════════════════════════════════════════════════════════'));
    console.log(greenBright(`                                           User: ${bot.user.username}#${bot.user.discriminator}`));
    console.log(red('              ════════════════════════════════════════════════════════════════════════════════'));

    bot.user.friends.forEach((f) => f.dmChannel.fetchMessages({ limit: 100 }).then(msgs => msgs.filter(m => m.author.id === bot.user.id).map(m => m.delete())).then(console.log(greenBright(
        `${f.username}'s DMs are being Purged.`
    ))).catch(e => {
        console.error(red(`Couldn't Purge ${f.username}`))
    }))

});



bot.login(token);
