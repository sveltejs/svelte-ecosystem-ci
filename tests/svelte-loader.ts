import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltejs/svelte-loader',
		branch: 'master',
		test: 'test',
	})
}
