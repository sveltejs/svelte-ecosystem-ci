import { runInRepo } from '../utils.ts'
import { RunOptions } from '../types.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'skeletonlabs/skeleton',
		branch: 'main',
		build: 'pnpm --dir packages/skeleton-svelte build',
		beforeTest: 'pnpm --dir packages/skeleton-svelte exec playwright install',
		test: ['test', 'check'].map(
			(script) => `pnpm --dir packages/skeleton-svelte ${script}`,
		),
		overrides: {
			'svelte-check': true,
			'@sveltejs/kit': true,
			'@sveltejs/vite-plugin-svelte': true,
		},
	})
}
