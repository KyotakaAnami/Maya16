import { xnxxdl } from '../lib/xnxx.js'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw n`Enter link Example: ${usedPrefix+command} https://www.xnxx.com/video-yj49pc2/_av_ver_2_osakaporn`
  m.reply(`hello, the video is being sent to a private chat so it doesn't harm other people, I mean let you down so you can do it alone, without inviting others'🗿 hehe`);
  let result = await xnxxdl(text);
  let caption = `
Title: ${result.title}
Info: ${result.info}
Duration: ${result.duration}
Url: ${result.URL}`
  conn.sendMessage(m.sender, { video: { url: result.files.high }, caption: caption }, { quoted: m });
await delay(5000); 
conn.reply(m.chat, `the video has been successfully sent to a private chat, enjoy it, watch it, be careful, don't col uncle, it's not good 🤭`)
}
handler.help = ['xnxxdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^xnxxdl$/i;
handler.premium = true
export default handler;
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
