<script>
	import { ArrowDown, ArrowLeft } from '@inqling/svelte-icons/heroicon-24-solid'
	import { slide } from 'svelte/transition'

	let t1Visible = true
	let t2Visible = false
	let t3Visible = false
</script>

<svelte:head>
	<title>Škljoc izvan okvira / Natjecanja - St@k</title>
</svelte:head>

<a style="font-stretch: 150%; font-weight: 280;" class="text-base flex items-center gap-2 mt-10 mb-6 mx-10 md:mx-20" href="/natjecanja"><ArrowLeft class="text-violet-700 dark:text-violet-200 w-5 h-5" /> Natjecanja</a>

<h1 class="wide-title text-9xl font-headline tracking-tighter m-10 md:m-20 mb-0 md:mb-0 text-violet-600 dark:text-violet-200">Škljoc izvan okvira</h1>

<section class="flex flex-col lg:flex-row mx-10 md:mx-20 gap-14 lg:gap-20 xl:mx-auto my-20 lg:my-32 w-[80vw] xl:w-max">
	<picture>
		<source srcset="/images/natjecanja/skljoc-izvan-okvira.jpg" type="image/webp" />
		<img
			class="border-8 border-white dark:border-black shadow-xl shadow-zinc-400 dark:shadow-black/50 rounded-lg object-cover w-full max-w-md rotate-6 max-lg:ml-auto"
			src="/images/natjecanja/2-1-0-kodiraj.jpg"
			alt="Grupa fotografa s fotoaparatima"
		/>
	</picture>

	<div class="flex flex-col gap-4 items-start justify-center max-w-md text-justify">
		<h2 class="font-headline text-5xl font-semibold text-violet-500 dark:text-violet-200 tracking-tighter">O natjecanju</h2>
		<p>
			Škljoc izvan okvira fotografsko je natjecanje u kojemu se mogu okušati svi. Sve što je potrebno je posjedovati bilo koji oblik kamere i tonu kreativnosti.
		</p>

		<p>
			Svaki tjedan tijekom trajanja natjecanja St@k objavljuje novi zadatak. Tematike su različite, ali vjerujemo da je svaka zanimljiva na svoj način te dopušta potpunu kreativnu slobodu natjecatelju.
		</p>

		 <a
			class="px-6 py-2 rounded-lg mt-8 flex shadow-md text-lg font-headline font-semibold bg-violet-100 dark:bg-black dark:text-violet-300 hover:bg-violet-700 dark:hover:bg-violet-400 text-violet-700 hover:text-violet-50 dark:hover:text-black hover:shadow-lg shadow-zinc-200 dark:shadow-black/50 hover:shadow-violet-400 dark:hover:shadow-violet-900 transition"
			href="mailto:stak@foi.hr"
			target="_blank"
			rel="noreferrer"
		>
			Prijavi se
		</a>

		<!--<a href="/blog/skljoc-izvan-okvira-2023-rezultati" class="text-md font-semibold underline underline-offset-4 decoration-dotted decoration-violet-600 dark:decoration-violet-300 hover:text-violet-600 dark:hover:text-violet-300 hover:decoration-solid transition-colors">Natjecanje je završilo, hvala svima koji su se prijavili!</a>-->
	</div>
</section>

