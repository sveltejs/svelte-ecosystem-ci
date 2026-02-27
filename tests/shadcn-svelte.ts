import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'huntabyte/shadcn-svelte',
		branch: 'main',
		build: 'pnpm build:cli && pnpm build:docs',
		test: 'pnpm --filter shadcn-svelte test',
		overrides: {
			'@sveltejs/vite-plugin-svelte': true,
			'@sveltejs/vite-plugin-svelte-inspector': true,
			'@sveltejs/kit': true,
		},
	})
}
