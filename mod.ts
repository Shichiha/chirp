import { Bot } from "./bot.ts";
import { config, Intents } from "./dep.ts";

const client = new Bot();
client.connect(config()["DISCORD_TOKEN"], Intents.None);