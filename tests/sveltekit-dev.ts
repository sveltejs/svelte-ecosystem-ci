import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(
	options: RunOptions,
	tasks = [
		'test:kit:unit',
		'test:kit:dev',
		'lint',
		'pnpm --dir packages/kit check',
	],
) {
	await runInRepo({
		...options,
		repo: 'sveltejs/kit',
		branch: 'main',
		overrides: {
			'@sveltejs/vite-plugin-svelte': true,
			'@sveltejs/load-config': true,
			'svelte-check': true,
		},
		beforeTest: 'pnpm playwright install chromium',
		test: tasks,
	})
}
