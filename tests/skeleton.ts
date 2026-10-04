import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'skeletonlabs/skeleton',
		build: 'pnpm --dir packages/skeleton-svelte build',
		beforeTest: 'pnpm exec playwright install chromium',
		test: ['exec vitest run', 'check'].map(
			(script) => `pnpm --dir packages/skeleton-svelte ${script}`,
		),
	})
}
