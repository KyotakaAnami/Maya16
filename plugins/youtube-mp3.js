/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

import ytdl from 'ytdl-core'
import fs from 'fs'
import ffmpeg from 'fluent-ffmpeg'

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '*Example*: .ytmp3 https://www.youtube.com/xxxxx', m);
  let valid = await ytdl.validateURL(text);
  if (!valid) return conn.reply(m.chat, '🐱 The link entered is invalid', m);

	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  try {
    let info = await ytdl.getInfo(text);
    let title = info.videoDetails.title.replace(/[^\w\s]/gi, '');

    let audio = ytdl(text, { quality: 'highestaudio' });

    ffmpeg(audio)
      .toFormat('mp3')
      .on('end', () => {
        let buffer = fs.readFileSync(`${title}.mp3`);
        conn.sendFile(m.chat, buffer, `${title}.mp3`, '', m);
        fs.unlinkSync(`${title}.mp3`);
      })
      .on('error', (err) => {
        console.log(err);
        conn.reply(m.chat, `🐱 There was an error changing the audio: ${err.message}`, m);
      })
      .saveToFile(`${title}.mp3`);
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, `🐱 An error occurred while downloading the video: ${e.message}`, m);
  }
};

handler.help = ['ytmp3'];
handler.tags = ['downloader'];
handler.command = /^ytmp3$/i;

export default handler