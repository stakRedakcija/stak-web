<script>
	import {getRandomInt} from '$lib/utils/index'
	import {Tabs, Tab, TabList, TabPanel} from 'svelte-tabs'

	export let data
	const {posts} = data
</script>

<svelte:head>
    <title>Blog - St@k</title>
</svelte:head>

<h1 class="wide-title text-7xl md:text-9xl font-headline tracking-tighter m-10 md:m-20 mb-0 md:mb-0 text-yellow-900 dark:text-yellow-200">
    Blog</h1>

<nav class="ml-10 mr-10 md:ml-20 md:mr-20 mt-5 mb-0 md:mb-0">
    <Tabs>
        <TabList>
            <Tab>Naše objave</Tab>
            <Tab>Promocije</Tab>
        </TabList>
        <TabPanel>
            <ul class="flex flex-wrap justify-center gap-10 md:gap-14 lg:gap-20 mx-auto px-10 md:px-20 pt-20 pb-40 max-w-[100rem]">
                {#each posts.stak as {path, meta: {title, image, date}}}
                    {@const formattedDate = new Intl.DateTimeFormat('hr-HR', {dateStyle: 'long'}).format(new Date(date))}
                    {@const randomRot = getRandomInt(-40, 30) / 10}

                    <li class="max-lg:odd:ml-auto max-lg:even:mr-auto">
                        <a href={path} class="flex flex-col group max-w-md 2xl:max-w-2xl">
                            <div class="grid grid-cols-1 grid-rows-1 drop-shadow-2xl"
                                 style:transform={`rotate(${randomRot}deg)`}>
                                <img class="rounded-xl border-8 border-white dark:border-neutral-600 group-hover:border-yellow-400 dark:group-hover:border-yellow-700 transition-colors w-[80vw] aspect-video row-start-1 row-end-1 col-start-1 col-end-1 object-cover dark:brightness-75"
                                     src={image} alt={title}/>
                            </div>

                            <div class="-mt-8 -ml-6 lg:-mt-14 lg:-ml-8 mr-auto drop-shadow-xl z-10 max-w-[90%]">
                                <div class="paper-bg torn-paper-4 py-4 px-8 flex flex-col gap-1"
                                     style:border-radius={`${getRandomInt(16, 32)}px`}
                                     style:transform={`rotate(${randomRot + getRandomInt(-1, 1)}deg)`}>
                                    <h2 class="group-hover:text-yellow-900 dark:group-hover:text-yellow-200 post-title text-lg 2xl:text-2xl transition-colors">{@html title}</h2>
                                    <span class="text-xs text-slate-600 dark:text-slate-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-100 transition-colors">{formattedDate}</span>
                                </div>
                            </div>
                        </a>
                    </li>
                {/each}
            </ul>
        </TabPanel>
        <TabPanel>
            <ul class="flex flex-wrap justify-center gap-10 md:gap-14 lg:gap-20 mx-auto px-10 md:px-20 pt-20 pb-40 max-w-[100rem]">
                {#each posts.sponsored as {path, meta: {title, image, date}}}
                    {@const formattedDate = new Intl.DateTimeFormat('hr-HR', {dateStyle: 'long'}).format(new Date(date))}
                    {@const randomRot = getRandomInt(-40, 30) / 10}

                    <li class="max-lg:odd:ml-auto max-lg:even:mr-auto">
                        <a href={path} class="flex flex-col group max-w-md 2xl:max-w-2xl">
                            <div class="grid grid-cols-1 grid-rows-1 drop-shadow-2xl"
                                 style:transform={`rotate(${randomRot}deg)`}>
                                <img class="rounded-xl border-8 border-white dark:border-neutral-600 group-hover:border-yellow-400 dark:group-hover:border-yellow-700 transition-colors w-[80vw] aspect-video row-start-1 row-end-1 col-start-1 col-end-1 object-cover dark:brightness-75"
                                     src={image} alt={title}/>
                            </div>

                            <div class="-mt-8 -ml-6 lg:-mt-14 lg:-ml-8 mr-auto drop-shadow-xl z-10 max-w-[90%]">
                                <div class="paper-bg torn-paper-4 py-4 px-8 flex flex-col gap-1"
                                     style:border-radius={`${getRandomInt(16, 32)}px`}
                                     style:transform={`rotate(${randomRot + getRandomInt(-1, 1)}deg)`}>
                                    <h2 class="group-hover:text-yellow-900 dark:group-hover:text-yellow-200 post-title text-lg 2xl:text-2xl transition-colors">{@html title}</h2>
                                    <span class="text-xs text-slate-600 dark:text-slate-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-100 transition-colors">{formattedDate}</span>
                                </div>
                            </div>
                        </a>
                    </li>
                {/each}
            </ul>
        </TabPanel>
    </Tabs>
</nav>

<style>
    /* Frame */
    :global(.svelte-tabs) {
        @apply font-bold rounded-t-lg;
    }

    /* Tab (Upper row tabs) */
    :global(.svelte-tabs li.svelte-tabs__tab) {
        @apply uppercase border-4 rounded-b;
    }
</style>