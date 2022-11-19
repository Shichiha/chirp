import { color } from "./dep.ts";

export class Logger {
	// deno-lint-ignore no-explicit-any
	static info(...args: any[]) {
		console.log(color.green("[INFO]\t"), ...args)
	}
	// deno-lint-ignore no-explicit-any
	static error(...args: any[]) {
		console.log(color.red("[ERROR]\t"), ...args)
	}
	// deno-lint-ignore no-explicit-any
	static warn(...args: any[]) {
		console.log(color.yellow("[WARN]\t"), ...args)
	}
}