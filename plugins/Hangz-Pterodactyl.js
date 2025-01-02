const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime }) => {
let teksnya = `
┏❐*⌜ Pterodactylmenu ⌟*❐
┃⭔.1gb
┃⭔.2gb
┃⭔.3gb
┃⭔.4gb
┃⭔.5gb
┃⭔.6gb
┃⭔.7gb
┃⭔.8gb
┃⭔.9gb
┃⭔.10gb
┃⭔.unlimited
┃⭔.cadmin
┃⭔.delpanel
┃⭔.deladmin
┃⭔.listpanel
┃⭔.listadmin
┗❐──≫
`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: false, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
}

handler.command = ["pterodactylmenu", "panelmenu", "menupterodactyl"]

module.exports = handler