<script>
	import { getRandomInt } from '$lib/utils/index';

	import Envelope from '@inqling/svelte-icons/solid/envelope.svelte';
	import Facebook from '@inqling/svelte-icons/brand/facebook.svelte';
	import Twitter from '@inqling/svelte-icons/brand/twitter.svelte';
	import Instagram from '@inqling/svelte-icons/brand/instagram.svelte';
	import YouTube from '@inqling/svelte-icons/brand/youtube.svelte';
	import Issuu from '@inqling/svelte-icons/brand/issuu.svelte';
	export let data;

	const { type, label, url, text } = data;
</script>

<a class="group drop-shadow-sm" href={url}>
	<div
		class="flex items-center gap-4 bg-red-300 dark:bg-red-900 ys-bg bg-blend-overlay dark:bg-blend-hard-light px-4 py-2 shadow-inner shadow-red-200 group-hover:shadow-red-300 dark:shadow-black dark:group-hover:shadow-red-900/60 transition torn-paper-xl-{getRandomInt(
			3,
			11
		)}"
		style:border-radius={`${getRandomInt(40, 90) / 100}rem`}
	>
		{#if type === 'mail'}
			<Envelope class="social-icon-lg" />
		{:else if type === 'facebook'}
			<Facebook class="social-icon-lg" />
		{:else if type === 'twitter'}
			<Twitter class="social-icon-lg" />
		{:else if type === 'instagram'}
			<Instagram class="social-icon-lg" />
		{:else if type === 'youtube'}
			<YouTube class="social-icon-lg" />
		{:else if type === 'issuu'}
			<Issuu class="social-icon-lg" />
		{/if}

		<div>
			<p class="font-headline text-base md:text-lg dark:text-red-100 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors">{label}</p>
			<p class="text-xs -mt-0.5 md:-mt-1.5 text-zinc-500 dark:text-zinc-400 group-hover:text-red-400 dark:group-hover:text-red-200">{text}</p>
		</div>
	</div>
</a>

<style global lang="postcss">
	.social-icon-lg {
		@apply w-8 h-8 fill-current text-red-500 dark:text-red-200 group-hover:text-red-700 dark:group-hover:text-red-500 transition-colors;
	}
</style>
