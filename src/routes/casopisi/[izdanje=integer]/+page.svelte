<script>
	import { ArrowLeft } from '@inqling/svelte-icons/heroicon-24-solid'
	import { DocumentArrowDown } from '@inqling/svelte-icons/heroicon-24-outline'

	export let data
	const { izdanje } = data
</script>

<a style="font-stretch: 150%; font-weight: 280;" class="text-base flex items-center gap-2 mt-10 mb-6 mx-10 md:mx-20"
   href="/casopisi">
    <ArrowLeft class="text-emerald-400 w-5 h-5"/>Arhiva časopisa</a>

<h1 class="wide-title text-9xl font-headline tracking-tighter m-10 md:m-20 mb-0 md:mb-0">Stak {izdanje}</h1>

<div class="w-full flex flex-col gap-10 p-10 md:p-20">
    <iframe class="w-full aspect-[210/297] lg:aspect-video rounded-xl scrollbar-hide" title="Stak {izdanje}"
            src="/casopisi/stak-{izdanje}.pdf" frameborder="0"></iframe>

    <a class="mx-auto px-4 py-1 rounded-md flex items-center gap-2 shadow-md text-lg font-headline font-semibold bg-black hover:bg-emerald-400 text-emerald-50 hover:text-black hover:shadow-lg shadow-black/50 hover:shadow-emerald-900 transition"
       href='/casopisi/stak-{izdanje}.pdf' target="_blank">
        <DocumentArrowDown class="w-6 h-6"/>
        Preuzmi PDF
    </a>
</div>
