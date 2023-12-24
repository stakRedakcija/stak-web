<script>
	import { Slidy } from '@slidy/svelte'
	import LargeSocialIcon from '$lib/components/LargeSocialIcon.svelte'
	import { getRandomInt } from '$lib/utils/index'
	import { onMount } from 'svelte'
	import members from './clanovi.json'
	import socialLinks from './socialLinks.json'
	import contactInfo from './contactInfo.json'
	import slides from './xmas-carousel.json'

	export let data

	let isMobile = true
	let carouselOptions = {
		slides,
		arrows: true,
		snap: 'center',
		counter: false,
		thumbnail: false,
		progress: true
	}

	onMount(() => {
		isMobile = window.innerWidth < 800
	})
</script>

<svelte:head>
	<title>Dobrodošli - St@k</title>
</svelte:head>

<h1 class="wide-title text-9xl font-headline tracking-tighter mx-10 mt-5 md:mx-20 md:mt-20 text-red-600 dark:text-red-300">Dobro&shy;došli u svijet St@ka!</h1>

<section id="xmas-2023" class="mx-10 mt-20 md:m-20 mb-20 md:mb-40">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">Sretni blagdani!</h2>
	<div class="mt-20 text-center mx-auto">
		<div class="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:mx-auto my-20 lg:my-24 w-[80vw] xl:w-max">
			<div class="flex flex-col gap-4 items-start justify-center max-w-md text-justify">
				<Slidy {...carouselOptions} />
			</div>
		</div>
	</div>
</section>

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
</section>

<section id="o-nama" class="mx-10 mt-20 md:m-20 mb-0 md:mb-0">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">O nama</h2>

	<div class="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:mx-auto my-20 lg:my-24 w-[80vw] xl:w-max">
		<div class="flex flex-col gap-4 items-start justify-center max-w-md text-justify">
			<p>
				Studentski časopis Fakulteta organizacije i informatike u Varaždinu nazvan ST@K - <b>ST</b>udentska <b>AK</b>tivnost nastao je kao pokret studenata s ciljem povećanja broja aktivnosti na
				Fakultetu te uspostavljanja dijaloga između studenata Fakulteta i drugih entiteta koji sačinjavaju studentski život.
			</p>

			<p>
				St@k trenutno broji tridesetak aktivnih članova podijeljenih u nekoliko sekcija: community manageri, dizajneri, film crew, fotografi, lektori, novinari i web developeri.
			</p>

			<p>
				Osim što mu je glavni zadatak izrada semestralnog časopisa, St@k je uveo velik broj <i>online</i> aktivnosti kako bi više animirao studente FOI-ja, poput raznih
				<a href="/natjecanja">natjecanja</a> i radionica (za članove redakcije i sve zainteresirane).
			</p>
		</div>

		<picture>
			<source srcset="/images/o-nama/the-crew.webp" type="image/webp">
			<img
				class="border-8 aspect-video border-white dark:border-black shadow-xl shadow-zinc-400 dark:shadow-black/50 rounded object-cover w-full max-w-sm md:max-w-md lg:max-w-xl rotate-6 md:ml-auto"
				src="/images/o-nama/the-crew.jpg"
				alt="Grupa fotografa s fotoaparatima"
				loading="lazy"
			/>
		</picture>
	</div>

	<div class="flex flex-col lg:flex-row-reverse gap-14 lg:gap-20 xl:mx-auto my-20 lg:my-24 w-[80vw] xl:w-max">
		<div class="flex flex-col gap-4 items-start justify-center max-w-md text-justify">
			<p>
				Zbrojivši sve, St@k se može opisati kao dobrovoljna udruga koja uključuje studente svih smjerova FOI-ja s nultim pragom tolerancije na bilo koji oblik diskriminacije. Cilj Redakcije je dati
				prostor svojim članovima da se profesionalno usavrše, izraze i pridonesu kvaliteti svojeg studiranja kroz brojne aktivnosti koje St@k priređuje te u konačnici prošire svoje horizonte i
				olakšaju si put prema pronalasku karijere koja ih čeka nakon studija.
			</p>
		</div>

		<picture>
			<source srcset="/images/o-nama/the-crew-2.webp" type="image/webp">
			<img
				class="border-8 aspect-[3/2] border-white dark:border-black shadow-xl shadow-zinc-400 dark:shadow-black/50 rounded object-cover w-full max-w-sm md:max-w-md lg:max-w-xl -rotate-6 md:ml-auto"
				src="/images/o-nama/the-crew-2.jpg"
				alt="Grupa fotografa s fotoaparatima"
				loading="lazy"
			/>
		</picture>
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

