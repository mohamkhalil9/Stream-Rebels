const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const xkiller = member.guild.channels.find("name", "🙌『الـترحيب』-•");
     xkiller.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
  });
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
