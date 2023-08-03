/*
* Nama Pengembang: Sazumi Viki
* Kontak Whatsapp: wa.me/6285236226786
* Kontak Telegram: t.me/sazumiviki
* Akun Github: github.com/SazumiVicky
* Catatan: tolong laporkan kepada saya ketika anda menemukan ada yang menjual script ini
*/

import axios from "axios"
let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example:* .ai how to get a girlfriend'

	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
// the body data is same like openai have.
const payloads = {
	model: "gpt-4",

	// more higher more smart/uncute conversation
	max_tokens: 200,

	// example of setting the system role;
	// then you can add user role;
	messages: [
		{
			role: "system",
			content:
				"You are AI Assistant name Ayaka Ai. You can understand different languages, but you prefer to speak Indonesian language. Your personality: Fun, like making jokes, casual. You help people with any questions they ask. you were created by your owner Sazumi Viki.",
		},
	],
};

// Push the user question to { messages };
const question = text;
payloads["messages"].push({
	role: "user",
	content: question,

	// also you can set object { name } if using gpt-4
	name: "makemeow",
});

// make a question to our api
const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/chatGPT/turbo",
		method: "POST",
		params: {
			apikey: global.rose,
		},
		headers: {
			"Content-Type": "application/json",
		},
		data: payloads,
	})
	.catch((e) => e?.response);

const { status, message, result } = data;

if (!status) {
	// error
	return m.reply(message);
}
let ai = result.messages.content
m.reply(ai);
}

handler.command = /^ai$/i
handler.help = ['ai <text>']
handler.tags = ['tools']
handler.register = true
handler.limit = true

export default handler