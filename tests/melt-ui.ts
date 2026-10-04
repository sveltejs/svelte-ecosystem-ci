import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'melt-ui/next-gen',
		beforeTest: 'pnpm exec playwright install',
		test: 'pnpm test',
	})
}
