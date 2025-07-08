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
			vite: '^7.0.0', // use latest vite, workspace still has 5.x as of adding this, remove later
			vitest: '^3.2.0', // needed by vite@7
		},
	})
}
