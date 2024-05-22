<script>
	import { Gmail, Facebook, Twitter, Instagram, Youtube as YouTube, Issuu } from '@inqling/svelte-icons/simple-icons'

	export let type
	export let url
	export let theme = 'default'
</script>

<a class="group flex items-center justify-center social-icon-theme-{theme} border-[3px] border-transparent rounded-md hover:shadow-md p-1.5 md:p-2.5 transition" href={url}>
	{#if type === 'mail'}
		<Gmail class="social-icon" />
	{:else if type === 'facebook'}
		<Facebook class="social-icon" />
	{:else if type === 'twitter'}
		<Twitter class="social-icon" />
	{:else if type === 'instagram'}
		<Instagram class="social-icon" />
	{:else if type === 'youtube'}
		<YouTube class="social-icon" />
	{:else if type === 'issuu'}
		<Issuu class="social-icon" />
	{/if}
</a>

<style global lang="postcss">
	.social-icon {
		@apply w-7 h-7 fill-current;
	}

	.social-icon-theme-default,
	.social-icon-theme-blog,
	.social-icon-theme-competitive {
		@apply hover:bg-white dark:hover:bg-black/50;
	}

	.social-icon-theme-default {
		@apply text-red-900/90 dark:text-red-100  hover:border-b-red-600 hover:shadow-red-500/25 dark:hover:shadow-red-400/30 decoration-red-500 dark:decoration-yellow-200;
	}

	.social-icon-theme-blog {
		@apply text-amber-900/90 dark:text-amber-100 hover:border-b-amber-600 dark:hover:border-b-amber-400 hover:shadow-amber-500/25 dark:hover:shadow-amber-400/25 decoration-amber-500 dark:decoration-amber-200;
	}

	.social-icon-theme-magazine {
		@apply text-emerald-50 hover:bg-black/50 hover:border-b-emerald-500 hover:shadow-emerald-500/25 decoration-emerald-500;
	}

	.social-icon-theme-competitive {
		@apply text-violet-900/80 dark:text-violet-100 hover:border-b-violet-600 dark:hover:border-b-violet-500 hover:shadow-violet-500/25 decoration-violet-600 dark:decoration-violet-500;
	}
</style>
