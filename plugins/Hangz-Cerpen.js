const fs = require("fs")
const os = require('os');

let handler = async (m, { Ditss, isCreator, isPremium, qtext, runtime }) => {
let teksnya = `
  ╭┈──────────────────
> ╰•.ᴄᴇʀᴘᴇɴ ᴀɴᴀᴋ
> ╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴅᴀᴇʀᴀʜ
> ╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀɪɴɢɢʀɪꜱ
> ╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴊᴀᴡᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀꜱᴜɴᴅᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ʙᴜᴅᴀʏᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀɪꜱʟᴀᴍɪ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀᴘᴇʀᴛᴀᴍᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀʀᴏᴍᴀɴᴛɪꜱ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴅɪʜ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇɢɪᴛɪɢᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴊᴀᴛɪ
> ╰•.ᴄᴇʀᴘᴇɴ ɢᴀʟᴀᴜ
> ╰•.ᴄᴇʀᴘᴇɴ ɢᴏᴋɪʟ
> ╰•.ᴄᴇʀᴘᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ
> ╰•.ᴄᴇʀᴘᴇɴ ᴊᴇᴘᴀɴɢ
> ╰•.ᴄᴇʀᴘᴇɴ ᴋᴇʜɪᴅᴜᴘᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴋᴇʟᴜᴀʀɢᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴋɪꜱᴀʜɴʏᴀᴛᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴋᴏʀᴇᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴋʀɪꜱᴛᴇɴ
> ╰•.ᴄᴇʀᴘᴇɴ ʟɪʙᴜʀᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴍᴀʟᴀʏꜱɪᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴍɪꜱᴛᴇʀɪ
> ╰•.ᴄᴇʀᴘᴇɴ ᴍᴏᴛɪᴠᴀꜱɪ
> ╰•.ᴄᴇʀᴘᴇɴ ɴᴀꜱɪʜᴀᴛ
> ╰•.ᴄᴇʀᴘᴇɴ ᴏʟᴀʜʀᴀɢᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴀᴛᴀʜʜᴀᴛɪ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴᴀɴᴛɪᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴᴅɪᴅɪᴋᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴀʟᴀᴍᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴏʀʙᴀɴᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴʏᴇꜱᴀʟᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇʀᴊᴜᴀɴɢᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇʀᴘɪꜱᴀʜᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ᴘᴇᴛᴜᴀʟᴀɴɢᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ʀᴀᴍᴀᴅʜᴀɴ
> ╰•.ᴄᴇʀᴘᴇɴ ʀᴇᴍᴀᴊᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ʀɪɴᴅᴜ
> ╰•.ᴄᴇʀᴘᴇɴ ʀᴏʜᴀɴɪ
> ╰•.ᴄᴇʀᴘᴇɴ ʀᴏᴍᴀɴᴛɪꜱ
> ╰•.ᴄᴇʀᴘᴇɴ ꜱᴀꜱᴛʀᴀ
> ╰•.ᴄᴇʀᴘᴇɴ ꜱᴇᴅɪʜ
> ╰•.ᴄᴇʀᴘᴇɴ ꜱᴇᴊᴀʀᴀʜ
 ╰┈────────────────•
`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: false, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `C E R P E N`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: false, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
}

handler.command = ["cerpenmenu" ,"menucerpen" ,"menu cerpen" ,"cerpen menu"]

module.exports = handler