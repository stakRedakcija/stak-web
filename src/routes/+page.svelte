<script>
	import LargeSocialIcon from '$lib/components/LargeSocialIcon.svelte'
	import { getRandomInt } from '$lib/utils/index'
	import socialLinks from './socialLinks.json'
	import contactInfo from './contactInfo.json'

	export let data

	/** Xmas 2023 visuals (carousel)
	 *
	 *  import { Slidy } from '@slidy/svelte'
	 *  import slides from './xmasCarousel.json'
	 * 	let carouselOptions = {
	 * 		slides,
	 * 		arrows: true,
	 * 		snap: 'center',
	 * 		counter: false,
	 * 		thumbnail: true,
	 * 		progress: false, // does not work on MS Edge
	 * 		loop: true
	 * 	}
	 */
</script>

<svelte:head>
	<title>Dobrodošli - St@k</title>
</svelte:head>

<h1 class="wide-title text-9xl font-headline tracking-tighter mx-10 mt-5 md:mx-20 md:mt-20 text-red-600 dark:text-red-300">Dobro&shy;došli u svijet St@ka!</h1>

<!--<section id="xmas-2023" class="mx-10 mt-20 md:m-20 mb-20 md:mb-40">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">Sretni blagdani!</h2>
	<div class="mt-20 text-center mx-auto">
		<div class="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:mx-auto my-20 lg:my-24 w-[80vw] xl:w-max">
			<div class="flex flex-col gap-4 items-start justify-center max-w-md text-justify">
				<Slidy {...carouselOptions} />
			</div>
		</div>
	</div>
</section>-->

<section id="frisko-z-bloga" class="mx-10 mt-10 md:m-20 mb-20 md:mb-40">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">Iz našeg pera</h2>

	<ul class="flex flex-wrap justify-center gap-10 md:gap-14 lg:gap-20 px-0 pt-10 xl:pt-20 mx-auto max-w-[100rem]">
		{#each data.posts as { path, meta: { title, image, date } }}
			{@const formattedDate = new Intl.DateTimeFormat('hr-HR', { dateStyle: 'long' }).format(new Date(date))}
			{@const randomRot = getRandomInt(-40, 30) / 10}

			<li class="max-lg:odd:ml-auto max-lg:even:mr-auto">
				<a href={path} class="flex flex-col group max-w-md 2xl:max-w-2xl">
					<div class="grid grid-cols-1 grid-rows-1 drop-shadow-2xl" style:transform={`rotate(${randomRot}deg)`}>
						<img class="rounded-xl border-8 border-white dark:border-neutral-600 group-hover:border-red-500 dark:group-hover:border-red-400 transition-colors w-[80vw] aspect-video row-start-1 row-end-1 col-start-1 col-end-1 object-cover dark:brightness-75" src={image} alt={title} />
						<div class="rounded-xl border-8 border-white dark:border-neutral-600 group-hover:border-red-500 dark:group-hover:border-red-400 transition-colors bg-gradient-to-tr from-white/0 to-white/10 bg-blend-overlay shadow-inner w-full h-full row-start-1 row-end-1 col-start-1 col-end-1">&nbsp;</div>
					</div>

					<div class="-mt-8 -ml-6 lg:-mt-14 lg:-ml-8 mr-auto drop-shadow-xl z-10 max-w-[90%]">
						<div class="paper-bg torn-paper-4 py-4 px-8 flex flex-col gap-1" style:border-radius={`${getRandomInt(16, 32)}px`} style:transform={`rotate(${randomRot + getRandomInt(-1, 1)}deg)`}>
							<h2 class="group-hover:text-red-500 dark:group-hover:text-red-400 post-title text-lg 2xl:text-2xl transition-colors">{@html title}</h2>
							<span class="text-xs text-slate-600 dark:text-slate-300 group-hover:text-red-400 dark:group-hover:text-red-200 transition-colors">{formattedDate}</span>
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>

	<div class="flex justify-center mx-auto max-w-md text-justify sm:mt-4 md:mt-8 lg:mt-16">
		<a class="px-6 rounded-lg flex text-lg font-headline font-semibold hover:underline transition text-center max-sm:mt-8 sm:mt-4 lg:mt-8" href="/blog">
			Pročitaj više...
		</a>
	</div>
</section>

<!-- <section id="dva-jedan-nula-kodiraj" class="mx-10 mt-20 md:m-20 mb-0 md:mb-0">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">2, 1, 0, kodiraj!</h2>

	<div class="flex flex-wrap items-center xl:justify-center gap-10 xl:mx-auto max-w-lg">
		<p class="xl:text-center">Jedan od načina na koji bilo koji student FOI-ja može pokazati svoju kreativnost programerskog razmišljanja izvan okvira predmeta koje sluša u sklopu nastave.</p>
		<LargeSocialIcon data={dvaJedanNulaContactInfo} />
	</div>	
</section> -->

<section id="podcast" class="mx-10 mt-20 md:m-20 mb-0 md:mb-0">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">Podcast<wbr />@FOI</h2>


	<div class="flex flex-wrap items-center xl:justify-center gap-10 xl:mx-auto max-w-lg">
		<p class="xl:text-center">U razgovoru s vašim omiljenim profesorima saznajte više o tome što rade na Fakultetu, u slobodno vrijeme i koliko su vješti u rješavanju izazova!</p>
		<LargeSocialIcon data={contactInfo.podcast} />
	</div>
</section>

<section id="kontakt" class="mx-10 my-20 md:m-20">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">Kontakt</h2>

	<div class="flex flex-wrap items-center md:justify-center gap-4 max-w-2xl mx-auto">
		{#each socialLinks as data}
			<LargeSocialIcon {data} />
		{/each}
	</div>
</section>

<!--<style>
	@import '/node_modules/@slidy/svelte/dist/slidy.css';
</style>-->
