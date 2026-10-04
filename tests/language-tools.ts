import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'sveltejs/language-tools',
		branch: 'master',
		beforeBuild: 'bootstrap',
		build: 'build',
		test: 'test',
	})
}
