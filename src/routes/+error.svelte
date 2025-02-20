<script>
  export let status;
</script>

<svelte:head>
  <title>404 - St@k</title>
</svelte:head>

<main>
  <section
    class="flex flex-col lg:flex-row mx-10 md:mx-20 gap-14 lg:gap-20 xl:mx-auto my-20 lg:my-32 w-[80vw] xl:w-max"
  >
    <div class="text-center">
      <h1
        class="wide-title text-6xl font-headline tracking-tighter text-red-600 dark:text-red-300"
      >
        Greška 404.
      </h1>
      <p
        class="wide-title text-3xl font-headline tracking-tighter mt-5 mb-10 text-grey-300 dark:text-grey-600"
      >
        Oops! Ta stranica ne postoji.
      </p>
      <a
        class="w-fit inline-flex mx-auto px-6 py-2 rounded-lg shadow-md text-lg font-headline font-semibold bg-red-600 dark:bg-black hover:bg-red-200 dark:hover:bg-red-400 text-grey-100 hover:text-red-50 dark:hover:text-black hover:shadow-lg shadow-red-200 dark:shadow-black/50 hover:shadow-red-400 dark:hover:shadow-red-900 transition"
        href="/"
      >
        Vrati me na početnu
      </a>
    </div>
  </section>
</main>
