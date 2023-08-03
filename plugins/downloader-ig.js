import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://www.instagram.com/reel/Co18PSBAmkh/?igshid=MmJiY2I4NDBkZg==`
let ig = await fetch(`https://xzn.wtf/api/igdl?url=${args[0]}&apikey=${api}`)
let json = await ig.json()
let cap = `Caption: ${json.caption}\n${footer}`
conn.sendMessage(m.chat, { video: { url: json.media }, caption: cap }, { quoted: m})
};
handler.help = ['igdl', 'instagram']
handler.tags = ['downloader']
handler.command = /^(igdl|instagram|ig)$/i
handler.limit = true
export default handler