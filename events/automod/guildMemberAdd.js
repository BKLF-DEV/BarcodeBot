const axios = require('axios');
const db = require("quick.db")
const { MessageEmbed } = require("discord.js");
const ms = require("ms")

module.exports = async (client, member) => {
    const guild = member.guild;
    const color = db.get(`color_${guild.id}`) === null ? client.config.color : db.get(`color_${guild.id}`);
    let ee = db.get(`mute_${member.guild.id}_${member.id}`);
    let memberRole = await db.fetch(`autorole_${member.guild.id}`); // Récupère l'ID du rôle membre dans la base de données

    if (ee !== true && memberRole !== null) { // Vérifie si le membre n'est pas mute et si un rôle membre est configuré
        try {
            const role = member.guild.roles.cache.get(memberRole); // Récupère l'objet de rôle à partir de l'ID
            if (role) {
                member.roles.add(role, `Automod`); // Ajoute le rôle membre au membre
            }
        } catch (error) {
            console.error(`Erreur lors de l'ajout du rôle membre au membre: ${error}`);
        }
    }
}
