import { runInRepo } from '../utils.ts'
import { RunOptions } from '../types.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltejs/kit',
		branch: 'fix-ecosystem-ci',
		overrides: {
			'@sveltejs/vite-plugin-svelte': '^4.0.2',
			'@sveltejs/vite-plugin-svelte-inspector': '^3.0.1',
		},
		beforeTest: 'pnpm playwright install',
		test: ['lint', 'check', 'test:vite-ecosystem-ci'], // TODO do we want another set of tests for svelte?
	})
}
