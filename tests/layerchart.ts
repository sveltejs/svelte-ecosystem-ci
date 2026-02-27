import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'techniq/layerchart',
		branch: 'main',
		build: 'pnpm build',
		test: 'pnpm --dir packages/layerchart test:unit',
		overrides: {
			'@sveltejs/vite-plugin-svelte': true,
			'@sveltejs/vite-plugin-svelte-inspector': true,
			'@sveltejs/kit': true,
			'svelte-check': true,
		},
	})
}
