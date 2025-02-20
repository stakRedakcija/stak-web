<script>
  import { page } from "$app/stores";

  let theme = "default";
  
  const casopisiBase = "/casopisi/";
  const blogBase = "/blog/";
  const natjecanjaBase = "/natjecanja/";
  const impresumBase = "/impresum/";

  $: {
    const path = $page.url.pathname;
    if (path.startsWith(casopisiBase) && path.length > casopisiBase.length) {
      theme = "magazine";
    } else if (path.startsWith(blogBase) && path.length > blogBase.length) {
      theme = "blog";
    } else if (path.startsWith(natjecanjaBase) && path.length > natjecanjaBase.length) {
      theme = "competitive";
    } else if (path.startsWith(impresumBase) && path.length > impresumBase.length) {
      theme = "impresum";
    } else {
      theme = "default";
    }
  }


  function getButtonThemes(theme) {
    switch (theme) {
      case "default":
        return "w-fit inline-flex mx-auto px-6 py-2 rounded-lg shadow-md text-lg font-headline font-semibold bg-red-300 hover:bg-red-500 dark:bg-black hover:bg-red-200 dark:hover:bg-red-400 text-red-800 hover:text-white hover:text-red-50 dark:hover:text-black hover:shadow-lg shadow-red-200 dark:shadow-black/50 hover:shadow-red-400 dark:hover:shadow-red-900 transition";
      case "blog":
        return "w-fit inline-flex mx-auto px-6 py-2 rounded-lg shadow-md text-lg font-headline font-semibold bg-amber-300 hover:bg-amber-500 dark:bg-black hover:bg-amber-200 dark:hover:bg-amber-400 text-amber-800 hover:text-white hover:text-amber-50 dark:hover:text-black hover:shadow-lg shadow-amber-200 dark:shadow-black/50 hover:shadow-amber-400 dark:hover:shadow-amber-900 transition";
      case "magazine":
        return "w-fit inline-flex mx-auto px-6 py-2 rounded-lg shadow-md text-lg font-headline font-semibold bg-emerald-300 hover:bg-emerald-500 dark:bg-black hover:bg-emerald-200 dark:hover:bg-emerald-400 text-emerald-800 hover:text-white hover:text-emerald-50 dark:hover:text-black hover:shadow-lg shadow-emerald-200 dark:shadow-black/50 hover:shadow-emerald-400 dark:hover:shadow-emerald-900 transition";
      case "competitive":
        return "w-fit inline-flex mx-auto px-6 py-2 rounded-lg shadow-md text-lg font-headline font-semibold bg-violet-300 hover:bg-violet-500 dark:bg-black hover:bg-violet-200 dark:hover:bg-violet-400 text-violet-800 hover:text-white hover:text-violet-50 dark:hover:text-black hover:shadow-lg shadow-violet-200 dark:shadow-black/50 hover:shadow-violet-400 dark:hover:shadow-violet-900 transition";
      case "impresum":
        return "w-fit inline-flex mx-auto px-6 py-2 rounded-lg shadow-md text-lg font-headline font-semibold text-gray-950 bg-gray-300 hover:bg-black dark:bg-gray-700 dark:hover:bg-black text-gray-300 hover:text-white hover:shadow-lg shadow-gray-400 dark:shadow-black/50 hover:shadow-gray-900 transition";
    }
  }
</script>

<svelte:head>
  <title>Pogreška 404 - St@k</title>
</svelte:head>

<main class="min-h-screen flex items-center justify-center">
  <section
    class="flex flex-col lg:flex-row mx-auto gap-14 lg:gap-20 my-20 lg:my-32 w-[80vw] xl:w-max"
  >
    <div>
      <h1 class="wide-title text-6xl font-headline tracking-tighter">
        Pogreška 404.
      </h1>
      <p class="wide-title text-4xl font-headline tracking-tighter mt-5 mb-10">
        Oops! Ta stranica ne postoji.
      </p>
      <a class={getButtonThemes(theme)} href="/"> Vrati me na početnu </a>
    </div>
  </section>
</main>
