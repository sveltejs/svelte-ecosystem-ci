import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function build(options: RunOptions) {
	return runInRepo({
		...options,
		repo: 'sveltejs/vite-plugin-svelte',
		branch: 'svelte-4',
		overrides: {
			svelte: 'latest',
		},
		build: 'build',
	})
}

export const packages = {
	'@sveltejs/vite-plugin-svelte': 'packages/vite-plugin-svelte',
}
