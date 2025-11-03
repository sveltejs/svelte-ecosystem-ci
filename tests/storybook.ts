import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'storybookjs/storybook',
		branch: 'next',
		build: 'svelte-ecosystem-ci:build',
		beforeTest: 'svelte-ecosystem-ci:before-test',
		test: 'svelte-ecosystem-ci:test',
		overrides: {
			'@sveltejs/vite-plugin-svelte': true,
			'@sveltejs/vite-plugin-svelte-inspector': true,
			'@sveltejs/kit': true,
		},
	})
}
