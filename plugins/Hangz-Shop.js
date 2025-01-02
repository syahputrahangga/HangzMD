const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime }) => {
let teksnya = `
 *乂 S H O P 乂*
            
┃╰•.nokos
┃╰•.vps
┃╰•.panel    
┃╰•.saldo 
┃╰•.ceksaldo 
┃╰•.transfer 
┃╰•.topup 
┃╰•.cekmin 
┃╰•.belipanel 
┃╰•.addusr 
┃╰•.buyserver
┃╰•.addusr 
┃╰•.addsrv
┃╰•.addusradmin 
┃╰•.addsaldo
┃╰•.listpanel 
┃╰•.listvps  
┃╰•.listusr 
┃╰•.listsrv 
┃╰•.startsrv 
┃╰•.stopsrv 
┃╰•.addlist 
┃╰•.dellist 
┃╰•.updatelist 
┃╰•.list 
╰──────────────━
`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname} the shop`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: false, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
}

handler.command = ["menushop", "shopmenu"]

module.exports = handler