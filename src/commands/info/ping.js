const AvonCommand = require("../../structures/avonCommand");
const {EmbedBuilder} = require(`discord.js`);
class ping extends AvonCommand {
    get name(){
        return 'ping'
    }
    get cat(){
        return 'info'
    }
    async run(client,message,args,prefix){
        return message.channel.send({embeds : [new EmbedBuilder().setColor(client.config.color).setAuthor({name : `${client.user.username} Ping
       `}).addFields({name : `<a:ping:946754161389748254> **Pong** <a:ping:946754161389748254>`,value : `${client.ws.ping} ms`}).setFooter({text : `Requested By : ${message.author.tag}`}).setThumbnail(message.author.displayAvatarURL({dynamic : true}))]});
    }
}
module.exports = ping;