<script>
	export let data;

	import {getRandomInt} from '$lib/utils/index';

</script>

<h1 class="wide-title text-9xl font-headline tracking-tighter m-10 md:m-20 mb-0 md:mb-0 text-yellow-900 dark:text-yellow-200">Blog</h1>

<ul class="flex flex-wrap justify-center gap-20 mx-auto px-10 md:px-20 pt-20 pb-40 max-w-[100rem]">
	{#each data.posts as { path, meta: { title, image, date } }, i}
		{@const formattedDate = new Intl.DateTimeFormat('hr-HR', { dateStyle: 'long' }).format(new Date(date))}
		{@const randomRot = getRandomInt(-40, 30) / 10}
		
		<li>
			<a href={path} class="flex relative group max-w-md 2xl:max-w-2xl">
				<div class="grid grid-cols-1 grid-rows-1 drop-shadow-2xl" style:transform={`rotate(${randomRot}deg)`}>
					<img class="rounded-xl border-8 border-white dark:border-neutral-600 w-[80vw] aspect-video row-start-1 row-end-1 col-start-1 col-end-1 object-cover dark:brightness-75" src={image} alt={title} />
					<div class="rounded-xl border-8 border-white dark:border-neutral-600 bg-gradient-to-tr from-white/0 to-white/10 bg-blend-overlay shadow-inner w-full h-full row-start-1 row-end-1 col-start-1 col-end-1">&nbsp;</div>
				</div>

				<div class="absolute -bottom-12 -left-14 m-8 drop-shadow-xl z-10">
					<div class="paper-bg torn-paper-4 py-4 px-8 flex flex-col" style:border-radius={`${getRandomInt(16, 32)}px`} style:transform={`rotate(${randomRot + getRandomInt(-1, 1)}deg)`}>
						<h2 class="post-title text-lg 2xl:text-2xl transition-var-font">{@html title}</h2>
						<span class="text-xs text-slate-600 dark:text-slate-300">{formattedDate}</span>
					</div>
				</div>
			</a>
		</li>
	{/each}
</ul>

<style>
	.post-title {
		font-variation-settings: 'wght' 500, 'wdth' 48, 'slnt' 0, 'GRAD' 0;
	}

	.group:hover .post-title {
		font-variation-settings: 'wght' 500, 'wdth' 48, 'slnt' -8, 'GRAD' 64;
	}
</style>
