import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltejs/eslint-plugin-svelte',
		build: 'pnpm --dir packages/eslint-plugin-svelte build',
		test: 'pnpm --dir packages/eslint-plugin-svelte test',
	})
}
