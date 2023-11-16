<script>
    import '../app.postcss'
    import Footer from '$lib/components/Footer.svelte'
    import {fly} from 'svelte/transition'
    import Navbar from '$lib/components/Navbar.svelte'
    import {page} from "$app/stores"

    export let data
    $: isLoggedIn = data.isLoggedIn

    $: currentRoute = $page.url.pathname
    $: theme = routeThemes[currentRoute] || 'default'

    const routeThemes = {
    	'/blog': 'blog',
    	'/casopisi': 'magazine',
    	'/natjecanja': 'competitive',
    	'/o-nama': 'about'
    }
</script>

<div
        class="transition-colors overflow-x-hidden"
        class:theme-default={theme === 'default'}
        class:halftone-bg={theme === 'default'}
        class:bg-blend-luminosity={theme === 'default'}
        class:theme-blog={theme === 'blog'}
        class:paper-bg-3={theme === 'blog'}
        class:bg-blend-darken={theme === 'blog'}
        class:dark:bg-blend-color-burn={theme === 'default' || theme === 'blog'}
        class:theme-magazines={theme === 'magazine'}
        class:theme-competitive={theme === 'competitive'}
        class:grid-bg={theme === 'competitive'}
        class:bg-blend-lighten={theme === 'competitive'}
        class:dark:bg-blend-overlay={theme === 'competitive'}
        class:theme-about={theme === 'about'}
>
    <Navbar {isLoggedIn} {theme} hasThemeToggle={!currentRoute.includes('/casopisi')}/>

    {#key currentRoute}
        <div class="max-sm:mt-40" in:fly={{ duration: 500, delay: 500, x: -100 }} out:fly={{ duration: 500, x: 100 }}>
            <slot/>
        </div>
    {/key}

    <Footer {theme}/>
</div>

<style global lang="postcss">
    .theme-default {
        @apply text-slate-900 dark:text-white bg-red-100 dark:bg-black/90
    }

    .theme-blog {
        @apply text-slate-900 dark:text-slate-50 bg-amber-100 dark:bg-zinc-900
    }

    .theme-competitive {
        @apply text-slate-900 dark:text-violet-50 bg-violet-100 dark:bg-black/90
    }

    .theme-magazines {
        @apply text-slate-100 bg-gradient-to-tl from-zinc-900 to-gray-900
    }
</style>
