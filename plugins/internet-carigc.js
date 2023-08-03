import { scarigc } from '../lib/scrape.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) throw `🚩 *Example:* ${usedPrefix + command} WhatsApp`;
  m.reply(md);
let anu = await scarigc(text)
let result = anu[Math.floor(Math.random() * anu.length)]
m.reply(`nama: ${result.nama}\nlink: ${result.link}`)
}
handler.help = ['carigc']
handler.tags = ['internet']
handler.command = /^(carigc)$/i
handler.limit = true
export default handler