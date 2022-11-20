import { SlashCommandPartial } from "./dep.ts"
import ping from "./commands/definition/ping.ts"
import getpfp from "./commands/definition/getpfp.ts"
import randompfp from "./commands/definition/randompfp.ts"
import uptime from "./commands/definition/uptime.ts"
import invite from "./commands/definition/invite.ts"
import quack from "./commands/definition/quack.ts"
import echo from "./commands/definition/echo.ts"
import silentecho from "./commands/definition/silentecho.ts"
export const commands: SlashCommandPartial[] = [ ping, getpfp, randompfp, uptime, invite, quack, echo, silentecho ];
