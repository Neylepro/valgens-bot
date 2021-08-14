const Discord = require('discord.js')

module.exports = async (client, guild) => {

    let found = 0;

    guild.channels.cache.map((channel) => {

        if (found === 0) {

            if (channel.type === "text") {

                if (channel.permissionsFor(client.user).has("VIEW_CHANNEL") === true) {

                    if (channel.permissionsFor(client.user).has("SEND_MESSAGES") === true) {

                        if (channel.permissionsFor(client.user).has("EMBED_LINKS") === true) {

                            let embedGC = new Discord.MessageEmbed();
                            embedGC.setTitle("Minecraft Server Status")
                            embedGC.setURL("https://bot-mss.tk")
                            embedGC.setDescription(`
        • Thanks for adding me to your server , To Get List Of All Commands Run **.help** Command .
 
        • For Setting Up The Bot Run **.setup** Command , This Command Setups Your Server Ip and Port , Correct Way Of Using This Command Is **.setup ip port** .
 
        • After Setup , If Your Server Is Java Minecraft Server Then Run **.status-java** Command To Get Server Status .

        • After Setup , If Your Server Is Bedrock Minecraft Server Then Run **.status-bedrock** Command To Get Server Status .

        • For Reset The Ip and Port Run **.reset** Command and Run **.setup** Command Again For Setup The Bot.
 
        • If You Need Any Help With Minecraft Server Status Bot Feel Free To Join Minecraft Server Status **[Support Server](https://discord.gg/EtCsyts)** To Get Your Answers .
        
        `)
                            embedGC.setColor("BLUE");
                            embedGC.setFooter(`${client.user.tag} By LegendX#8483`, client.user.displayAvatarURL());
                            embedGC.setTimestamp();
                            channel.send(embedGC)

                            found = 1;
                        }
                    }
                }
            }
        }
    });

}