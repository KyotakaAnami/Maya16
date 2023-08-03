import axios from 'axios';
import { sgempa } from '../lib/scrape.js'

let handler = async (m, { conn }) => {
  let res = await sgempa();
  let json = res.data;
m.reply('_Sedang Mendeteksi Gempa_')  
  let deteksi = `*Earthquake Details*
*${htjava}* *Tanggal :* ${json.waktu}
*${htjava}* *Jam :* ${json.waktu}
*${htjava}* *Datetime :* ${json.datetime}
*${htjava}* *Coordinates :* ${json.lintang_bujur}
*${htjava}* *Lintang :* ${json.lintang_bujur.split(',')[0]}
*${htjava}* *Bujur :* -
*${htjava}* *Magnitude :* ${json.magnitude}
*${htjava}* *Kedalaman :* ${json.kedalaman}
*${htjava}* *Potensi :* -
*${htjava}* *Dirasakan :* ${json.dirasakan}
*${htjava}* *Wilayah :* ${json.wilayah}
`;

  conn.sendFile(m.chat, json.imagemap, null, deteksi, null, true);
};

handler.help = ['infogempa']
handler.tags = ['info']
handler.command = /^(infogempa|gempa)$/i

export default handler