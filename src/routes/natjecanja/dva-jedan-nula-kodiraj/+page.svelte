<script>
	import ArrowDown from '@inqling/svelte-icons/solid/arrow-down.svelte';
	import { slide } from 'svelte/transition';

	let t1Visible = false;
	let t2Visible = false;
</script>

<svelte:head>
	<title>2, 1, 0, kodiraj! / Natjecanja - St@k</title>
</svelte:head>

<h1 class="wide-title text-9xl font-headline tracking-tighter m-10 md:m-20 mb-0 md:mb-0 text-violet-600 dark:text-violet-200">2, 1, 0 kodiraj!</h1>

<section class="flex flex-col lg:flex-row mx-10 md:mx-20 gap-14 lg:gap-20 xl:mx-auto my-20 lg:my-32 w-[80vw] xl:w-max">
	<picture>
		<source srcset="/images/natjecanja/2-1-0-kodiraj.webp" type="image/webp" />
		<img
			class="border-8 border-white dark:border-black shadow-xl shadow-zinc-400 dark:shadow-black/50 rounded-lg object-cover w-full max-w-md rotate-6 max-lg:ml-auto"
			src="/images/natjecanja/2-1-0-kodiraj.jpg"
			alt="Grupa fotografa s fotoaparatima"
		/>
	</picture>

	<div class="flex flex-col gap-4 items-start justify-center max-w-md text-justify">
		<h2 class="font-headline text-5xl font-semibold text-violet-500 dark:text-violet-200 tracking-tighter">O natjecanju</h2>
		<p>
			Programersko natjecanje simboličnog naziva 2, 1, 0 kodiraj! jedan je od načina na koji bilo koji student FOI-ja može pokazati svoju kreativnost programerskog razmišljanja izvan okvira predmeta
			koje sluša u sklopu nastave.
		</p>

		<p>Zadatci koje zadaje St@k različite su težine, ali uz malo truda moguće ih je riješiti i pritom naučiti nešto novo ili poboljšati već stečeno znanje programiranja.</p>

		<a
			class="px-6 py-2 rounded-lg mt-8 flex shadow-md text-lg font-headline font-semibold bg-violet-100 dark:bg-black dark:text-violet-300 hover:bg-violet-700 dark:hover:bg-violet-400 text-violet-700 hover:text-violet-50 dark:hover:text-black hover:shadow-lg shadow-zinc-200 dark:shadow-black/50 hover:shadow-violet-400 dark:hover:shadow-violet-900 transition"
			href="mailto:stak@foi.hr"
			target="_blank"
			rel="noreferrer"
		>
			Prijavi se
		</a>
	</div>
</section>

