const fs = require('fs');
const path = require('path');

// Path ke file players.json
const playersFile = path.join(__dirname, 'players.json');

// Fungsi untuk membaca file JSON
const readPlayers = () => {
    if (!fs.existsSync(playersFile)) return [];
    return JSON.parse(fs.readFileSync(playersFile));
};

// Fungsi untuk menyimpan ke file JSON
const writePlayers = (data) => {
    fs.writeFileSync(playersFile, JSON.stringify(data, null, 2));
};

// Fungsi untuk memastikan data pemain sudah tersimpan
const getPlayer = (phoneNumber) => {
    let players = readPlayers();
    let player = players.find(p => p.id === phoneNumber);
    if (!player) {
        // Data default pemain baru
        player = {
            nama: `Player_${phoneNumber}`,
            id: phoneNumber,
            titel: "Pemula",
            level: 1,
            exp: 0,
            health: 100,
            maxhealth: 100,
            saldo: 10000, // Mata uang Rupiah default
            pet: null,
            inv: []
        };
        players.push(player);
        writePlayers(players);
    }
    return player;
};

// Handler untuk RPG Menu
let handler = async (m, { command, Ditss }) => {
    let phoneNumber = m.sender.split('@')[0]; // Mengambil nomor telepon
    let player = getPlayer(phoneNumber);

    let menu = `
*📜 RPG MENU 📜*
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

*Ketik perintah salah satu fitur di atas!*
`;
    m.reply(menu);
};

// Menangani perintah RPG Menu
handler.command = ['rpgmenu'];

module.exports = handler;