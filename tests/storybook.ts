import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'storybookjs/storybook',
		branch: process.env.SUITE_BRANCH || 'next',
		build: 'svelte-ecosystem-ci:build',
		beforeTest: 'svelte-ecosystem-ci:before-test',
		test: 'svelte-ecosystem-ci:test',
		overrides: {
			'@sveltejs/vite-plugin-svelte': false, // storybook uses older Vite version which our newest v-p-s isn't compabitle with
			'@sveltejs/vite-plugin-svelte-inspector': false,
			'@sveltejs/kit': true,
		},
	})
}
