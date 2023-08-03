let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(`Ya bot disni jika ingin menggunakan bot type .menu?`)
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp
export default handler

