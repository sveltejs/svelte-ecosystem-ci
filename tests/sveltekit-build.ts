import { test as dev } from './sveltekit-dev.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await dev(options, ['test:kit:build'])
}
