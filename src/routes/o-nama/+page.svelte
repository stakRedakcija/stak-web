<script>
	import members from '../clanovi.json'
	import casopisi from '../casopisi.json'
	import {getRandomInt} from '$lib/utils/index'
	import {Bookmark} from '@inqling/svelte-icons/heroicon-24-solid'
	import {Stop} from '@inqling/svelte-icons/heroicon-24-outline'
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline'

	let innerWidth = 0
	$: isMobile = innerWidth < 800
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>O nama - St@k</title>
</svelte:head>

<h1 class="wide-title text-9xl font-headline tracking-tighter m-10 md:m-20 mb-0 md:mb-0 text-yellow-900 dark:text-yellow-200">O nama</h1>

<section id="o-nama" class="mx-10 mt-20 md:m-20 mb-0 md:mb-0">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">Tko? Što?</h2>

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

<section id="kronologija" class="mx-10 mt-20 md:m-20 mb-0 md:mb-0">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">Kronologija</h2>

	<div class="xl:mx-auto my-20 lg:my-24 w-[90vw] max-w-xl">
		<p class="text-justify max-sm:mr-10">
			St@k je dobrovoljna udruga koja uključuje studente sa svih smjerova FOI-ja. Osnovana je u prosincu 2005. godine uz moto “Od studenata za studente.”
			<br><br>
			Isprva se djelatnost St@ka fokusirala samo na izdavanje časopisa, dok je danas ustroj kompleksniji pa je tako i djelatnost opširnija. Izdavanje časopisa i dalje je glavni zadatak St@k redakcije. Aktivni smo na svim društvenim mrežama, održavamo programersko i fotografsko natjecanje, surađujemo sa Studentskim zborom FOI-ja i ostalim udrugama, kao i sa CPSRK-om i profesorima Fakulteta.
			<br><br>
			Zahvaljujući prvom uredniku, Darku Iliću Šikelju, i malom broju članova St@ka, u siječnju 2006. godine izašao je prvi broj časopisa pod nazivom Studentski list. Časopis je redovito izlazio i za vrijeme urednice Janje Petričušić, do 2008. godine. Slijedilo je nekoliko godina neaktivnosti.
			<br>
			Studentski list mijenja naziv u St@k (po uzoru na naziv udruge) 2012. godine zahvaljujući tadašnjem uredniku Krešimiru Vargi. Časopis je te godine napravljen u okviru završnog rada urednika.
			<br>
			Od 2014. godine do danas, časopis izlazi redovito, točnije semestralno. Nakon urednice Suzane Rendulić, važno je spomenuti urednicu Gloriu Babić. Za vrijeme njezinog mandata značajno se povećao broj članova St@ka te su postavljeni temelji za Redakciju koja djeluje danas. Nakon Glorie, urednici su redom bili: Filip Novački, Magdalena Đud, Ana Horvat i Anja Peharda.
			<br><br>
			Nakladnik časopisa: <a class="underline" href="https://www.foi.unizg.hr/" target="_blank">Fakultet organizacije i informatike</a>
			<br>
			Izvori financiranja: <a class="underline" href="https://www.scvz.unizg.hr/">SCV</a>, <a class="underline" href="https://www.foi.unizg.hr/" target="_blank">FOI</a>, <a class="underline" href="https://cpsrkapp.foi.hr/" target="_blank">CPSRK</a>, sponzori
			<br><br><br>
			<em><q>Zašto ne bi radili stvari koje želimo i našli načina da uživamo u onima koje ne želimo, a moramo raditi?</q></em> &mdash; Darko Ilić Šikelj, Studentski list 1, riječ urednika
		</p>
	</div>
</section>

<section id="izdanja-casopisa" class="mx-10 mt-20 md:m-20 mb-0 md:mb-0">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">Izdanja časopisa</h2>

	<div class="xl:mx-auto my-20 lg:my-24 max-w-xl">
		<Timeline position="left">
			{#each [...casopisi].reverse() as { id, time, editor }, i}
				<TimelineItem>
					<TimelineOppositeContent slot="opposite-content">
						<a class="hover:underline hover:underline-offset-4" href="{'/casopisi/' + id}" target="_blank">{(id >= 10 ? 'St@k ' : 'Studentski list ') + id}</a>
						<br>
						<i>{editor}</i>
					</TimelineOppositeContent>
					<TimelineSeparator>
						{#if i === 0 || casopisi[casopisi.length - i].editor !== casopisi[casopisi.length - i - 1].editor }
							<Bookmark class="w-6 h-6 text-red-800 dark:text-red-200" />
						{:else}
							<Stop class="w-6 h-6 text-red-800 dark:text-red-200" />
						{/if}
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<p>{time}</p>
					</TimelineContent>
				</TimelineItem>
			{/each}
		</Timeline>
	</div>
</section>

<section id="meet-the-crew" class="mx-10 mt-20 md:m-20 mb-0">
	<h2 class="wide-title text-7xl font-headline tracking-tighter mb-8 text-red-800 dark:text-red-200 xl:text-center">Meet the crew</h2>

	<div class="flex flex-wrap gap-x-24 gap-y-16 justify-center pt-4 md:pt-8">
		{#each members as { name, nameSlug, role, bio, imgRot: mobileImgRot, txtRot: mobileTxtRot, trOrigX: mobileTrOrigX, trOrigY: mobileTrOrigY, trX: mobileTrX, trY: mobileTrY, rot: mobileRot, bgCutout: mobileBgCutout, borderRadius: mobileBorderRadius }, i (i)}
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
					<source srcset={`/clanovi/${nameSlug}.webp`} type="image/webp">
					<img class="bg-black w-20 h-24 rounded object-cover absolute z-10 -left-2 top-2.5 sm:-left-9 sm:top-4 shadow shadow-zinc-900/25" src={`/clanovi/${nameSlug}.jpg`} alt={name} style:transform={`rotate(${imgRot}deg)`} loading="lazy" />
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
