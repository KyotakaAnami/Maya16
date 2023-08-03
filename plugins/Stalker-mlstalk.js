import axios from 'axios'
import { mlstalk } from '../lib/scrape.js'
let handler = async (m, { conn, args, text, usedPrefix, command  }) => {
if (!text) return m.reply(`Contoh ${usedPrefix+command} 530793138|8129`)
m.reply(md)
let dat = await mlstalk(text.split("|")[0], text.split("|")[1])
m.reply(`*/ STALKING MOBILE LEGEND \\*

Username : ${dat.userName}
Id : ${text.split("|")[0]}
Zoneid : ${text.split("|")[1]}`)
}
handler.help = ['mlstalk'].map(v => v + ' <id>')
handler.tags = ['stalker']
handler.limit = true
handler.command = /^(mlstalk)$/i
export default handler
