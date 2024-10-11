const { MessageEmbed } = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');

function sendWelcomeDM(member) {
    const linkButton = new MessageButton()
        .setLabel('Obtenir des membres gratuitement !')
        .setStyle('url')
        .setEmoji("1161368975540768769")
        .setID("https://discord.gg/jFVaTKfMn7");

    const linkButtonbot = new MessageButton()
        .setLabel('Obtenir un Oauth2-Bot')
        .setStyle('url')
        .setEmoji("1158092105302945992")
        .setID("https://discord.gg/jFVaTKfMn7");

    const embedWelcome = new MessageEmbed()
        .setColor("#0000FF")
        .setTitle(`Bienvenue sur ToolHub !`)
        .setFooter("✨ Événement référencé dans le salon event")
        .setThumbnail('https://cdn.discordapp.com/avatars/1159935174071550064/8004733ed59923fc5f46457101aa420b.webp?size=4096')
        .setDescription('Bienvenue sur le serveur [ToolHub](https://discord.gg/jFVaTKfMn7')

    const roweeeeeeee = new MessageActionRow().addComponents(linkButtonbot, linkButton);

    member.send({ embeds: [embedWelcome], components: [roweeeeeeee] });
}

module.exports = { sendWelcomeDM };
