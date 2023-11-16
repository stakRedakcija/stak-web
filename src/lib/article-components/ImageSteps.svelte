<script>
	import { ArrowLeft, ArrowRight } from '@inqling/svelte-icons/heroicon-24-solid'
	export let steps

	let currentIndex = 0

	$: step = steps[currentIndex]
</script>

<div class="w-full flex flex-col gap-y-4 py-20">
	<div class="flex justify-center gap-4">
		<button
			disabled={currentIndex === 0}
			class="shrink-0 text-amber-900 dark:text-amber-100 border border-amber-900 dark:border-amber-100 hover:bg-amber-900 dark:hover:bg-amber-100 hover:text-white dark:hover:text-black disabled:pointer-events-none disabled:opacity-40 dark:disabled:opacity-30 w-10 h-10 flex items-center justify-center rounded-full transition"
			on:click={() => currentIndex--}
		>
			<ArrowLeft class="w-6 h-6" />
		</button>

		<button
			disabled={currentIndex === steps.length - 1}
			class="shrink-0 text-amber-900 dark:text-amber-100 border border-amber-900 dark:border-amber-100 hover:bg-amber-900 dark:hover:bg-amber-100 hover:text-white dark:hover:text-black disabled:pointer-events-none disabled:opacity-40 dark:disabled:opacity-30 w-10 h-10 flex items-center justify-center rounded-full transition"
			on:click={() => currentIndex++}
		>
			<ArrowRight class="w-6 h-6" />
		</button>
	</div>

	<figure class="m-0 w-full">
		<img
			class="aspect-square object-contain select-none pointer-events-none drop-shadow-2xl"
			src={step.imageUrl}
			alt={step?.altText ?? step.caption}
		/>
		<figcaption class="m-0 mt-3 text-center text-amber-900 dark:text-amber-100 text-xl font-handwriting">{step.caption}</figcaption>
	</figure>

	<p class="text-center text-sm text-amber-900/60 dark:text-amber-100/40">Koristite strelice za mijenjanje slika</p>
</div>
