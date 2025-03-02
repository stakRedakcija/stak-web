export const load = async ({ fetch }) => {
	const response = await fetch('/api/posts')
	const posts = await response.json()

	return {
		posts: posts.stak.filter((post) => post?.meta?.featured)
	}
}