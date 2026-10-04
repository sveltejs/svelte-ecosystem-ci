import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltejs/vite-plugin-svelte',
		beforeTest: 'pnpm playwright install chromium',
		test: ['check:lint', 'check:types', 'test'],
		overrides: {
			'@sveltejs/load-config': true,
			'svelte-check': true,
			'@sveltejs/kit': false, // vite-plugin-svelte is still on kit 2
		},
	})
}
