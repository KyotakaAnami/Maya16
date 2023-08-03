import { createHash } from 'crypto'

let handler = async function (m, { args, usedPrefix, command }) {
  if (!args[0]) {
    return m.reply(`
🚫 *Please enter the Serial Number code.*
Example: *${usedPrefix}${command} 12345678*
    `)
  }

  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')

  if (args[0] !== sn) {
    return m.reply(`
🚫 *Incorrect Serial Number Code.*
Please enter the correct code.
Example: *${usedPrefix}${command} 12345678*
    `)
  }

  user.registered = false

  return m.reply(`
✅ *You managed to unreg.*
Thank you for using our service.
  `)
}

handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler
