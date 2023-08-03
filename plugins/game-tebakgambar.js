import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.tebakingambar = conn.tebakingambar ? conn.tebakingambar : {}
    let id = m.chat
    if (id in conn.tebakingambar) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakingambar[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/KyotakaAnami/Jjjj/main/tebakgambar.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  let caption = `*${command.toUpperCase()}*
Rangkailah Gambar Ini

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hgam untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakingambar[id] = [
        await conn.sendFile(m.chat, json.img, null, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakingambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakingambar[id][0])
            delete conn.tebakingambar[id]
        }, timeout)
    ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

export default handler