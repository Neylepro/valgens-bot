const Discord = require('discord.js');

module.exports = {
    name: 'update',
    execute(message, _args, client) {

        // bot-perm
        if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send('Please Give Me **EMBED_LINKS** permission in this channel .')

        let embedUpdate = new Discord.MessageEmbed();
        embedUpdate.setTitle("Minecraft Server Status")
        embedUpdate.setURL("https://bot-mss.tk")
        embedUpdate.setDescription(`
        • New Commands - status-java , status-bedrock
        `)
        embedUpdate.setColor("BLUE");
        embedUpdate.setThumbnail(client.user.displayAvatarURL({ format: "png", size: 128, dynamic: true }))
        embedUpdate.setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
        embedUpdate.setTimestamp();
        message.channel.send(embedUpdate);

    }
}