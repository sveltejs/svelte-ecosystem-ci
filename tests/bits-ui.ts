import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'huntabyte/bits-ui',
		branch: 'main',
		beforeTest: 'pnpm exec playwright install chromium',
		test: 'pnpm -F tests test:browser --browser chromium',
		overrides: {
			'@sveltejs/vite-plugin-svelte': true,
			'@sveltejs/vite-plugin-svelte-inspector': true,
			'@sveltejs/kit': true,
			'svelte-check': true,
		},
	})
}
