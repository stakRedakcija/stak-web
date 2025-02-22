import fm from 'front-matter';
import MarkdownIt from 'markdown-it';

function _phpCastString(value) {

	const type = typeof value

	switch (type) {
		case 'boolean':
			return value ? '1' : ''
		case 'string':
			return value
		case 'number':
			if (isNaN(value)) {
				return 'NAN'
			}

			if (!isFinite(value)) {
				return (value < 0 ? '-' : '') + 'INF'
			}

			return value + ''
		case 'undefined':
			return ''
		case 'object':
			if (Array.isArray(value)) {
				return 'Array'
			}

			if (value !== null) {
				return 'Object'
			}

			return ''
		case 'function':
		// fall through
		default:
			throw new Error('Unsupported value type')
	}
}

function stripTags(input, allowed) {
	// making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
	allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('')

	const tags = /<\/?([a-z0-9]*)\b[^>]*>?/gi
	const commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi

	let after = _phpCastString(input)
	// removes tha '<' char at the end of the string to replicate PHP's behaviour
	after = after.substring(after.length - 1) === '<' ? after.substring(0, after.length - 1) : after

	// recursively remove tags to ensure that the returned string doesn't contain forbidden tags after previous passes (e.g. '<<bait/>switch/>')
	while (true) {
		const before = after
		after = before.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
			return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
		})

		// return once no more tags are removed
		if (before === after) {
			return after
		}
	}
}

export async function load({ params }) {
	try {
		const rawPost = await import(`../${params.slug}.md?raw`);
		const { attributes: metadata, body: content } = fm(rawPost.default);

		const html = stripTags(content);

		let ogDescription = html.slice(0, 150).trim();
		if (ogDescription.length === 150) {
			ogDescription = `${ogDescription}...`;
		}

		if ((metadata?.excerpt ?? '').length > 0) {
			ogDescription = metadata.excerpt;
		}

		ogDescription = ogDescription.replace(/(\r\n|\n|\r)/gm, " ");

		const post = await import(`../${params.slug}.md`);

		return {
			...metadata,
			content: post.default,
			ogDescription,
			slug: params.slug
		};
	} catch (error) {
		console.error("Failed to load post:", error);
		return { status: 404, error: new Error("Post not found") };
	}
}
