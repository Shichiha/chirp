import { ApplicationCommandInteraction, Client, event, Interaction, slash, User } from "./dep.ts";
import { commands } from "./commands.ts"

export class Bot extends Client {
	@event()
	ready() {
		console.log("Ready as " + this.user?.tag);
		this.guilds.size().then((size) => {
			console.log("Serving " + size + " guilds");
		});
		commands.forEach(command => {
			this.slash.commands.create(command)
		})
	}

	@slash()
	ping(i: Interaction) {
		i.reply("Loading...").then((msg) => {
			msg.editResponse("Pong! " + Math.abs(Date.now() - i.timestamp.getTime()) * -1 + "ms");
		});
	}

	@slash()
	getpfp(i: ApplicationCommandInteraction) {
		const user = i.option<User>("user")
		i.reply(user.avatarURL("png", 2048))
	}

	@slash()
	randompfp(i: Interaction) {
		const ran = Math.floor(Math.random() * i.guild?.memberCount!)
		i.guild?.members.fetchList(1000).then((members) => {
			i.reply(members[ran].user.avatarURL("png", 2048))
		})
	}

	@slash("uptime")
	sendUptime(i: Interaction) {
		const upSince = this.upSince?.getTime()!
		const now = Date.now()
		const diff = now - upSince
		const seconds = Math.floor(diff / 1000)
		const minutes = Math.floor(seconds / 60)
		const hours = Math.floor(minutes / 60)
		const days = Math.floor(hours / 24)
		i.reply(`Uptime: ${days} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`)
	}
}
