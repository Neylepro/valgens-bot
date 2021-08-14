const Discord = require('discord.js');
const predb = require('quick.db')
const bconfig = require('../../../config.json')

module.exports = {
    name: 'prefix',
    execute(message, _args, client) {

        // bot-perm
        if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send('Please Give Me **EMBED_LINKS** permission in this channel .')

        let yourprefix = predb.get(`guild_${message.guild.id}_prefix`)
        
        if (!predb.get(`guild_${message.guild.id}_prefix`, message.guild.id)) {

            let embedPrefix = new Discord.MessageEmbed()
            embedPrefix.setTitle("Minecraft Server Status")
            embedPrefix.setURL("https://bot-mss.tk")
            embedPrefix.setDescription("Prefix Panel Here :-")
            embedPrefix.addFields([
                {
                    "name": "Default Prefix",
                    "value": "```" + `${bconfig.defaultprefix}` + "```"
                },
                {
                    "name": "Server Prefix",
                    "value": "```" + `Not Setuped` + "```"
                }
            ])
            embedPrefix.setColor("BLUE");
            embedPrefix.setThumbnail(client.user.displayAvatarURL({ format: "png", size: 128, dynamic: true }))
            embedPrefix.setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
            embedPrefix.setTimestamp();
            message.channel.send(embedPrefix)
        } else {

            let embedCPrefix = new Discord.MessageEmbed()
            embedCPrefix.setTitle("Minecraft Server Status")
            embedCPrefix.setURL("https://bot-mss.tk")
            embedCPrefix.setDescription("Prefix Panel Here :-")
            embedCPrefix.addFields([
                {
                    "name": "Default Prefix",
                    "value": "```" + `${bconfig.defaultprefix} (Disabled Because Custom-Prefix Is Enabled)` + "```"
                },
                {
                    "name": "Server Prefix",
                    "value": "```" + `${yourprefix}` + "```"
                }
            ])
            embedCPrefix.setColor("BLUE");
            embedCPrefix.setThumbnail(client.user.displayAvatarURL({ format: "png", size: 128, dynamic: true }))
            embedCPrefix.setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
            embedCPrefix.setTimestamp();
            message.channel.send(embedCPrefix)

        }
    }
}