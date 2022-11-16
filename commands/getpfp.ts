import { SlashCommandPartial } from "../dep.ts";

const command: SlashCommandPartial = {
	"name": "getpfp",
	"description": "Get a user's profile picture",
	"options": [{
		"name": "user",
		"description": "The user to get the profile picture of",
		"type": "USER",
		"required": true
	}]
}

export default command;