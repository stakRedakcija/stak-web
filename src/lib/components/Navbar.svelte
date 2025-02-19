<script>
    import StakLogo from "./StakLogo.svelte";
    import {
        Sun,
        Moon,
        Bars3,
        XMark,
        Power,
    } from "@inqling/svelte-icons/heroicon-24-solid";

    import { page } from "$app/stores";
    import { slide, fly } from "svelte/transition";
    import SocialIcon from "./SocialIcon.svelte";

    export let theme = "default";
    export let hasThemeToggle = true;
    export let isLoggedIn = false;

    let isDark = false;

    $: currentUrl = $page.url.pathname;

    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
        isDark = document.documentElement.classList.contains("dark");
    };

    let mobileMenuOpen = false;

    export let socialLinks = {
        mail: "mailto:stak@foi.hr",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        youtube: "https://www.youtube.com/channel/UC-wqKxxGZIlbZIw7iroJi0Q",
        issuu: "https://issuu.com",
    };

    let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<nav
    class="{scrollY > 48
        ? `navbar-${theme} backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70`
        : 'bg-transparent'} 
         navbar-fade flex justify-between p-10 max-sm:pb-24 max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:right-0 max-sm:z-40 transition"
>
    <a
        class="logo-{theme} md:fixed top-6 md:border-b pb-1.5 pl-0.5 pr-8 -left-5 md:-rotate-90"
        href="/"
    >
        <StakLogo class="h-10 w-[4.75rem]" />
    </a>

    <ul class="hidden sm:flex items-center text-base md:ml-12 py-1 gap-8">
        <li>
            <a
                class="navbar-link navbar-link-{theme}"
                class:active={currentUrl.startsWith("/blog")}
                href="/blog">Blog</a
            >
        </li>
        <li>
            <a
                class="navbar-link navbar-link-{theme}"
                class:active={currentUrl.startsWith("/casopisi")}
                href="/casopisi">Časopisi</a
            >
        </li>
        <li>
            <a
                class="navbar-link navbar-link-{theme}"
                class:active={currentUrl.startsWith("/natjecanja")}
                href="/natjecanja">Natjecanja</a
            >
        </li>
        <li>
            <a
                class="navbar-link navbar-link-{theme}"
                class:active={currentUrl.startsWith("/o-nama")}
                href="/o-nama">O nama</a
            >
        </li>
        <li>
            <a
                class="navbar-link navbar-link-{theme}"
                class:active={currentUrl.startsWith("/impresum")}
                href="/impresum">Impresum</a
            >
        </li>
    </ul>

    <div class="flex gap-5">
        {#if isLoggedIn}
            <button
                on:click={() =>
                    (location.href = `${location.origin}/api/auth/logout`)}
            >
                <Power />
            </button>
        {/if}
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

        <button class="sm:hidden" on:click={() => (mobileMenuOpen = true)}>
            <Bars3 />
        </button>
    </div>
</nav>

{#if mobileMenuOpen}
    <div
        in:fly={{ duration: 600, x: 100 }}
        out:fly={{ duration: 300, x: 100 }}
        class="navbar-{theme} flex flex-col fixed z-50 inset-0 p-10 bg-red-50 dark:bg-zinc-900 backdrop-blur-3xl sm:hidden"
    >
        <div class="flex justify-between mb-10">
            <a
                on:click={() => (mobileMenuOpen = false)}
                class="logo-{theme} md:fixed top-6 md:border-b pb-1.5 pl-0.5 pr-8 -left-5 md:-rotate-90"
                href="/"
            >
                <StakLogo class="h-10 w-min" />
            </a>

            <button class="sm:hidden" on:click={() => (mobileMenuOpen = false)}>
                <XMark />
            </button>
        </div>

        <ul class="flex flex-col text-2xl md:ml-12 py-1 gap-6">
            <li>
                <a
                    on:click={() => (mobileMenuOpen = false)}
                    class="wide-title navbar-link navbar-link-{theme}"
                    class:active={currentUrl.startsWith("/blog")}
                    href="/blog">Blog</a
                >
            </li>
            <li>
                <a
                    on:click={() => (mobileMenuOpen = false)}
                    class="wide-title navbar-link navbar-link-{theme}"
                    class:active={currentUrl.startsWith("/casopisi")}
                    href="/casopisi">Časopisi</a
                >
            </li>
            <li>
                <a
                    on:click={() => (mobileMenuOpen = false)}
                    class="wide-title navbar-link navbar-link-{theme}"
                    class:active={currentUrl.startsWith("/natjecanja")}
                    href="/natjecanja">Natjecanja</a
                >
            </li>
            <li>
                <a
                    on:click={() => (mobileMenuOpen = false)}
                    class="wide-title navbar-link navbar-link-{theme}"
                    class:active={currentUrl.startsWith("/o-nama")}
                    href="/o-nama">O nama</a
                >
            </li>
            <li>
                <a
                    on:click={() => (mobileMenuOpen = false)}
                    class="wide-title navbar-link navbar-link-{theme}"
                    class:active={currentUrl.startsWith("/impresum")}
                    href="/impresum">Impresum</a
                >
            </li>
        </ul>

        <div class="flex flex-wrap gap-x-4 gap-y-1 md:gap-1 w-7/12 mt-auto">
            {#each Object.entries(socialLinks) as [type, url]}
                <SocialIcon {type} {url} {theme} />
            {/each}
        </div>
    </div>
{/if}

<style global lang="postcss">
    .navbar-default {
        @apply max-sm:bg-red-100/90 dark:max-sm:bg-zinc-900/80;
    }

    .navbar-blog {
        @apply max-sm:bg-yellow-100/90 dark:max-sm:bg-neutral-900/80;
    }

    .navbar-magazine {
        @apply max-sm:bg-slate-900/80;
    }

    .navbar-competitive {
        @apply max-sm:bg-white/90 dark:max-sm:bg-zinc-900/80;
    }

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

    .navbar-fade {
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
    }

    @media (max-width: 640px) {
        .navbar-fade {
            -webkit-mask-image: linear-gradient(
                to bottom,
                black 0%,
                black 50%,
                transparent 100%
            );
            mask-image: linear-gradient(
                to bottom,
                black 0%,
                black 30%,
                rgb(0 0 0 / 0.6) 55%,
                transparent 100%
            );
        }
        .navbar-fade.blur {
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
        }
    }
</style>
