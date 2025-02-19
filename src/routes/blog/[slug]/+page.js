import fm from 'front-matter';
import MarkdownIt from 'markdown-it';

export async function load({ params }) {
	try {
		const rawPost = await import(`../${params.slug}.md?raw`);
		const { attributes: metadata, body: content } = fm(rawPost.default);

		const contentWithoutImports = content
			.split('\n')
			.filter(line => !line.trim().startsWith('import '))
			.join('\n');

		const md = new MarkdownIt();
		let html = md.render(contentWithoutImports);

		html = html.replace(/<script[\s\S]*?<\/script>/gi, '');
		html = html.replace(/&lt;script&gt;[\s\S]*?&lt;\/script&gt;/gi, '');

		let textContent = html.replace(/<[^>]+>/g, '');
		textContent = textContent
			.split('\n')
			.filter(line => !line.trim().startsWith('import '))
			.join(' ');

		const sentences = textContent.split(/(?<=[.!?])\s+/);
		const ogDescription = sentences.slice(0, 2).join(' ').trim();

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
