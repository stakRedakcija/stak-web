<script>
	import StakLogo from './StakLogo.svelte'
	import { page } from '$app/stores'
	import SocialIcon from './SocialIcon.svelte'

	export let theme = 'default'
	export let socialLinks = []

	$: currentUrl = $page.url.pathname
</script>

<footer class:dark={theme === 'magazine'}
		class="footer-theme-{theme} mt-auto p-5 md:p-10 lg:px-20 gap-5 xl:gap-8 bg-gradient-to-br border-t transition flex max-md:flex-col items-center">
	<a
			href="/"
			class="max-md:mx-auto my-auto flex items-center self-start md:justify-self-start gap-4 px-3 py-2 bg-white dark:bg-zinc-900 border-[3px] border-slate-900 dark:border-zinc-400 text-red-500 dark:text-red-500 shadow shadow-slate-900 dark:shadow-zinc-400 rounded-lg boxy-box transition select-none"
	>
		<StakLogo class="w-20 h-min sm:w-24"/>

		<p class="text-base leading-[1.1]! text-slate-800 dark:text-stone-300 max-xl:hidden">
			<span class="font-headline stretch-1">Studentska</span>
			<br/>
			<span class="font-headline stretch-2">aktivnost</span>
		</p>
	</a>

	<p class="text-xs ml-0.5 max-2xl:hidden w-44 dark:text-stone-300">
		Časopis studenata
		<a class="stretch-foi-link" href="https://foi.hr" target="_blank" rel="noreferrer">FOI-ja</a>
	</p>

	<nav class="flex flex-wrap items-center gap-1">
		<a class="stretchy-footer-link" class:active={currentUrl.startsWith('/blog')} href="/blog">Blog</a>
		<a class="stretchy-footer-link" class:active={currentUrl.startsWith('/casopisi')} href="/casopisi">Časopisi</a>
		<a class="stretchy-footer-link" class:active={currentUrl.startsWith('/natjecanja')} href="/natjecanja">Natjecanja</a>
	</nav>

	<div class="md:ml-auto flex flex-wrap items-center justify-end gap-x-4 md:gap-x-6 gap-y-1 md:gap-1 w-max md:w-48 lg:w-max">
		{#each socialLinks as { type, url }}
			<SocialIcon {type} {url} {theme}/>
		{/each}
	</div>
</footer>

<style global lang="postcss">
	.footer-theme-default {
		@apply from-red-600/5 to-red-600/0 border-red-200/75 dark:border-red-200/10;
	}

	.footer-theme-blog {
		@apply from-amber-500/10 to-amber-500/0 border-amber-400/25 dark:border-amber-200/10;
	}

	.footer-theme-magazine {
		@apply from-emerald-500/5 to-emerald-500/0 border-emerald-400/10;
	}

	.footer-theme-competitive {
		@apply from-violet-600/5 to-violet-600/0 border-violet-400/10;
	}

	.footer-theme-default .stretchy-footer-link,
	.footer-theme-blog .stretchy-footer-link,
	.footer-theme-competitive .stretchy-footer-link {
		@apply hover:bg-white dark:hover:bg-black/50;
	}

	.footer-theme-default .stretchy-footer-link {
		@apply text-red-900 dark:text-red-100  hover:border-b-red-600 hover:shadow-red-500/25 dark:hover:shadow-red-400/30 decoration-red-500 dark:decoration-yellow-200;
	}

	.footer-theme-blog .stretchy-footer-link {
		@apply text-amber-900 dark:text-amber-50 hover:border-b-amber-600 dark:hover:border-b-amber-400 hover:shadow-amber-500/25 dark:hover:shadow-amber-400/25 decoration-blue-700 dark:decoration-amber-200;
	}

	.footer-theme-magazine .stretchy-footer-link {
		@apply text-emerald-50 hover:bg-black/50 hover:border-b-emerald-500 hover:shadow-emerald-500/25 decoration-emerald-500;
	}

	.footer-theme-competitive .stretchy-footer-link {
		@apply text-violet-900 dark:text-violet-100 hover:border-b-violet-600 dark:hover:border-b-violet-500 hover:shadow-violet-500/25 decoration-orange-400 dark:decoration-violet-500;
	}

	.stretch-1 {
		font-stretch: 75%;
		font-weight: 540;
	}

	.stretch-2 {
		font-stretch: 97%;
		font-weight: 540;
	}

	.stretch-foi-link {
		@apply transition-all underline underline-offset-4 decoration-wavy decoration-blue-400 hover:decoration-red-500 dark:decoration-sky-400 dark:hover:decoration-sky-200;
		font-stretch: 100%;
		font-weight: 480;
	}

	.stretch-foi-link:hover {
		font-stretch: 115%;
		font-weight: 760;
	}

	.boxy-box {
		box-shadow: 1px 1px 0 1px var(--tw-shadow-color), 2px 2px 0 1px var(--tw-shadow-color), 3px 3px 0 1px var(--tw-shadow-color);
	}

	.boxy-box:hover {
		box-shadow: none;
	}

	.stretchy-footer-link {
		@apply transition-default-plus-var-font text-lg lg:text-xl px-2 pt-2 pb-1.5 rounded-md border-[3px] border-transparent hover:shadow-md decoration-wavy underline-offset-8;

		font-variation-settings: 'wght' 450, 'wdth' 78, 'slnt' 0, 'YTLC' 480, 'YTUC' 648, 'YOPQ' 65, 'GRAD' 0, 'YTDE' -203;
	}

	.stretchy-footer-link:hover {
		font-variation-settings: 'wght' 450, 'wdth' 78, 'slnt' 0, 'YTLC' 570, 'YTUC' 712, 'YOPQ' 32, 'GRAD' 150, 'YTDE' -98;
	}

	.stretchy-footer-link.active {
		@apply underline pointer-events-none select-none;

		font-variation-settings: 'wght' 450, 'wdth' 78, 'slnt' -4, 'YTLC' 570, 'YTUC' 712, 'YOPQ' 32, 'GRAD' 85, 'YTDE' -203;
	}
</style>
