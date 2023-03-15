<script>
	export let name;
	export let description;
	export let imageUrl;

	let className;
	export { className as class };

	export let imageClass = '';
</script>

<div class="flex items-center gap-6 {className}">
	<img class="m-0 p-0 w-40 aspect-square object-cover rounded-xl dark:brightness-75 dark:saturate-[75%] border-8 border-white dark:border-zinc-200 shadow -rotate-3 {imageClass}" src={imageUrl} alt={name} />
	<div class="flex flex-col gap-0.5 leading-none">
		<span class="text-xl wide-title text-amber-700 dark:text-yellow-100 font-normal">{name}</span>
		<span class="font-handwriting text-stone-500 dark:text-zinc-400">{description}</span>
	</div>
</div>
