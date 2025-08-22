import { runInRepo } from '../utils.ts'
import { RunOptions } from '../types.js'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'immich-app/immich',
		branch: 'main',
		overrides: {
			'@sveltejs/vite-plugin-svelte': true,
			'@sveltejs/vite-plugin-svelte-inspector': true,
			'@sveltejs/kit': true,
			'svelte-check': true,
		},
		build: [
			'pnpm --dir open-api/typescript-sdk build', // required for web build
			'pnpm --dir web build',
		],
		test: [
			'pnpm --dir web test', // unit & component tests
			'pnpm --dir web check:svelte', // svelte-check
		],
	})
}
