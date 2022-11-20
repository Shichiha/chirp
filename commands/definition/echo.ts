import { SlashCommandPartial } from "../../dep.ts";

const command: SlashCommandPartial = {
	"name": "echo",
	"description": "repeat what you say",
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