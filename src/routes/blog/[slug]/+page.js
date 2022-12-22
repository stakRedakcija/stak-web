export async function load({ params }) {
	const post = await import(`../${params.slug}.md`)
	const { title, date } = post.metadata
	const content = post.default

	console.log(post.metadata);
	return {
		...post.metadata,
		content,
	}
}