<section class="flex flex-col mx-10 md:mx-20 xl:mx-auto my-20 lg:my-32 lg:max-w-screen-md xl:max-w-screen-sm">
	<h2 class="font-headline text-5xl font-semibold text-violet-500 dark:text-violet-200 tracking-tighter mb-10">Najava nove sezone!</h2>
	<small class="-mt-7 mb-10 text-gray-800 dark:text-gray-400 uppercase">ožujak 2024.</small>

	<p class="text-justify">
		Škljoc izvan okvira, fotografsko natjecanje koje potiče tvoju maštu, kreativnost i originalnost, ove sezone dolazi s novim izazovima!
		<br><br>
		Tvoje fotografske vještine bit će testirane zadatcima koji će te potaknuti da istražiš emocije, pokrete, boje te da nam pokažeš svoju jedinstvenu viziju svijeta.
		<br><br>
		<span class="underline">Naredna tri utorka</span> izići će po jedan zadatak. Na tebi je da uzmeš fotić i okineš nekoliko fotografija. Pošalji nam dvije najbolje fotografije, ispričaj priču koja stoji iza njih u 50 riječi, predstavi nam se kako bismo znali tko stoji iza umjetničkog djela i osmisli pseudonim koji će te pratiti do kraja natjecanja.
		<br><br>
		Ove sezone tvoje fotografije ne ocjenjuje samo žiri, već i studenti koji nas prate na društvenim mrežama. Nakon svakog zadatka na Instagramu ćemo objaviti radove natjecatelja, a lajkove ćemo uzeti u obzir pri bodovanju.
		<br><br>
		Tvoj trud i kreativnost neće proći neopaženo. Najbolje natjecatelje čekaju vrijedne nagrade.
		<br><br>
		Fotografije primamo na e-mail <a class="underline" href="mailto:stak@foi.hr">stak@foi.hr</a> s predmetom <em>Škljoc izvan okvira</em>. Prvi zadatak dolazi u <span class="font-semibold">utorak, 12. ožujka 2024.</span>
		<br><br>
		Jedino što ti sada preostaje jest pažljivo pratiti objave u narednim tjednima i baciti se na fotkanje.
		<br><br>
		Sretno! 📸
	</p>
</section>

<section class="flex flex-col mx-10 md:mx-20 xl:mx-auto my-20 lg:my-32 lg:max-w-screen-md xl:max-w-screen-sm">
	<h2 class="font-headline text-5xl font-semibold text-violet-500 dark:text-violet-200 tracking-tighter mb-10">Zadaci</h2>

	<button
		class="flex justify-between items-center gap-10 mb-4 w-full transition-colors hover:text-violet-600 dark:hover:text-violet-300 {t1Visible ? 'text-violet-700 dark:text-violet-400' : ''}"
		on:click={() => {
			t1Visible = !t1Visible
			t2Visible = false
			t3Visible = false
		}}
	>
		<h3 class="font-headline text-xl font-semibold text-current ">Prvi zadatak</h3>

		<div class="w-8 h-8 flex items-center justify-center rounded border border-current text-current">
			<ArrowDown class="w-6 h-6 transition-transform origin-center text-current {t1Visible ? '-scale-y-100' : ''}" />
		</div>
	</button>

	{#if t1Visible}
		<div class="pb-8 border-b border-gray-500 dark:border-zinc-600" transition:slide>
			<p>
				U svijetu fotografije portret je umjetnički prikaz osobe, obično fokusiran na lice i izraze lica, s ciljem otkrivanja unutarnje suštine. No, ovaj put, pozivamo te da iziđeš iz uobičajenih okvira i uđeš u svijet portreta životinje.
				<br><br>
				Tvoj je zadatak uhvatiti čaroliju života u oku neke životinje. Fokusiraj se na izražajnost očiju, pokušaj zabilježiti emocije, karakter i jedinstvenost života koji živi u tom biću. Pusti mašti na volju i istraži različite perspektive kako bi stvorio portret koji će gledatelja očarati i nagnati ga na razmišljanje. Portret životinje treba odražavati ljepotu prirode, njezinu snagu ili nježnost. Koristi se svjetlom i bojom da naglasiš detalje i stvoriš atmosferu koja će dočarati osobnost ili karakter te životinje.
				<br><br>
				Rok je za slanje fotografija <b>17. ožujka</b>, a šalješ ih na <a class="underline" href="mailto:stak@foi.hr">stak@foi.hr</a> s predmetom <em>Škljoc izvan okvira</em>. Ne zaboravi uključiti i kratak opis o tome kako si pristupio zadatku te što si želio postići svojim portretom.
			</p>
		</div>
	{/if}

	<button
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
		<div class="pb-8 border-b border-gray-500 dark:border-zinc-600" transition:slide>
			<p>
				...dolazi u utorak, <span class="font-semibold">19. ožujka 2024.</span>
			</p>
		</div>
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
		<div class="pb-8 border-b border-gray-500 dark:border-zinc-600" transition:slide>
			<p>
				...dolazi u utorak, <span class="font-semibold">26. ožujka 2024.</span>
			</p>
		</div>
	{/if}
</section>
