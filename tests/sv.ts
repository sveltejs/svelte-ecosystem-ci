import { runInRepo } from '../utils.ts'
import { RunOptions } from '../types.js'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltejs/cli',
		branch: 'main',
		build: 'pnpm build',
		beforeTest:
			'pnpm playwright install chromium && pnpx storybook@latest --version', // prefetch the storybook cli to reduce fetching errors in tests
		test: 'pnpm test',
	})
}
