const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    execute(message, _args, client) {

        // bot-perm
        if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send('Please Give Me **EMBED_LINKS** permission in this channel .')

        let invlink = "[Here](https://discord.com/api/oauth2/authorize?client_id=802868654957789204&permissions=84992&scope=bot)"

        let embedInvite = new Discord.MessageEmbed();
        embedInvite.setTitle("Minecraft Server Status")
        embedInvite.setURL("https://bot-mss.tk")
        embedInvite.setDescription("Invite Link Panel Here :-")
        embedInvite.addField("Invite", invlink)
        embedInvite.setColor("BLUE");
        embedInvite.setThumbnail(client.user.displayAvatarURL({ format: "png", size: 128, dynamic: true }))
        embedInvite.setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
        embedInvite.setTimestamp();
        message.channel.send(embedInvite);

    }
}