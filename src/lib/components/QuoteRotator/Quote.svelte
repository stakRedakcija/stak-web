<script>
	import {slide} from 'svelte/transition'

	export let title
	export let quote
	export let author
</script>

<div class="block w-[70%] text-justify font-light text-base" transition:slide>
    <h1 class="font-light mb-2">{title}</h1>
    <q class="text-white font-sans">{@html quote}</q>
    <p class="text-right my-4 italic font-handwriting">&mdash;{author}</p>
</div>