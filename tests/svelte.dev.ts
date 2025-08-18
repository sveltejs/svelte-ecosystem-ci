import { runInRepo } from '../utils.ts'
import { RunOptions } from '../types.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltejs/svelte.dev',
		branch: 'main',
		build: 'build',
		test: ['test', 'check'],
		overrides: {
			'@sveltejs/kit': true,
			'svelte-check': true,
			'@sveltejs/vite-plugin-svelte': true,
		},
	})
}
