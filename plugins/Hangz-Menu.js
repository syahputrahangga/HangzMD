const fs = require("fs")
const os = require('os');
const mark = `${global.kai}@s.whatsapp.net`
const owned = "6285866435726@s.whatsapp.net"
let handler = async (m, { Ditss, isCreator, isPremium, db_saldo, cekSaldo, toRupiah, qtext, runtime }) => {
let teksnya = `
*\`informasi\`*
> • *Botname :* @${global.botname}
> • *Owner :* @${global.owner}
> • *Runtime :* ${runtime(os.uptime())}
> • *Mode :* ${Ditss.public ? "Public": "Self"}
  
*\`info user\`*
> • *name* : ${m.pushName}
> • *Number :* ${m.sender.split("@")[0]}
> • *Status :* ${isCreator ? "Owner" : isPremium ? "Premium" : "Free User"}
> • *saldo :* cek sendiri aja
> • *device:* ${m.device}
────────────────────────
             *</> menu simpel </>*
────────────────────────
├── aimenu
├── gamemenu
├── rpgmenu
├── downloadmenu
├── searchmenu
├── toolsmenu
├── mainmenu
├── ownermenu
├── pterodactylmenu
├── cerpenmenu
├── beritamenu
├── groupmenu 
├── 
├── [ new fitur ]
├── 
├── myip [ cek ip ]
├── listbkp [ spesial fitur ]
├── videy [ download spesial fitur ]
├── sosmed [ sosmed owner ]
├── brat2 [ buat stiker trend anomali ]
├── nglspam [ spam ngl ]
├── twt [ fake tweeter ]
├── joko [ suara ai jokowi ]
└───────────────────────
              *</> creator recode </>*
────────────────────────>

╭─ •  「 *hangz-dev* 」
│  ◦  *Instagram* : ${global.instagram}
│  ◦  *time* : 2022-2024
╰──── •
─────────────────────
`
await Ditss.sendMessage(m.chat, {document: fs.readFileSync("./package.json"), mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", caption: `${teksnya}`, fileName: `${botname2} V${global.versi}`, contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${global.botname}`, newsletterJid: global.idSaluran }, 
mentionedJid: [global.owner+"@s.whatsapp.net", m.sender], externalAdReply: {containsAutoReply: false, thumbnail: await fs.readFileSync("./src/media/menu.jpg"), title: `© Copyright By ${namaOwner}`, 
renderLargerThumbnail: false, sourceUrl: global.linkSaluran, mediaType: 1}}}, {quoted: qtext})
   Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/awal.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })

      
}

handler.command = ["menu"]

module.exports = handler