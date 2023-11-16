<script>
	import { ArrowLeft } from '@inqling/svelte-icons/heroicon-24-solid'

	export let data
	const { content, author, date: rawDate, image, title, imageSource } = data

	const dateData = new Date(rawDate)
	const date = new Intl.DateTimeFormat('hr-HR', { dateStyle: 'long' }).format(dateData)
</script>

<svelte:head>
    <title>{title.replace(/(<([^>]+)>)/gi, '')} - St@k</title>
</svelte:head>

<article class="p-10 md:p-20">
    <a style="font-stretch: 150%; font-weight: 280;" class="text-base flex items-center gap-2 mb-6" href="/blog">
        <ArrowLeft class="text-amber-700 dark:text-amber-200 w-5 h-5"/>
        Svi članci</a>

    <div class="grid grid-cols-1 grid-rows-[auto_auto] gap-0 max-w-screen-xl mx-auto mb-20">
        <div class="col-[1] row-[1] translate-x-3 -rotate-2 md:-rotate-6 max-w-screen-lg -mb-20">
            <img class="aspect-video dark:saturate-50 dark:brightness-50 object-cover w-full border-[12px] border-white rounded-2xl shadow-md after:content-['_'] after:bg-gradient-to-tr after:from-white/0 after:to-white/100 after:w-full after:h-full after:absolute after:inset-0 after:z-10"
                 src={image} alt={title}>
        </div>

        <div class="col-[1] row-[2] drop-shadow-2xl md:px-6 xl:px-0 md:translate-x-8 xl:translate-x-0 rotate-1 justify-self-end">
            <div class="torn-paper-5 paper-bg px-6 py-8 md:px-14 md:py-10 max-w-2xl lg:max-w-4xl">
                <h1 class="wide-title text-5xl lg:text-7xl text-amber-600 dark:text-amber-100 mb-8 tracking-tight">{@html title}</h1>
                <p class="font-handwriting text-amber-900 dark:text-amber-50 text-lg">{date} &bull; {author}</p>
            </div>
        </div>
    </div>


    <div class="article-content mx-auto prose prose-headings:max-w-[56ch] prose-p:max-w-[56ch] text-prose text-justify text-zinc-900 dark:text-white dark:prose-invert prose-blockquote:not-italic prose-blockquote:font-handwriting prose-blockquote:border-amber-600 dark:prose-blockquote:border-amber-900">
        <svelte:component this={content}/>
        {#if imageSource}
            <span class="mt-8 inline-block select-none text-sm text-current opacity-[0.15] dark:opacity-10">Naslovna fotografija: {@html imageSource}</span>
        {/if}
    </div>

</article>
