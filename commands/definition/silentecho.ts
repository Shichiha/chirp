import { SlashCommandPartial } from "../../dep.ts";

const command: SlashCommandPartial = {
	"name": "silentecho",
	"description": "no one will know you said this",
	"options": [
		{
			"name": "message",
			"description": "The message to echo",
			"type": "STRING",
			"required": true
		}
	]
}

export default command;