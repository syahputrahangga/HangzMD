////recodeby:rizall
////wa:083119115977
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
                  *</> all menu </>*
────────────────────────
────────────────────────
                   *</> aimenu <\>*
────────────────────────
*© ai*
*© autoai*
────────────────────────
                 *</> gamemenu </>*
────────────────────────
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
────────────────────────
          *</> 📜 RPG MENU 📜 </>*
────────────────────────
1. Status
2. Heal
3. Inv
4. Open
5. Bet
6. Lb
7. Dagang
8. Berburu
9. Mancing
10. Mining
11. Grinding
12. Shop
13. Buy
14. Sell
15. Tf
16. Bank
17. Simpan
18. Tarik
19. Pet
20. Shoppet
21. Feedpet
22. Dungeon
23. Boss
24. Rampok
25. Bunuh
26. Kerja
27. Pvp
────────────────────────
────────────────────────
             *</> toolsmenu</>*
────────────────────────
┏ ⪻ 2022-2024 ≫
╰•.ai
╰•.gpt
╰•.faketweet
╰•.twt
╰•.remini
╰•.tourl
╰•.tourl2
╰•.ssweb
╰•.nobg
╰•.translate
╰•.twt
╰•.qc
╰•.tohd
╰•.shortlink
╰•.shortlink2
╰•.enc
┗❐──≫
────────────────────────
                  *</> mainmenu </>*
────────────────────────
┏ ⪻  ≫
╰•.funmenu
╰•.gamemenu
┗❐──≫
────────────────────────
               *</> ownermenu </>*
────────────────────────
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

────────────────────────
────────────────────────
              *</> cerpenmenu </>*
────────────────────────

 ╰•.ᴄᴇʀᴘᴇɴ ᴀɴᴀᴋ
╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴅᴀᴇʀᴀʜ
╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀɪɴɢɢʀɪꜱ
╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀᴊᴀᴡᴀ
╰•.ᴄᴇʀᴘᴇɴ ʙᴀʜᴀꜱᴀꜱᴜɴᴅᴀ
╰•.ᴄᴇʀᴘᴇɴ ʙᴜᴅᴀʏᴀ
╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀ
╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀɪꜱʟᴀᴍɪ
╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀᴘᴇʀᴛᴀᴍᴀ
╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀʀᴏᴍᴀɴᴛɪꜱ
╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴅɪʜ
╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇɢɪᴛɪɢᴀ
╰•.ᴄᴇʀᴘᴇɴ ᴄɪɴᴛᴀꜱᴇᴊᴀᴛɪ
╰•.ᴄᴇʀᴘᴇɴ ɢᴀʟᴀᴜ
╰•.ᴄᴇʀᴘᴇɴ ɢᴏᴋɪʟ
╰•.ᴄᴇʀᴘᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ
╰•.ᴄᴇʀᴘᴇɴ ᴊᴇᴘᴀɴɢ
╰.ᴄᴇʀᴘᴇɴ ᴋᴇʜɪᴅᴜᴘᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ᴋᴇʟᴜᴀʀɢᴀ
╰•.ᴄᴇʀᴘᴇɴ ᴋɪꜱᴀʜɴʏᴀᴛᴀ
╰•.ᴄᴇʀᴘᴇɴ ᴋᴏʀᴇᴀ
╰•.ᴄᴇʀᴘᴇɴ ᴋʀɪꜱᴛᴇɴ
╰•.ᴄᴇʀᴘᴇɴ ʟɪʙᴜʀᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ᴍᴀʟᴀʏꜱɪᴀ
╰•.ᴄᴇʀᴘᴇɴ ᴍᴇɴɢʜᴀʀᴜᴋᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ᴍɪꜱᴛᴇʀɪ
╰•.ᴄᴇʀᴘᴇɴ ᴍᴏᴛɪᴠᴀꜱɪ
╰•.ᴄᴇʀᴘᴇɴ ɴᴀꜱɪʜᴀᴛ
╰•.ᴄᴇʀᴘᴇɴ ᴏʟᴀʜʀᴀɢᴀ
╰•.ᴄᴇʀᴘᴇɴ ᴘᴀᴛᴀʜʜᴀᴛɪ
╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴᴀɴᴛɪᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴᴅɪᴅɪᴋᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴀʟᴀᴍᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴɢᴏʀʙᴀɴᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ᴘᴇɴʏᴇꜱᴀʟᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ᴘᴇʀᴊᴜᴀɴɢᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ᴘᴇʀᴘɪꜱᴀʜᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ᴘᴇʀꜱᴀʜᴀʙᴀᴛᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ᴘᴇᴛᴜᴀʟᴀɴɢᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ʀᴀᴍᴀᴅʜᴀɴ
╰•.ᴄᴇʀᴘᴇɴ ʀᴇᴍᴀᴊᴀ
╰•.ᴄᴇʀᴘᴇɴ ʀɪɴᴅᴜ
╰•.ᴄᴇʀᴘᴇɴ ʀᴏʜᴀɴɪ
╰•.ᴄᴇʀᴘᴇɴ ʀᴏᴍᴀɴᴛɪꜱ
╰•.ᴄᴇʀᴘᴇɴ ꜱᴀꜱᴛʀᴀ
╰•.ᴄᴇʀᴘᴇɴ ꜱᴇᴅɪʜ
╰•.ᴄᴇʀᴘᴇɴ ꜱᴇᴊᴀʀᴀʜ 
────────────────────────
                *</> berita menu </>*
