import axios from 'axios';
import fetch from 'node-fetch';
import fs from 'fs';
import FormData from 'form-data';
import uploadImage from '../lib/uploadImage.js';

const handler = async (m, { conn, usedPrefix, command, text }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw 'Send/Reply Images with the caption *.jadianime*';
conn.sendMessage(m.chat, {
    react: {
        text: 'ðŸ•’',
        key: m.key,
    }
})
  let media = await q.download();
  let url = await uploadImage(media);
  let styles = ['anime', 'angel', 'princess', 'manhwa_female', 'manhwa_male'];

  let sendPromises = styles.map(async (style) => {
    const queryParams = {
      style: style,
      json: false,
    };

    const response = await fetch(url);
    const buffer = await response.buffer();

    const form = new FormData();
    form.append('file', buffer, {
      filename: 'image.jpg',
      contentType: 'image/jpeg',
      knownLength: buffer.length,
    });

    const { data } = await axios
      .request({
        baseURL: 'https://api.itsrose.life',
        url: '/image/differentMe',
        method: 'POST',
        params: {
          ...queryParams,
          apikey: global.rose,
        },
        data: form,
        responseType: 'arraybuffer', 
      })
      .catch((e) => e?.response?.data);

    if (!data) {

      throw 'Failed to process image.';
    }

    const resultBuffer = Buffer.from(data, 'binary'); 

    let caption = `STYLE: ${style.replace(/_/g, ' ').toUpperCase()}`;

    return conn.sendFile(m.chat, resultBuffer, 'ppk.jpg', caption, m);
  });
  await Promise.all(sendPromises);
};

handler.help = ['jadianime'];
handler.tags = ['tools'];
handler.command = /^(jadianime)$/i;
handler.limit = true;

export default handler