export function stringify_package_json(
	pkg: Record<string, unknown>,
	original: string,
): string {
	const newline = original.includes('\r\n') ? '\r\n' : '\n'
	const multiline = original.trim().includes('\n')
	const indent = multiline
		? (/(?:^|\n)([ \t]+)"/.exec(original)?.[1] ?? '  ')
		: undefined
	const content = JSON.stringify(pkg, null, indent).replace(/\n/g, newline)
	return content + (original.endsWith('\n') ? newline : '')
}
