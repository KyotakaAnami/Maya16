import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
import { color } from '../lib/color'
import moment from "moment-timezone"
import levelling from '../lib/levelling'
import canvacord from "canvacord"
import fetch from "node-fetch"

export async function before(m) {
		let user = global.db.data.users[m.sender]
		let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
		let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/levelup.jpg");
        let pp = await (await fetch(ppUrl)).buffer();
        let curr = user.exp - min
        let minxp = max - user.exp
		if (!user.autolevelup) return !0
		let before = user.level * 1
		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
        
		if (before !== user.level) {
			let name = user.name
			let chating = `╭─ •  「 🐱 *L E V E L - U P!* 」
│  ◦  From: *${before}* ➠ *${user.level}*
│  ◦  Congrulations, you have leveled up!🎉🎉
╰──── •`.trim()
			const rank = new canvacord.Rank()
            .setAvatar(pp)
            .setCurrentXP(curr)
            .setLevel(user.level, "RANK", true)
            .setRank(user.level, "LEVEL", true)
            .setLevelColor("#2B2E35", "#2B2E35")
            .setRankColor("#FFFFFF", "#6636E5")
            .setRequiredXP(xp)
            .setStatus("streaming")
            .setProgressBar("#6636E5", "COLOR")
            .setProgressBarTrack("#FFFFFF")
            .setUsername(user.name)
            .setDiscriminator(`0001`)
            .setFontSize(1.5)
        
        rank.build()
            .then(data => {
                conn.sendFile(m.chat, data, "RankCard.png", chating, m)
                console.log(color(chating, 'yellow'))
            })
		}
	}
}
export const disabled = true;}