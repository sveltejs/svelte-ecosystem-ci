import { runInRepo } from '../utils.ts'
import { RunOptions } from '../types.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltejs/rollup-plugin-svelte',
		branch: process.env.SUITE_BRANCH || 'master',
		test: 'test',
	})
}
