<script>
	import magazines from './casopisi.json';

	const { title: firstMagTitle, time: firstMagTime, summary: firstMagSummary, coverImageUrl: firstMagCoverImageUrl, url: firstMagUrl } = magazines[0];
</script>

<svelte:head>
	<title>Časopisi - St@k</title>
</svelte:head>

<h1 class="wide-title text-9xl font-headline tracking-tighter m-10 md:m-20 mb-0 md:mb-0">Časopisi</h1>

<div class="w-full flex max-xl:flex-col gap-40 p-10 md:p-20">
	<div class="w-80 md:w-auto md:max-w-2xl xl:w-80 shrink-0 xl:sticky xl:top-20 xl:self-start xl:ml-2 flex flex-col md:flex-row xl:flex-col max-xl:mx-auto gap-0 md:gap-8 xl:gap-0">
		<img class="rounded-2xl shadow-2xl shadow-zinc-700" src={firstMagCoverImageUrl} alt="Naslovnica {firstMagTitle}" />

		<div class="mt-6 flex flex-col items-start">
			<h2 class="text-4xl font-headline font-bold tracking-tighter text-emerald-400">{@html firstMagTitle}</h2>
			<p class="text-xs mt-1 text-slate-400">{firstMagTime}</p>

			<p class="mt-4">{@html firstMagSummary}</p>

			<a class="px-4 py-1 rounded-md mt-8 flex shadow-md text-lg font-headline font-semibold bg-black hover:bg-emerald-400 text-emerald-50 hover:text-black hover:shadow-lg shadow-black/50 hover:shadow-emerald-900 transition" href={firstMagUrl} target="_blank" rel="noreferrer">Prolistaj </a>
		</div>
	</div>

	<div class="flex flex-wrap justify-center xl:justify-start gap-10 max-xl:mx-auto">
		{#each magazines.slice(1) as { title, time, coverImageUrl, url }, i (i)}
			<a class="flex flex-col group h-96 max-xl:items-center" href={url} target="_blank" rel="noreferrer">
				<img class="rounded-lg shadow shadow-black group-hover:shadow-emerald-800 group-hover:shadow-lg transition w-40 lg:w-56" src={coverImageUrl} alt="Naslovnica {title}" />

				<h2 class="text-xl tracking-tighter mt-4 font-headline font-semibold text-white group-hover:text-emerald-200 transition">{@html title}</h2>
				<p class="text-xs text-slate-400 group-hover:text-zinc-300 transition">{time}</p>
			</a>
		{/each}
	</div>
</div>
