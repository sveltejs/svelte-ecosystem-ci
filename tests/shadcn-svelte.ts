import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'huntabyte/shadcn-svelte',
		build: ['pnpm build:cli', 'pnpm build:docs'],
		test: 'pnpm --filter shadcn-svelte test',
		overrides: {
			'@sveltejs/vite-plugin-svelte': false, // shadcn-svelte uses older Vite version which our newest v-p-s isn't compabitle with
			'@sveltejs/vite-plugin-svelte-inspector': false,
			'@sveltejs/kit': true,
		},
	})
}
