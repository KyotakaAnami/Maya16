import { spinterest2 } from '../lib/scrape.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) throw `🚩 *Example:* ${usedPrefix + command} kawai`;
  m.reply(md);
let anu = await spinterest2(text)
let result = anu[Math.floor(Math.random() * anu.length)]
conn.sendMessage(m.chat, { image: { url: result }, caption: `*text:* ${text}\n\n*result:* ${result}` }, { quoted: m })     
}
handler.help = ['pinterest2']
handler.tags = ['internet']
handler.command = /^(pinterest2)$/i
handler.limit = true
export default handler

