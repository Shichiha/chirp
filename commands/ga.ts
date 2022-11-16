import { SlashCommandPartial } from "../dep.ts";

const command: SlashCommandPartial = {
	"name": "ga",
	"description": "Use genshin achievement maker to get a custom achievement based on your input",
	"options": [{
		"name": "text",
		"description": "the text in the achievement",
		"type": "STRING",
		"required": true
	}]
}

export default command;