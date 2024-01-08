import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'TanStack/query',
		branch: 'main',
		test: 'pnpm nx run-many -t test:lib -p @tanstack/svelte-query --skip-nx-cache',
		build: 'pnpm nx run-many -t build -p @tanstack/svelte-query --skip-nx-cache',
	})
}
