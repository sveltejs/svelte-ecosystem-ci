import type { AGENTS } from '@antfu/ni'
export interface EnvironmentData {
	root: string
	workspace: string
	sveltePath: string
	cwd: string
	env: ProcessEnv
}

export interface RunOptions {
	/** Workspace package name to run. */
	workspace: string
	/** Repository root directory. */
	root: string
	/** Local path to the Svelte package. */
	sveltePath: string
	/** Installed Svelte major version. */
	svelteMajor: number
	/** Enable extra verification checks. */
	verify?: boolean
	/** Skip git clone/fetch steps. */
	skipGit?: boolean
	/** Release channel/version to test against. */
	release?: string
	/** Preferred package manager. */
	agent?: (typeof AGENTS)[number]
	/** Build task(s) to run; skipped when omitted. */
	build?: Task | Task[]
	/** Test task(s) to run; skipped when omitted. */
	test?: Task | Task[]
	/** Task(s) to run before installing dependencies. */
	beforeInstall?: Task | Task[]
	/** Task(s) to run before build. */
	beforeBuild?: Task | Task[]
	/** Task(s) to run before test. */
	beforeTest?: Task | Task[]
}

type Task = string | { script: string; args?: string[] } | (() => Promise<any>)

export interface CommandOptions {
	/** Suites to include; runs all when omitted. */
	suites?: string[]
	/** Repository in owner/name format. */
	repo?: string
	/** Git branch to use. */
	branch?: string
	/** Git tag to use. */
	tag?: string
	/** Git commit SHA to use. */
	commit?: string
	/** Release channel/version override. */
	release?: string
	/** Enable verification checks. */
	verify?: boolean
	/** Skip git operations. */
	skipGit?: boolean
}

export interface RepoOptions {
	/** Repository in owner/name format. */
	repo: string
	/** Target directory name for checkout. */
	dir?: string
	/** Git branch to checkout. */
	branch?: string
	/** Git tag to checkout. */
	tag?: string
	/** Git commit SHA to checkout. */
	commit?: string
	/** Perform a shallow clone. */
	shallow?: boolean
	/**
	 * Key is the dependency, value is one of:
	 * - `string`: override dependency source/version (local paths are supported).
	 * - `true`: force-build and override this package from local builds.
	 * - `false`: disable a previously set boolean flag.
	 */
	overrides?: Overrides
}

export interface Overrides {
	[key: string]: string | boolean
}

export interface ProcessEnv {
	[key: string]: string | undefined
}

interface DependencyInfo {
	from: string
	version: string
	resolved: string
	path: string
}
interface PackageInfo {
	name: string
	version: string
	path: string
	private: boolean
	dependencies: Record<string, DependencyInfo>
	devDependencies: Record<string, DependencyInfo>
	optionalDependencies: Record<string, DependencyInfo>
}
