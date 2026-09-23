import { runInRepo } from '../utils.ts'
import { RunOptions } from '../types.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltejs/kit',
		branch: 'version-3',
		overrides: {
			'@sveltejs/vite-plugin-svelte': true,
			'@sveltejs/load-config': true,
			'svelte-check': true,
		},
		beforeTest: 'pnpm playwright install chromium',
		test: ['test:vite-ecosystem-ci', 'pnpm --dir packages/kit check'],
	})
}