<section class="flex flex-col mx-10 md:mx-20 xl:mx-auto my-20 lg:my-32 lg:max-w-screen-md xl:max-w-screen-sm">
	<h2 class="font-headline text-5xl font-semibold text-violet-500 dark:text-violet-200 tracking-tighter mb-10">Zadaci</h2>

	<button
		class="flex justify-between items-center gap-10 mb-4 w-full transition-colors hover:text-violet-600 dark:hover:text-violet-300 {t1Visible ? 'text-violet-700 dark:text-violet-400' : ''}"
		on:click={() => {
			t1Visible = !t1Visible;
			t2Visible = false;
		}}
	>
		<h3 class="font-headline text-xl font-semibold text-current ">Prvi zadatak</h3>

		<div class="w-8 h-8 flex items-center justify-center rounded border border-current text-current">
			<ArrowDown class="w-6 h-6 transition-transform origin-center text-current {t1Visible ? '-scale-y-100' : ''}" />
		</div>
	</button>

	{#if t1Visible}
		<p class="pb-8 border-b border-gray-500 dark:border-zinc-600" transition:slide>
			Kao i prijašnjih sezona, vrijeme je za zadatak povezan s hrvatskim vlakovima. <br />
			<br />
			Od putnika su stigle dojave da se putovanje od Čakovca do Zagreba, koje u prosjeku traje 3 sata i 47 minuta, često zna odužiti zbog neobjašnjivih kašnjenja vlakova. Upravitelji su zato odlučili kreirati
			novu rutu i trebaju tvoju pomoć.<br /><br />
			Poznato je da je od Čakovca do Zagreba moguće doći na dva načina. Kao pomoć možete koristiti mapu hrvatskih pruga.<br />
			<br />
			Zadana su prosječna trajanja putovanja:<br />
			<code>
				Čakovec → Zagreb - 03:47<br />
				Koprivnica → Zagreb - 01:37<br />
				Čakovec → Varaždin - 00:11<br />
				Varaždin → Koprivnica - 00:50<br />
			</code>
			<br />
			Na svakom kolodvoru moguće je kašnjenje od 15 minuta.<br />
			Vaš je zadatak odrediti najbržu rutu.<br />
			<br />
			<span class="text-lg font-semibold inline-block mb-2">Dodatno (teža varijanta)</span><br />
			Osim određivanja rute, treba znati koliko je vagona potrebno za prijevoz putnika koji će putovati tom rutom.<br /><br />
			Pretpostavimo kako će radnim danom u ovom vlaku putovati 390 ljudi. Vikendom se broj povećava te se očekuje 460 putnika.<br /><br />
			Ako znamo da su na raspolaganju vagoni od 50, 70, 80, 100 i 230 mjesta, odredite sve moguće kombinacije vagona za prijevoz navedenog broja putnika. Naravno, cilj je imati što manje slobodnih mjesta.<br
			/>
		</p>
	{/if}

	<button
		class="mt-8 flex justify-between items-center gap-10 mb-4 w-full transition-colors hover:text-violet-600 dark:hover:text-violet-300 {t2Visible ? 'text-violet-700 dark:text-violet-400' : ''}"
		on:click={() => {
			t2Visible = !t2Visible;
			t1Visible = false;
		}}
	>
		<h3 class="font-headline text-xl font-semibold text-current">Drugi zadatak</h3>

		<div class=" w-8 h-8 flex items-center justify-center rounded border border-current text-current">
			<ArrowDown class="w-6 h-6 transition-transform origin-center text-current {t2Visible ? '-scale-y-100' : ''}" />
		</div>
	</button>

	{#if t2Visible}
		<p class="pb-8 border-b border-gray-500 dark:border-zinc-600" transition:slide>
			Ovotjedni je zadatak vezan uz ekologiju.<br />
			<br />
			Zadana je <a class="underline underline-offset-4 decoration-wavy decoration-red-500 hover:text-red-500 dark:decoration-yellow-300 dark:hover:text-yellow-300 transition-colors" href="/natjecanja/210/2023/drugi-zadatak.csv" target="_blank">CSV datoteka</a> s raznim otpadom, a vaš je zadatak razvrstati ga u pripadajuće kante. Moguće je svrstati otpad u kante za plastiku, papir, biootpad te ostali otpad.
			<br /><br />
			U plastiku ide sve na čemu prema našoj konvenciji piše PLA (drugi stupac u datoteci), u papir sve gdje piše PAP, a u biootpad sve gdje piše BIO. Sve ostale oznake idu u ostali otpad. Kao ispis želimo
			dobiti razvrstani otpad u pripadajućim kantama. (1 bod)<br /><br />

			<span class="text-lg font-semibold inline-block mb-2">Dodatno (teža varijanta)</span><br />
			S obzirom na to da su nam osnove recikliranja dobro poznate, znamo da studenti u sobama znaju taložiti velike količine limenki raznih pića. Želimo li i njih reciklirati, dodat ćemo još jednu kantu
			u koju ćemo ih smjestiti.
			<br /><br />
			Zadana CSV datoteka sadrži i treći stupac u kojem se nalazi brojčana vrijednost, a koja reprezentira kod simbola na ambalaži. Potražite koji su kodovi na limenkama te njih isto reciklirajte kako
			je namijenjeno (2 boda za prvi dio + limenke).
			<br /><br />
			Za dodatan bod modificirajte program da plastičnu ambalažu s oznakom 7 NE razvrstava u plastiku zbog nemogućnosti njezina recikliranja kao i papir s oznakama između 80 i 85 (1 bod).
		</p>
	{/if}
</section>
