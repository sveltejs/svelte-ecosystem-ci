import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'TanStack/query',
		branch: 'main',
		test: 'pnpm pnpm nx run-many -t test:lib -p @tanstack/svelte-query',
		build: 'pnpm pnpm nx run-many -t build -p @tanstack/svelte-query',
	})
}
