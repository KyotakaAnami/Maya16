import axios from 'axios'
import { npmstalk } from '../lib/scrape.js'
let handler = async (m, { conn, args, text, usedPrefix, command  }) => {
if (!text) return m.reply(`Example :\n${usedPrefix+command} kirbotz-api`)
m.reply(md)
let eha = await npmstalk(text)
m.reply(`*/ STALKING NPM \\*

Nama : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
handler.help = ['npmstalk'].map(v => v + ' <username>')
handler.tags = ['stalker']
handler.command = /^npmstalk$/i
handler.limit = true
export default handler

