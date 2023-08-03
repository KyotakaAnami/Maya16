import axios from 'axios'
import cheerio from 'cheerio'
import { igstalk } from '../lib/scrape.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Gunakan format ${usedPrefix}${command} [zzyko_04]
Contoh: ${usedPrefix}${command} zykomd
`.trim()
  let res = await igstalk(args[0])
  let json = JSON.parse(JSON.stringify(res))
  let iggs = `*/ STALKING INSTAGRAM \\*
  
▢ *Username:* ${json.username}
▢ *Nickname:* ${json.fullName}
▢ *Followers:* ${json.followers}
▢ *Following:* ${json.following}
▢ *Posting:* ${json.postsCount}
▢ *Link:* https://instagram.com/${json.username}
▢ *Bio:* ${json.bio}
`.trim() // tambahin sendiri json.blablabla :)
  conn.sendFile(m.chat, json.profilePicHD, 'error.jpg', iggs, m)
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['stalker']
handler.command = /^(igstalk)$/i
handler.limit = true

export default handler 

