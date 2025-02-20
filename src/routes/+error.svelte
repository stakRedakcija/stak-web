<script>
  import { page } from "$app/stores";
  import Button from '$lib/components/Button.svelte';
  import Heading from '$lib/components/Heading.svelte';

  const routes = [
    { base: "/casopisi/", theme: "magazine" },
    { base: "/blog/", theme: "blog" },
    { base: "/natjecanja/", theme: "competitive" },
    { base: "/impresum/", theme: "impresum" },
    { base: "/o-nama/", theme: "about_us" },
  ];

  let theme = "default";

  $: {
    const path = $page.url.pathname;
    theme = "default";
    for (const { base, theme: t } of routes) {
      if (path.startsWith(base) && path.length > base.length) {
        theme = t;
        break;
      }
    }
  }
</script>

<svelte:head>
  <title>Pogreška 404 - St@k</title>
</svelte:head>

<main class="flex items-center justify-center">
  <section class="flex flex-col lg:flex-row mx-auto gap-14 lg:gap-20 my-20 lg:my-32 w-[80vw] xl:w-max">
    <div>
      <Heading {theme} level={1}>Pogreška 404.</Heading>
      <p class="wide-title text-4xl font-headline tracking-tighter mt-5 mb-10">
        Oops! Ta stranica ne postoji.
      </p>
      <Button {theme} href="/">Vrati me na početnu</Button>
    </div>
  </section>
</main>
