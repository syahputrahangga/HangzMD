const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime }) => {
let teksnya = `
 *乂 G R O U P 乂*
┏ 
╰◈ .welcome
╰◈ .antilink2
╰◈ .antilink
╰◈ .statusgc
╰◈ .hidetag
╰◈ .kick
╰◈ .delete
╰◈ .demote
╰◈ .promote
╰◈ .open
╰◈ .close 
╰◈ .antistiker 
╰◈ .antiaudio
╰◈ .antipoto
╰◈ .antivideo
╰◈ .kickall
╰──────────────━
`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: '120363383395435351@newsletter' }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: false, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
}

handler.command = ["grupmenu", "groupmenu", "menugroup"]

module.exports = handler