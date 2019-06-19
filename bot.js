const Discord = require(‘discord.js’);
const client = new Discord.Client();
const Canvas = require(‘canvas’);
client.on(‘guildMemberAdd’, async member => {
const channel = member.guild.channels.find(ch => ch.name === ‘member-log’);
if (!channel) return;
const canvas = Canvas.createCanvas(700, 250);
const ctx = canvas.getContext('2d');
// Since the image takes time to load, you should await it
const background = await Canvas.loadImage('./wallpaper.jpg');
// This uses the canvas dimensions to stretch the image onto the entire canvas
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
// Use helpful Attachment class structure to process the file for you
const attachment = new Discord.Attachment(canvas.toBuffer(), 'https://cdn.discordapp.com/attachments/590716697586171904/590717381580423178/welcome_4.png');

channel.send(`Welcome to the server, ${member}!`, attachment);

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
