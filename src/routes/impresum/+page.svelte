<script>
	export let data
	const {content, date: rawDate} = data
	const dateData = new Date(rawDate)
	const date = new Intl.DateTimeFormat('hr-HR', {dateStyle: 'long'}).format(dateData)
</script>

<svelte:head>
    <title>Impresum - St@k</title>
</svelte:head>

<h1 class="wide-title text-7xl md:text-9xl font-headline tracking-tighter m-10 md:m-20 mb-0 md:mb-0">Impresum</h1>

<section id="impresum" class="mt-20 md:m-20 mb-0 md:mb-0 p-10">
    <div class="article-content mx-auto prose dark:prose-invert prose-headings:max-w-[56ch] prose-p:max-w-[56ch] text-prose text-justify text-zinc-900 dark:text-slate-50">
        <svelte:component this={content}/>
        <br>
        <small>Ažurirano: {date}</small>
    </div>
</section>
