import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'carbon-design-system/carbon-components-svelte',
		branch: 'master',
		build: 'build:lib',
		overrides: {
			'rollup-plugin-svelte': true,
			'svelte-check': true,
		},
		test: 'test:types',
	})
}
