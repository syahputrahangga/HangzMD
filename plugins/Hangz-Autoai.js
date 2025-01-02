// Plugins 
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const yts = require('yt-search');
let handler = async (m, { Ditss, text }) => {
    // Inisialisasi objek autoai jika belum ada
    Ditss.autoai = Ditss.autoai || {};
 
    if (!text) throw `*• Example:* .asisten *[on/off]*`;
 
    if (text.toLowerCase() === "on") {
        Ditss.autoai[m.sender] = {
            pesan: []
        };
        m.reply("[ ✓ ] Success create session chat");
    } else if (text.toLowerCase() === "off") {
        delete Ditss.autoai[m.sender];
        m.reply("[ ✓ ] Success delete session chat");
    } else {
        throw `*• Example:* .autoai *[on/off]*`;
    }
};
 
handler.before = async (m, { Ditss }) => {
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
            `https://restapii.rioooxdzz.web.id/api/gptlogic?message=${encodeURIComponent(m.text)}&prompt=${encodeURIComponent(prompt)}`
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
        const laguUrl = res.data.download;
 
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
}
handler.command = ['asisten'];

module.exports = handler