────────────────────────
╭┈──────────────────
╰•.ꜰᴀᴊᴀʀ
╰•.ᴄɴɴ
╰•.ʟᴀʏᴀʀᴋᴀᴄᴀ
╰•.ᴄɴʙᴄ
╰•.ᴛʀɪʙᴜɴ
╰•.ɪɴᴅᴏᴢᴏɴᴇ
╰•.ᴋᴏᴍᴘᴀꜱ
╰•.ᴅᴇᴛɪᴋɴᴇᴡꜱ
╰•.ᴅᴀɪʟʏɴᴇᴡꜱ
╰•.ɪɴᴇᴡꜱ
╰•.ᴏᴋᴇᴢᴏɴᴇ
╰•.ꜱɪɴᴅᴏ
╰•.ᴛᴇᴍᴘᴏ
╰•.ᴀɴᴛᴀʀᴀ
╰•.ᴋᴏɴᴛᴀɴ
╰•.ᴍᴇʀᴅᴇᴋᴀ
╰•.ᴊᴀʟᴀɴᴛɪᴋᴜꜱ-ᴍᴇᴍᴇ
╰•.ɢᴇᴍᴘᴀɴᴇᴡꜱ
╰┈────────────────•
────────────────────────
                  *</> groupmenu </>*
────────────────────────
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
╰────────────── 
────────────────────────
                  *</> funmenu </>*
────────────────────────
╰•_.cekkontol_
╰•_.cekmemek_ 
╰•_.cekkhodam_ 
╰•_.checkme_ 
╰•_.kontol_
╰•_.cabul_ 
╰•_.tolol_ 
╰•_.goblog/goblok_ 
╰•_.idiot_ 
╰•_.gay_
╰•_.jomok_ 
╰•_.bajingan_ 
╰•_.munafik_
╰•_.kontol_
╰•_.yatim_ 
╰•_.poke_ 
╰•_.pembokep_ 
╰•_.fembokef_
╰•_.pengocok_
╰•_.hitam_
╰•_.hytam_ 
╰•_.bego_ 
╰•_.jawa_ 
╰•_.wibu_ 
╰•_.stress_
╰•_.miskin_ 
╰•_.cantik_ 
╰•_.ganteng_
╰•_.setan_
╰•_.manis_
╰•_.babi_ 
╰•_.cina_ 
╰•_.atheis_ 
╰•_.papua_
╰•_.pengentot_ 
╰•_.seksi_ 
╰•_.kawai_ 
╰•_.tercindo_ 
╰•_.cabul_
╰•_.fuckboy_ 
╰•_.fuckgirl_
╰•_.playboy_ 
╰•_.playgirl_
╰•_.sange_
╰•_.hot_
╰•_.sangean_
┗❐──≫
├── [ new fitur ]
├── 
├── myip [ cek ip ]
├── sosmed [ sosmed owner ]
├── brat2 [ buat stiker trend anomali ]
├── nglspam [ spam ngl ]
├── twt [ fake tweeter ]
├── joko [ suara ai jokowi ]
└───────────────────────
                                   📥
────────────────────────
                 *</> saveplugins <\>*
                     *</> cekidch <\>*
                     *</> cekidgc <\>*
                    *</> listgroup <\>*
                        *</> testi <\>*
                 *</> autopromosi <\>*
                   *</> listplugins <\>*
                   *</> delplugins <\>*
                      *</> unblok <\>*
                         *</> blok <\>*
                          *</> enc <\>*

────────────────────────
              *</> creator recode </>*
────────────────────────
╭─ •  「 *HangzMD* 」
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

handler.command = ["allmenu"]

module.exports = handler