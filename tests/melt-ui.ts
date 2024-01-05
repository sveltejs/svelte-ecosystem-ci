import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'melt-ui/melt-ui',
		branch: 'develop',
		test: 'pnpm test',
		overrides: {
			'@sveltejs/kit': '^1.22.0', // needed until melt upgrades to SK v2
		},
	})
}
