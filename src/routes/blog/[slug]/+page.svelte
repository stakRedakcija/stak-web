<script>
	export let data;
	const { content, author, date: rawDate, image, title } = data;

	const dateData = new Date(rawDate);
	const date = new Intl.DateTimeFormat('hr-HR', { dateStyle: 'long' }).format(dateData);

	
</script>

<article class="p-10 md:p-20">
	<a style="font-stretch: 150%;" class="text-base" href="/blog"><span class="text-amber-700 dark:text-amber-200">&larr;</span> Blog</a>

	<div class="flex flex-col md:grid grid-cols-2 grid-rows-[1.75fr_2fr] max-w-screen-xl mx-auto md:mb-32">
		<div class="col-[1_/_span_2] row-[1_/_span_2] -rotate-2 md:-rotate-6 relative max-w-screen-lg">
			<img class="relative aspect-video dark:saturate-50 dark:brightness-50 object-cover w-full border-[12px] border-white rounded-2xl shadow-md after:content-['_'] after:bg-gradient-to-tr after:from-white/0 after:to-white/100 after:w-full after:h-full after:absolute after:inset-0 after:z-10" src={image} alt={title}>
			
		</div>
	
		<div class="col-[1_/_span_2] row-[2] drop-shadow-2xl justify-self-end max-md:px-6 max-md:-my-10 max-md:pb-32 md:translate-y-20 rotate-1">
			<div class="torn-paper-5 paper-bg px-6 py-8 md:px-14 md:py-10 max-w-4xl">
				<h1 class="wide-title text-7xl text-amber-600 dark:text-amber-100 mb-8 tracking-tight">{title}</h1>
				<p class="font-handwriting text-amber-900 dark:text-amber-50 text-lg">{date} &bull; {author}</p>
			</div>
		</div>
	</div>


	<div class="article-content mx-auto prose max-w-[56ch] text-prose text-justify text-zinc-900 dark:text-white">
		<svelte:component this={content} />
	</div>
</article>
