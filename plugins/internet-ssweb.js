import fetch from 'node-fetch';
import axios from 'axios';
import { ssweb } from '../lib/scrape.js'
let handler = async (m, { conn, usedPrefix, command, args }) => {
  if (!args[0]) throw 'Linknya mana?';
  let res = await ssweb(args[0]);
  conn.sendFile(m.chat, res.result, 'ssweb.png', '*「 Screenshot Web 」*', null, { thumbnail: Buffer.alloc(0) });
};

handler.help = ['ssweb'];
handler.tags = ['internet'];
handler.command = /^ss(web)?|scre?e?nshu?o?t$/i;

export default handler;
