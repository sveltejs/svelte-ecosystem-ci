import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltejs/rollup-plugin-svelte',
		branch: 'main',
		test: 'test',
	})
}
