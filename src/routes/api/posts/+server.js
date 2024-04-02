import {fetchMarkdownPosts} from '$lib/utils'
import {json} from '@sveltejs/kit'

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts()

	allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date)
	})

	const out = {stak: [], sponsored: [], linked: {}}
	allPosts.forEach((post) => {
		if (post.meta.linked) {
			if (!Array.isArray(out.linked[post.meta.linked])) {
				out.linked[post.meta.linked] = []
			}
			out.linked[post.meta.linked].push(post)
		} else {
			out[post.meta.sponsored ? 'sponsored' : 'stak'].push(post)
		}
	})
	return json(out)
}