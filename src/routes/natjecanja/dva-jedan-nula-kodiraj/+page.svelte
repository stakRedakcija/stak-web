<script>
	import { ArrowDown, ArrowLeft, PaperClip } from '@inqling/svelte-icons/heroicon-24-solid'
	import { slide } from 'svelte/transition'

	let t1Visible = true
	let t2Visible = false
	let t3Visible = false
</script>

<svelte:head>
	<title>2, 1, 0, kodiraj! / Natjecanja - St@k</title>
</svelte:head>

<a style="font-stretch: 150%; font-weight: 280;" class="text-base flex items-center gap-2 mt-10 mb-6 mx-10 md:mx-20" href="/natjecanja"><ArrowLeft class="text-violet-700 dark:text-violet-200 w-5 h-5" /> Natjecanja</a>

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

		<!-- <a href="/blog/zavrsila-je-peta-sezona-natjecanja-dva-jedan-nula-kodiraj" class="text-md font-semibold underline underline-offset-4 decoration-dotted decoration-violet-600 dark:decoration-violet-300 hover:text-violet-600 dark:hover:text-violet-300 hover:decoration-solid transition-colors">Natjecanje je završilo, hvala svima koji su se prijavili!</a> -->
	</div>
</section>

<section class="flex flex-col mx-10 md:mx-20 xl:mx-auto my-20 lg:my-32 lg:max-w-screen-md xl:max-w-screen-sm">
	<h2 class="font-headline text-5xl font-semibold text-violet-500 dark:text-violet-200 tracking-tighter mb-10">Zadaci</h2>

	<button
		class="flex justify-between items-center gap-10 mb-4 w-full transition-colors hover:text-violet-600 dark:hover:text-violet-300 {t1Visible ? 'text-violet-700 dark:text-violet-400' : ''}"
		on:click={() => {
			return;
			t1Visible = !t1Visible
			t2Visible = false
			t3Visible = false
		}}
	>
		<h3 class="font-headline text-xl font-semibold text-current ">Prvi zadatak</h3>

		<!-- <div class="w-8 h-8 flex items-center justify-center rounded border border-current text-current">
			<ArrowDown class="w-6 h-6 transition-transform origin-center text-current {t1Visible ? '-scale-y-100' : ''}" />
		</div> -->
	</button>

	{#if t1Visible}
		<div class="pb-8 border-b border-gray-500 dark:border-zinc-600" transition:slide>
			<p>
				Petunija radi na administraciji punionica električnih vozila u Varaždinu. Odlučila si je olakšati posao i napraviti mali program uz čiju će pomoć svoje svakodnevne zadatke odrađivati brže.
				<br /><br />
				U datoteci se nalaze potrebni podatci o punionicama koje Petunija administrira. Tvoj je zadatak napraviti sljedeće funkcionalnosti:
				<br /><br /><br />
				<b>Zadatak 1</b>
				<br />
				<i>1 bod</i>
				<br /><br />
				&ndash; prikaz informacija o svim punionicama
				<br />
				&ndash; prikaz informacija za jednu punionicu
				<br /><br /><br />
				<b>Zadatak 2</b>
				<br />
				<i>2 boda</i>
				<br />
				<br />
				&ndash; dodavanje nove punionice u sustav
				<br />
				&ndash; brisanje stare punionice iz sustava

				<br /><br />
				<b>Zadatak 3</b>
				<br />
				<i>3 boda</i>
				<br /><br />
				&ndash; mogućnost rezerviranja punionice u određeno vrijeme na određen broj minuta
				<br /> &ensp; (odabrati slobodnu punionicu → napisati u koje se vrijeme želi rezervirati i broj minuta punjenja)
				<br />
				&ndash; prikaz zauzetih, rezerviranih i slobodnih punionica u zadanom vremenu
				<br /> &ensp; (korisnik unosi vrijeme → prolazi se po podatcima i gleda koja je punionica zauzeta, slobodna ili rezervirana u to zadano vrijeme).
			</p>
			<a
			class="px-3 py-1 rounded-lg mt-8 inline-flex items-center gap-1 shadow border border-violet-200 text-lg font-headline font-semibold bg-violet-100 dark:border-violet-900/40 dark:bg-black dark:text-violet-300 hover:bg-violet-700 dark:hover:bg-violet-400 text-violet-700 hover:text-violet-50 dark:hover:text-black hover:shadow-md shadow-zinc-200 dark:shadow-black/50 hover:shadow-violet-400 dark:hover:shadow-violet-900 hover:border-violet-800 dark:hover:border-violet-600 transition"
				target="_blank"
				href="/natjecanja/210/2023-datoteke/prvi-zadatak.csv"
			>
			<PaperClip class="w-6 h-6 text-current" />
				Datoteka
			</a>
		</div>
	{/if}

	<!-- <button
		class="mt-8 flex justify-between items-center gap-10 mb-4 w-full transition-colors hover:text-violet-600 dark:hover:text-violet-300 {t2Visible ? 'text-violet-700 dark:text-violet-400' : ''}"
		on:click={() => {
			t2Visible = !t2Visible
			t1Visible = false
			t3Visible = false
		}}
	>
		<h3 class="font-headline text-xl font-semibold text-current">Drugi zadatak</h3>

		<div class=" w-8 h-8 flex items-center justify-center rounded border border-current text-current">
			<ArrowDown class="w-6 h-6 transition-transform origin-center text-current {t2Visible ? '-scale-y-100' : ''}" />
		</div>
	</button>

	{#if t2Visible}
		<p class="pb-8 border-b border-gray-500 dark:border-zinc-600" transition:slide>
			🔔🔔 Čestitamo!
			<br /><br />
			Juraj Šebalj pozvao Vas je da budete počasni gost njegove emisije <i>Jura se fura</i>!
			<br /><br />
			Na probu ste dobili dva automobila: Mercedes AMG C63 te Audi RS e-tron GT. Juraj želi napraviti „malenu“ utrku: tko će prvi stići od Varaždina do Rijeke ako je udaljenost među njima 244 km, a uz prosječnu brzinu od 120 km/h potrebna su 2 sata i 30 minuta.
			Valja upamtiti da Audi jednim punjenjem može prijeći 486 km uz potrošnju od 20,3 kW za 100 km. S druge strane, Mercedes, benzinac, troši 10,4 L za 100 km i ima zapremninu goriva od 66 L.
			<br /><br />
			<b>Zadatak 1</b>
			<br />
			<i>1 bod</i>
			<br /><br />
			Kako bi utrka bila napetija, Juraj je uzeo Audi RS e-tron GT s razinom baterije od 90 % i krenuo, no nakon 130 km morao je stati i napuniti bateriju oko 35 % (potrebno 1.30 h da ju punjač DC 50 kW napuni 75 %), dok Vaš AMG već ima napunjen rezervoar i krećete sa zakašnjenjem od 20 minuta jer ste pisali kolokvij. Jeste li uspjeli stići na cilj prije gospodina Šebalja?
			<br /><br /><br />
			<b>Zadatak 2</b>
			<br />
			<i>1 bod</i>
			<br />
			<br />
			Nakon 169 km vožnje zove Juraj da Vas upita koliko je benzina preostalo u Vašoj jurilici. Koji je točan odgovor? <i>(Odgovor izraziti u litrama.)</i>
			<br /><br />
			<b>Zadatak 3</b>
			<br />
			<i>1 bod</i>
			<br /><br />
			Za svakih 50 km ispišite koliku razinu baterije odnosno benzina ima pojedini model.
		</p>
	{/if}

	<button
		class="mt-8 flex justify-between items-center gap-10 mb-4 w-full transition-colors hover:text-violet-600 dark:hover:text-violet-300 {t3Visible ? 'text-violet-700 dark:text-violet-400' : ''}"
		on:click={() => {
			t3Visible = !t3Visible
			t1Visible = false
			t2Visible = false
		}}
	>
		<h3 class="font-headline text-xl font-semibold text-current">Treći zadatak</h3>

		<div class=" w-8 h-8 flex items-center justify-center rounded border border-current text-current">
			<ArrowDown class="w-6 h-6 transition-transform origin-center text-current {t3Visible ? '-scale-y-100' : ''}" />
		</div>
	</button>

	{#if t3Visible}
		<p class="pb-8 border-b border-gray-500 dark:border-zinc-600" transition:slide>
		</p>
	{/if} -->
</section>
