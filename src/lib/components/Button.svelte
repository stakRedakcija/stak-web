<script>
    export let theme = 'default';
    export let href = '#';
  </script>
  
  <a href={href} class={`btn btn-${theme}`}>
    <slot></slot>
  </a>
  
  <style>
    :global(.btn) {
      @apply w-fit inline-flex mx-auto px-6 py-2 rounded-lg shadow-md text-lg font-headline font-semibold transition;
    }
  
    :global(.btn-default) {
      @apply bg-red-300 hover:bg-red-500 dark:bg-black hover:bg-red-400 dark:hover:bg-red-400 text-red-800 hover:text-white hover:text-red-50 dark:hover:text-black hover:shadow-lg shadow-red-200 dark:shadow-black/50 hover:shadow-red-400 dark:hover:shadow-red-900;
    }
    :global(.btn-blog) {
      @apply bg-amber-300 hover:bg-amber-500 dark:bg-black hover:bg-amber-400 dark:hover:bg-amber-400 text-amber-800 hover:text-white hover:text-amber-50 dark:hover:text-black hover:shadow-lg shadow-amber-200 dark:shadow-black/50 hover:shadow-amber-500 dark:hover:shadow-amber-900;
    }
    :global(.btn-magazine) {
      @apply bg-emerald-300 hover:bg-emerald-500 dark:bg-black hover:bg-emerald-400 dark:hover:bg-emerald-400 text-emerald-800 hover:text-white hover:text-emerald-50 dark:hover:text-black hover:shadow-lg shadow-emerald-200 dark:shadow-black/50 hover:shadow-emerald-400 dark:hover:shadow-emerald-900;
    }
    :global(.btn-competitive) {
      @apply bg-violet-300 hover:text-violet-900 dark:bg-black hover:bg-violet-400 dark:hover:bg-violet-400 text-violet-800 hover:text-white hover:text-violet-50 dark:hover:text-black hover:shadow-lg shadow-violet-200 dark:shadow-black/50 hover:shadow-violet-400 dark:hover:shadow-violet-900;
    }
    :global(.btn-impresum) {
      @apply text-gray-950 bg-gray-300 hover:bg-black dark:bg-gray-700 dark:hover:bg-black text-gray-300 hover:text-white hover:shadow-lg shadow-gray-400 dark:shadow-black/50 hover:shadow-gray-900;
    }
  </style>
  