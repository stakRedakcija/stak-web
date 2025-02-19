<script>
    import { onMount, onDestroy } from 'svelte';
    import { scale } from 'svelte/transition';
    import { ArrowUp } from '@inqling/svelte-icons/heroicon-24-solid';
  
    export let theme = 'default';
  
    const themeStyles = {
      default: {
        bg: 'bg-red-900 dark:bg-white',
        arrow: 'fill-red-100 dark:fill-black/90'
      },
      blog: {
        bg: 'bg-amber-900 dark:bg-slate-50',
        arrow: 'fill-amber-100 dark:fill-zinc-900'
      },
      competitive: {
        bg: 'bg-violet-900 dark:bg-violet-50',
        arrow: 'fill-violet-100 dark:fill-black/90'
      },
      magazine: {
        bg: 'bg-white',
        arrow: 'fill-gray-800'
      },
      about: {
        bg: 'bg-rose-900 dark:bg-slate-50',
        arrow: 'fill-rose-200 dark:fill-black/90'
      },
      impresum: {
        bg: 'bg-slate-900 dark:bg-slate-50',
        arrow: 'fill-gray-100 dark:fill-black/90'
      }
    };
  
    $: currentStyles = themeStyles[theme] || themeStyles.default;
  
    let showArrow = false;
    const scrollThreshold = 300;
  
    const handleScroll = () => {
      showArrow = window.scrollY > scrollThreshold;
    };
  
    onMount(() => {
      window.addEventListener('scroll', handleScroll);
    });
  
    onDestroy(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  </script>
  
  {#if showArrow}
    <button
      on:click={scrollToTop}
      transition:scale={{ duration: 300 }}
      class={`fixed bottom-8 right-12 p-2 w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-50 ${currentStyles.bg}`}>
      <ArrowUp size="12" class={currentStyles.arrow} />
    </button>
  {/if}
  