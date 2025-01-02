const { google } = require('googleapis');
const axios = require('axios');

let handler = async (m, { Ditss, text }) => {
    if (!text || text.trim() === "") {
        return m.reply(`*Contoh Penggunaan:*\n.play judul_lagu`);
    }

    const apiKey = 'AIzaSyD7udF0cFgtkrQyI6n23lPBB4NgDYF0DMM'; // Ganti dengan API Key Anda
    const youtube = google.youtube({
        version: 'v3',
        auth: apiKey,
    });

    try {
        // Pencarian video YouTube berdasarkan teks
        const res = await youtube.search.list({
            part: 'snippet',
            q: text,
            maxResults: 1,
            type: 'video',
        });

        if (!res.data.items.length) {
            return m.reply('Audio tidak ditemukan. Silakan coba kata kunci lain.');
        }

        const video = res.data.items[0];
        const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
        const title = video.snippet.title;
        const thumbnail = video.snippet.thumbnails.high.url;

        // Kirim informasi ke pengguna
        m.reply(`🔍 *Hasil Pencarian:*\n\n◦ *Judul*: ${title}\n◦ *URL*: ${videoUrl}\n\n\n *INFORMATION*\n ◦ *Instagram*: ${global.instagram}\n ◦ *Name Bot*: ${global.botname}`);
        m.reply('Sedang download audio, tunggu sebentar...');

        // Mengambil audio menggunakan API siputzx.my.id
        const encodedUrl = encodeURIComponent(videoUrl);
        const resApi = await axios.get(`https://api.siputzx.my.id/api/d/ytmp3?url=${encodedUrl}`);
        const result = resApi.data;

        if (!result.status || !result.data || !result.data.dl) {
            return m.reply('Gagal mendapatkan audio dari link tersebut. Pastikan URL benar.');
        }

        // Kirimkan audio yang berhasil didownload
        const audioUrl = result.data.dl;
        await Ditss.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: 'audio/mpeg',
            contextInfo: {
                externalAdReply: {
                    title: title,
                    body: '',
                    thumbnailUrl: thumbnail,
                    sourceUrl: videoUrl,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });

    } catch (e) {
        console.error("Error pada handler YouTube Music:", e);
        m.reply(`Terjadi kesalahan:\n${e.message}`);
    }
};

handler.command = handler.help = ['play2', 'song', 'ds'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;

module.exports = handler;