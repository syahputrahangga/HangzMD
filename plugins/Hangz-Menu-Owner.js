const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime }) => {
let teksnya = `
 *乂 O W N E R M E N U 乂*

  ❐  *⌜ Ownermenu ⌟*  ❐
┃╰◈.addprem
┃╰◈.delprem
┃╰◈.addowner
┃╰◈.delowner
┃╰◈.autoread
┃╰◈.autopromosi
┃╰◈.autoreadsw
┃╰◈.autotyping
┃╰◈.addplugins
┃╰◈.listplugins
┃╰◈.delplugins
┃╰◈.getplugins
┃╰◈.saveplugins
┃╰◈.addowner
┃╰◈.listowner
┃╰◈.delowner
┃╰◈.self/public
┃╰◈.setimgmenu
┃╰◈.setimgfake
┃╰◈.setppbot
┃╰◈.clearsession
┃╰◈.clearchat
┃╰◈.resetdb
┃╰◈.restartbot
┃╰◈.getsc
┃╰◈.upch
┃╰◈.upgc
┃╰◈.addcase
┃╰◈.getcase
┃╰◈.listgc
┃╰◈.joingc
┃╰◈.joinch
┃╰◈.upaudioch
┃╰◈.upaudiogc
┃╰◈.upchannel
┃╰◈.upchannel2

`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `m e n u 乂 o w n e r`, newsletterJid: '120363383395435351@newsletter' }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: false, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: true, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
}

handler.command = ["ownermenu", "menuowner"]

module.exports = handler