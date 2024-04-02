export const load = async ({fetch}) => ({
	posts: await (await fetch('/api/posts')).json()
})