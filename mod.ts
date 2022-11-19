import { Bot } from "./bot.ts";
import { config, Intents } from "./dep.ts";
import { Logger } from "./Logger.ts";

Logger.info("Starting bot...");
const client = new Bot();
const localEnv = Deno.args.includes("--local-env"); // If you want to use a local .env file, pass --local-env as an argument

const token = localEnv ? config()["DISCORD_TOKEN"] : Deno.env.get("DISCORD_TOKEN")

Logger.info(localEnv ? "Using local .env file" : "Using environment variables");
client.connect(token, Intents.None);