import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'pngwn/MDsveX',
		build: 'pnpm --filter=!incremental-parse-test -r build',
		test: 'pnpm test:run:vitest',
	})
}
