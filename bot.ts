import { ApplicationCommandInteraction, Client, event, Interaction, slash, User } from "./dep.ts";
import { commands } from "./commands.ts"
import { Logger } from "./Logger.ts";

export class Bot extends Client {
	@event()
	ready() {
		Logger.info("Ready as " + this.user?.tag); // Bot is by this point ready to go
		this.guilds.size().then((size) => Logger.info("Serving " + size + ` guild${size === 1 ? "" : "s"}`));
		commands.forEach(command => {this.slash.commands.create(command); Logger.info(`Created command ${command.name}`)})
	}



	@slash()
	getpfp(i: ApplicationCommandInteraction) {
		const user = i.option<User>("user")
		i.reply(user.avatarURL("png", 2048))
	}

	@slash()
	async randompfp(i: Interaction) {
		const ran = Math.floor(Math.random() * i.guild?.memberCount!)
		const members = await i.guild?.members.fetchList(1000)!

		const member = members[ran]
		i.reply(member.user.avatarURL("png", 2048))
	}

	@slash("uptime")
	sendUptime(i: Interaction) {
		i.reply(`Uptime: ${Math.floor((Date.now() - this.upSince!.getTime()) / 1000 / 60 / 60 / 24)} days`)
	}

	@slash()
	invite(i: Interaction) {
		i.reply(`https://discord.com/oauth2/authorize?client_id=${this.user?.id}&scope=applications.commands%20bot&permissions=8`)
	}

	@slash()
	quack(i: Interaction) {
		i.reply("Quack!")
	}

	@slash()
	echo(i: ApplicationCommandInteraction) {
		const message = i.option<string>("message")
		i.reply(message)
	}

	@slash()
	silentecho(i: ApplicationCommandInteraction) {
		const message = i.option<string>("message")
		i.channel?.send(message)
	}
		
}