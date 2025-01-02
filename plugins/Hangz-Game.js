const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime }) => {
let teksnya = `
 *乂 G A M E 乂*
 
┃╰•.werewolf
┃╰•.suit *tag atau reply*
┃╰•.tictactoe *tag atau reply*
┃╰•.delttt
┃╰•.petakbom
┃╰•.delpetakbom
┃╰•.tebakgambar
┃╰•.tebakanime
┃╰•.tebakkabupaten
┃╰•.tebaklagu
┃╰•.kuis
┃╰•.tebakkalimat
┃╰•.tebakkata
┃╰•.tebaklirik
┃╰•.tebakkimia
┃╰•.tebakbendera
┃╰•.susunkata
┃╰•.asahotak
┃╰•.siapakahaku
┃╰•.caklontong
┃╰•.math
┃╰•.family100
  
╰──────────────━
`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname} the game`, newsletterJid: '120363383395435351@newsletter' }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: false, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
}

handler.command = ["menugame", "gamemenu"]

module.exports = handler