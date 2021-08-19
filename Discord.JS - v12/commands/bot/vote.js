const Discord = require('discord.js');
const bconfig = require('../../config.json')

module.exports = {
    name: 'vote',
    execute(message, _args, client) {

        // bot-perm
        if (!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send('Please Give Me **EMBED_LINKS** permission in this channel .')

        let embedVote = new Discord.MessageEmbed();
        embedVote.setTitle(client.user.username)
        embedVote.setURL(bconfig.websitelink)
        embedVote.setDescription("Voting Link Panel Here :-")
        embedVote.addFields([
            {
                "name": "top.gg",
                "value": "[Here](https://top.gg/bot/802868654957789204)",
                "inline": true
            },
            {
                "name": "topcord.xyz",
                "value": "[Here](https://topcord.xyz/bot/802868654957789204)",
                "inline": true
            },
            {
                "name": "botsfordiscord.com",
                "value": "[Here](https://botsfordiscord.com/bot/802868654957789204)",
                "inline": true
            },
            {
                "name": "discordbotlist.com",
                "value": "[Here](https://discordbotlist.com/bots/802868654957789204)",
                "inline": true
            },
            {
                "name": "botlist.space",
                "value": "[Here](https://discordlist.space/bot/802868654957789204)",
                "inline": true
            },
            {
                "name": "discord.boats",
                "value": "[Here](https://discord.boats/bot/802868654957789204)",
                "inline": true
            },
            {
                "name": "discordextremelist.xyz",
                "value": "[Here](https://discordextremelist.xyz/en-US/bots/802868654957789204)"
            }
        ])
        embedVote.setColor("BLUE");
        embedVote.setThumbnail(client.user.displayAvatarURL({ format: "png", size: 128, dynamic: true }))
        embedVote.setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
        embedVote.setTimestamp();
        message.channel.send(embedVote);

    }
}