<script>
  import { onMount, onDestroy } from "svelte";
  import { scale } from "svelte/transition";

  export let theme = "default";

  const themeStyles = {
    default: {
      bg: "bg-red-900 dark:bg-white",
      arrow: "stroke-red-100 dark:stroke-black/90",
    },
    blog: {
      bg: "bg-amber-900 dark:bg-slate-50",
      arrow: "stroke-amber-100 dark:stroke-zinc-900",
    },
    competitive: {
      bg: "bg-violet-900 dark:bg-violet-50",
      arrow: "stroke-violet-100 dark:stroke-black/90",
    },
    magazine: {
      bg: "bg-white",
      arrow: "stroke-gray-800",
    },
    about: {
      bg: "bg-rose-900 dark:bg-slate-50",
      arrow: "stroke-rose-200 dark:stroke-black/90",
    },
    impresum: {
      bg: "bg-slate-900 dark:bg-slate-50",
      arrow: "stroke-gray-100 dark:stroke-black/90",
    },
  };

  $: currentStyles = themeStyles[theme] || themeStyles.default;

  let showArrow = false;
  const scrollThreshold = 300;

  const handleScroll = () => {
    showArrow = window.scrollY > scrollThreshold;
  };

  // Only run this on the client side
  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
</script>

{#if showArrow}
  <button
    on:click={scrollToTop}
    transition:scale={{ duration: 300 }}
    class={`fixed bottom-8 right-12 p-2 w-12 h-12 flex items-center justify-center rounded-full shadow-lg z-150 ${currentStyles.bg}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      class={`size-6 ${currentStyles.arrow}`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
      />
    </svg>
  </button>
{/if}