<section id="meet-the-crew" class="mx-10 mt-20 md:m-20 mb-0">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">Meet the crew</h2>

	<div class="flex flex-wrap gap-x-24 gap-y-16 justify-center pt-4 md:pt-8">
		{#each members as { name, role, bio, photoUrl, photoUrlWebp, imgRot: mobileImgRot, txtRot: mobileTxtRot, trOrigX: mobileTrOrigX, trOrigY: mobileTrOrigY, trX: mobileTrX, trY: mobileTrY, rot: mobileRot, bgCutout: mobileBgCutout, borderRadius: mobileBorderRadius }, i (i)}
			{@const imgRot = isMobile ? mobileImgRot : getRandomInt(-4, 4)}
			{@const txtRot = isMobile ? mobileTxtRot : getRandomInt(-1, 1)}
			{@const trOrigX = isMobile ? mobileTrOrigX : getRandomInt(0, 100)}
			{@const trOrigY = isMobile ? mobileTrOrigY : getRandomInt(0, 100)}
			{@const trX = isMobile ? mobileTrX : getRandomInt(-8, 8)}
			{@const trY = isMobile ? mobileTrY : getRandomInt(-8, 8)}
			{@const rot = isMobile ? mobileRot : getRandomInt(-5, 5)}
			{@const bgCutout = isMobile ? mobileBgCutout : getRandomInt(3, 11)}
			{@const borderRadius = isMobile ? mobileBorderRadius : getRandomInt(80, 150) / 100}

			<div class="relative" style:transform={`translateX(${trX}px) translateY(${trY}px) rotate(${rot}deg)`} style:transform-origin={`${trOrigX}% ${trOrigY}%`}>
				<picture>
					<source srcset={photoUrlWebp} type="image/webp">
					<img class="bg-black w-20 h-24 rounded object-cover absolute z-10 -left-2 top-2.5 sm:-left-9 sm:top-4 shadow shadow-zinc-900/25" src={photoUrl} alt={name} style:transform={`rotate(${imgRot}deg)`} loading="lazy" />
				</picture>
				<div class="bg-gradient-to-tr from-white/0 to-white/40 bg-blend-lighten w-20 h-24 rounded shadow-inner shadow-black/10 absolute z-20 -left-2 top-2.5 sm:-left-9 sm:top-4" style:transform={`rotate(${imgRot}deg)`} />
				<div class="drop-shadow w-80 sm:w-96 h-full">
					<div class="torn-paper-xl-{bgCutout} polaroid-bg-2 p-8" style:border-radius={`${borderRadius}rem`}>
						<p class="ml-14 sm:ml-8 font-handwriting text-2xl text-zinc-800 dark:text-red-300 leading-tight tracking-tight" style:transform={`rotate(${txtRot}deg)`}>{@html name}</p>
						<p class="ml-14 sm:ml-8 text-sm font-headline text-zinc-500 dark:text-zinc-400" style:transform={`rotate(${txtRot}deg)`}>{@html role}</p>
						<p class="text-xs mt-9 sm:mt-7 text-zinc-800 dark:text-red-50 text-justify">{@html bio}</p>
					</div>
				</div>
			</div>
		{/each}
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

<style>
	@import '/node_modules/@slidy/svelte/dist/slidy.css';
</style>
