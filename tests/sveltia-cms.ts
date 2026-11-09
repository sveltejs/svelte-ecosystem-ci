import os from 'node:os'
import path from 'node:path'
import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltia/sveltia-cms',
		// The build runs `tsc src/lib/main.js ...`, which TypeScript 6 refuses to do while a
		// tsconfig.json exists in any parent directory — and the workspace has one. Clone outside it.
		dir: path.join(os.tmpdir(), 'svelte-ecosystem-ci', 'sveltia-cms'),
		build: 'build',
		beforeTest: 'pnpm exec playwright install chromium',
		test: ['test', 'test:e2e', 'check:svelte'],
	})
}
