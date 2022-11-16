import { SlashCommandPartial } from "./dep.ts"
import ping from "./commands/ping.ts"
import getpfp from "./commands/getpfp.ts"
import randompfp from "./commands/randompfp.ts"
import uptime from "./commands/uptime.ts"

export const commands: SlashCommandPartial[] = [
    ping, getpfp, randompfp, uptime
];
