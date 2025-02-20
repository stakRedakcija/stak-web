<script>
    export let theme = "default";
    export let level = 1;
  
    const baseClasses =
      level === 1 ? "wide-title text-6xl font-headline tracking-tighter" : "";
  </script>
  
  <svelte:element this={`h${level}`} class={`${baseClasses} heading heading-${theme}`}>
    <slot />
  </svelte:element>
  
  <style global lang="postcss">
    .heading-default {
      @apply text-red-500 dark:text-red-900;
    }
    .heading-blog {
      @apply text-yellow-900 dark:text-yellow-200;
    }
    .heading-competitive {
      @apply text-violet-500 dark:text-violet-900;
    }
    .heading-magazine {
      @apply text-emerald-300 dark:text-emerald-900;
    }
    .heading-impresum {
      @apply text-slate-900 dark:text-slate-50;
    }
    .heading-about_us {
      @apply text-yellow-900 dark:text-yellow-200;
    }
  </style>
  