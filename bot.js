﻿const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "8";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "517345819406368769"; // ايدي السررفر
var channel = "520641228157747202";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA . ANA 3TAYA .  **')
    },999);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);
