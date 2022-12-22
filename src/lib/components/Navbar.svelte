<script>
	import StakLogo from './StakLogo.svelte';
	import Sun from '@inqling/svelte-icons/solid/sun.svelte';
	import Moon from '@inqling/svelte-icons/solid/moon.svelte';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';

	export let theme = 'default';
	export let hasThemeToggle = true;

	let isDark = false;

	$: currentUrl = $page.url.pathname;

	const toggleTheme = () => {
		document.documentElement.classList.toggle('dark');

		isDark = document.documentElement.classList.contains('dark');
	};
</script>

<nav class="flex justify-between p-10">
	<a class="logo-{theme} md:fixed top-6 md:border-b pb-1.5 pl-0.5 pr-8 -left-5 md:-rotate-90" href="/">
		<StakLogo class="h-10 w-min" />
	</a>

	<ul class="hidden sm:flex items-center text-base md:ml-12 py-1 gap-8">
		<li><a class="navbar-link navbar-link-{theme}" class:active={currentUrl.startsWith('/blog')} href="/blog">Blog</a></li>
		<li><a class="navbar-link navbar-link-{theme}" class:active={currentUrl.startsWith('/casopisi')} href="/casopisi">Časopisi</a></li>
		<li><a class="navbar-link navbar-link-{theme}" class:active={currentUrl.startsWith('/natjecanja')} href="/natjecanja">Natjecanja</a></li>
	</ul>

	{#if hasThemeToggle}
		<button on:click={toggleTheme}>
			{#if isDark}
				<div in:slide>
					<Moon />
				</div>
			{:else}
				<div in:slide>
					<Sun />
				</div>
			{/if}
		</button>
	{/if}
</nav>

<style global lang="postcss">
	.logo-default {
		@apply text-red-500 dark:text-red-100 border-zinc-400 dark:border-zinc-500;
	}

	.logo-blog {
		@apply text-amber-900 dark:text-amber-200 border-red-600 dark:border-red-400;
	}

	.logo-magazine {
		@apply text-slate-100 border-red-600 dark:border-red-400;
	}

	.logo-competitive {
		@apply text-violet-600 dark:text-violet-300 border-red-600 dark:border-red-400;
	}

	.navbar-link {
		@apply decoration-dotted underline-offset-8;
	}

	.navbar-link-default {
		@apply decoration-red-400 dark:decoration-red-300;
	}

	.navbar-link-blog {
		@apply decoration-amber-500 dark:decoration-amber-300;
	}

	.navbar-link-magazine {
		@apply decoration-emerald-200;
	}

	.navbar-link-competitive {
		@apply decoration-violet-400 dark:decoration-violet-300;
	}

	.navbar-link.active {
		@apply underline pointer-events-none select-none;
	}
</style>
