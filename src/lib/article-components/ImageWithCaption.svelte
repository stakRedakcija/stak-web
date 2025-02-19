<script>
  export let images = [];
  export let className = "";
  export { className as class };
  export let imageClass = "";
  export let imageUrl = "";
  export let caption = "";
  export let linkUrl = "";

  $: rotations = images.length > 0
    ? images.map(() => Math.random() * 4 - 2)
    : [];

  $: singleRotation = imageUrl ? Math.random() * 4 - 2 : 0;
</script>

{#if images.length > 0}
  <div class="max-w-[56ch]">
    <div class="flex flex-col sm:flex-row sm:gap-0 {className}">
      {#each images as { url, caption }, index}
        <figure class="flex flex-col items-center" 
            style="transform: rotate({rotations[index]}deg);">
          {#if linkUrl}
            <a href={linkUrl} target="_blank" class="group">
              <img 
                src={url}
                alt={caption}
                class="max-w-full w-full sm:h-[28rem] sm:w-auto object-cover rounded-xl dark:brightness-75 dark:saturate-[75%] border-8 border-white dark:border-zinc-200 shadow {imageClass}"
              />
            </a>
          {:else}
            <img 
              src={url}
              alt={caption}
              class="max-w-full w-full sm:h-[28rem] sm:w-auto object-cover rounded-xl dark:brightness-75 dark:saturate-[75%] border-8 border-white dark:border-zinc-200 shadow {imageClass}"
            />
          {/if}
          <figcaption class="text-sm text-stone-500 dark:text-zinc-400 text-center">
            {@html caption}
          </figcaption>
        </figure>
      {/each}
    </div>
  </div>
  
{:else if imageUrl}
  <div class="max-w-[56ch]">
    <figure class="flex flex-col items-center {className}" 
        style="transform: rotate({singleRotation}deg);">
      {#if linkUrl}
        <a href={linkUrl} target="_blank" class="group">
          <img 
            src={imageUrl}
            alt={caption}
            class="max-w-full w-full sm:h-[28rem] sm:w-auto object-cover rounded-xl dark:brightness-75 dark:saturate-[75%] border-8 border-white dark:border-zinc-200 shadow group-hover:border-amber-600 dark:group-hover:border-amber-100 transition-colors {imageClass}"
          />
        </a>
      {:else}
        <img 
          src={imageUrl}
          alt={caption}
          class="max-w-full w-full sm:h-[28rem] sm:w-auto object-cover rounded-xl dark:brightness-75 dark:saturate-[75%] border-8 border-white dark:border-zinc-200 shadow {imageClass}"
        />
      {/if}
      <figcaption class="text-sm text-stone-500 dark:text-zinc-400 text-center">
        {@html caption}
      </figcaption>
    </figure>
  </div>
{/if}
