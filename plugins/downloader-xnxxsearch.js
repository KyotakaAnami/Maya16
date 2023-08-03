import fetch from 'node-fetch';
import { xnxxsearch } from '../lib/xnxx.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw 'Enter search text';
  let result = await xnxxsearch(text);
  m.reply(`
Title: ${result.title}
Info: ${result.info}
Link: ${result.link}
  `);
};
handler.help = ['xnxxsearch'].map(v => v + ' <query>')
handler.tags = ['downloader']
handler.command = /^xnxxsearch$/i;
handler.premium = true
export default handler