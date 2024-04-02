<script>
	export let quoteIndex
	export let counter
	export let attribution
</script>

<span class="cursor-pointer inline-block h-6 w-6 mx-2 bg-gray-300 rounded-full transition duration-300"
      class:bg-amber-900={quoteIndex === counter}
      on:click
      title={`Izjava by ${attribution}`}>
</span>
