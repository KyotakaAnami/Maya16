import { twitter } from '../lib/scrape.js'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 if (!text) throw `🚩 *Example:* ${usedPrefix+command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
    m.reply(md)
    let spas = "                "
    let ler = await twitter(text)
	let cap = `${spas}*「 T W I T T E R 」*
Desc ${ler.desc}

${footer}`
conn.sendMessage(m.chat, { video: { url: ler.SD }, caption: cap }, { quoted: m})
};
handler.help = ['twitter2'].map((v) => v + ' <url>')
handler.tags = ['downloader'];
handler.command = /^twitter2$/i
handler.limit = true

export default handler
