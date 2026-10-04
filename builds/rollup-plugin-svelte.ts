import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function build(options: RunOptions) {
	return runInRepo({
		...options,
		repo: 'sveltejs/rollup-plugin-svelte',
		branch: 'main',
	})
}

export const packages = {
	'rollup-plugin-svelte': '.',
}
