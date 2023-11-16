export async function load({ params }) {
	const post = await import(`../${params.slug}.md`)

	return {
		...post.metadata,
		content: post.default
	}
}
