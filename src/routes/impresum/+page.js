export async function load() {
	const impresum = await import('./impresum.md')

	return {
		...impresum.metadata,
		content: impresum.default
	}
}
