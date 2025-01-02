const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime }) => {
let teksnya = `
┏ ⪻ F U N M E N U ≫
> ╰•_.cekkontol_
> ╰•_.cekmemek_ 
> ╰•_.cekkhodam_ 
> ╰•_.checkme_ 
> ╰•_.kontol_
> ╰•_.cabul_ 
> ╰•_.tolol_ 
> ╰•_.goblog/goblok_ 
> ╰•_.idiot_ 
> ╰•_.gay_
> ╰•_.jomok_ 
> ╰•_.bajingan_ 
> ╰•_.munafik_
> ╰•_.kontol_
> ╰•_.yatim_ 
> ╰•_.poke_ 
> ╰•_.pembokep_ 
> ╰•_.fembokef_
> ╰•_.pengocok_
> ╰•_.hitam_
> ╰•_.hytam_ 
> ╰•_.bego_ 
> ╰•_.jawa_ 
> ╰•_.wibu_ 
> ╰•_.stress_
> ╰•_.miskin_ 
> ╰•_.cantik_ 
> ╰•_.ganteng_
> ╰•_.setan_
> ╰•_.manis_
> ╰•_.babi_ 
> ╰•_.cina_ 
> ╰•_.atheis_ 
> ╰•_.papua_
> ╰•_.pengentot_ 
> ╰•_.seksi_ 
> ╰•_.kawai_ 
> ╰•_.tercindo_ 
> ╰•_.cabul_
> ╰•_.fuckboy_ 
> ╰•_.fuckgirl_
> ╰•_.playboy_ 
> ╰•_.playgirl_
> ╰•_.sange_
> ╰•_.hot_
> ╰•_.sangean_
┗❐──≫
`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: '120363383395435351@newsletter' }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: false, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
}

handler.command = ["menufun", "menu fun", "funmenu"]

module.exports = handler