---
title: 'Jeste li već naučili što znači CPSRK?'
author: 'St@k'
date: 2024-03-29
image: /clanci-slike/2024/cpsrk-logo.png
imageSource: 'CPSRK'
layout: blog
featured: false
sponsored: true
categories:
  - 'kolumna'
---

<p class="mx-auto">Vjerujemo kako ste se dosad već susreli s, lako moguće krivo izgovorenim ili napisanim, pojmom CPSRK. Najčešće čujemo CPRSK, ali ako znate da iza CPSRK-a stoji Centar za podršku studentima i razvoj karijera, jasno je kako se radi o jednom od važnijih centara na FOI-ju.</p>

<p class="mx-auto">CPSRK na FOI-ju postoji od 2012. godine, a do danas je skupio i više nego dovoljno iskustva kako bi nam pružio samo najbolje informacije iz svijeta zapošljavanja, stručnih praksi, poslodavaca i manje-više svega povezanog sa studentima.</p>

<p class="mx-auto">Sve informacije o Centru dostupne su na <i><a href="https://cpsrk.foi.hr" target="_blank">web-stranici</a></i>, a posebno bismo vam preporučili aplikaciju dostupnu ovdje: <a href="https://cpsrkapp.foi.hr/" target="_blank">https://cpsrkapp.foi.hr/</a> U aplikaciji imate brdo informacija, prilika za prakse, poslove i slično pa bacite oko. Također, u aplikaciji možete urediti svoj profil, a možete pregledavati i profile poslodavaca te na taj način postepeno ući u poslovni svijet.</p>

<p class="mx-auto">Vrata Centra uvijek su otvorena svim studentima, a možete ih pronaći u zgradi FOI 1, prva vrata desno nakon glavnog ulaza. Ipak, preporučujemo prethodnu najavu <i>e-mailom</i> na <a href="mailto:cpsrk@foi.unizg.hr">cpsrk@foi.unizg.hr</a>. Iskoristite znanja CPSRK-a i olakšajte si akademski, ali i poslovni put!</p>

<script>
	import quotes from './cpsrkQuotes.json'
	import Quote from '$lib/components/QuoteRotator/Quote.svelte'
	import Dot from '$lib/components/QuoteRotator/Dot.svelte'

	let quoteIndex = 0
	let title = quotes[quoteIndex].title
	let quote = quotes[quoteIndex].quote
	let author = quotes[quoteIndex].author

	const nextQuote = () => {
		quoteIndex = quoteIndex === quotes.length - 1 ? 0 : quoteIndex + 1
		title = quotes[quoteIndex].title
		quote = quotes[quoteIndex].quote
		author = quotes[quoteIndex].author
	}

	const prevQuote = () => {
		quoteIndex = quoteIndex === 0 ? quotes.length - 1 : quoteIndex - 1
		title = quotes[quoteIndex].title
		quote = quotes[quoteIndex].quote
		author = quotes[quoteIndex].author
	}
    
    const switchToQuote = (i) => {
        quoteIndex = i;
		title = quotes[quoteIndex].title
        quote = quotes[quoteIndex].quote
        author = quotes[quoteIndex].author
    }
</script>

<section class="w-11/12 mt-20 mx-auto mb-0">
    <div class="relative rounded-t-md bg-sky-500 dark:bg-sky-900 pt-4 flex flex-col items-center justify-center sm:min-h-[20rem] md:min-h-[25rem] min-h-[30rem]">
        {#key quote}
            <Quote {title} {quote} {author} />
        {/key}

        <span class="btn-prev-next left-0 rounded-r-md hidden sm:block md:block, lg:block xl:block select-none" title="Prethodna izjava"
              on:click={prevQuote}>&#10094;</span>
        <span class="btn-prev-next absolute right-0 rounded-l-md hidden sm:block md:block, lg:block xl:block select-none" title="Sljedeća izjava"
              on:click={nextQuote}>&#10095;</span>
    </div>

    <div class="text-center py-5 bg-amber-200 dark:bg-gray-800 relative bottom-0 rounded-b-md">
        {#each quotes as quote, i}
            <Dot counter={i} {quoteIndex} attribution={quote.author} on:click={() => switchToQuote(i)}/>
        {/each}
    </div>
</section>

<br><br>
<b class="text-xl">Povezani članci</b>
<ul>
    <li><a href="/blog/cpsrk-financiranje-aktivnosti">Kako do sredstava za željene aktivnosti?</a></li>
    <li><a href="/blog/workshop-days-2024">Workshop days 2024.</a></li>
</ul>

<style>
    .btn-prev-next {
        @apply cursor-pointer absolute top-1/2 transform -translate-y-1/2 py-4 px-6 text-base font-bold text-gray-700 bg-gray-200 border-l-4 border-gray-300;
    }
</style>