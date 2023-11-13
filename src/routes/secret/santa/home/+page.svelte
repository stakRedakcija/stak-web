<script>
    import {fade} from 'svelte/transition'
    import ElfCard from '$lib/santa/ElfCard.svelte'
    import Present from '$lib/santa/Present.svelte'
    import SantaWait from '$lib/santa/SantaWait.svelte'

    export let data

    const {event: {startDate: sd, endDate: ed, isDrawingTime}, user, error} = data
    let {elf} = data
    let isElfFound = JSON.stringify(elf) !== '{}'

    const startDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(sd)
    const endDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(ed)
</script>

<svelte:head>
    <title>Secret Santa Home - St@k</title>
</svelte:head>

{#if error}
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
        <h1 class="text-4xl font-bold mb-24 p-8">
            {error}
        </h1>
        <button class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded block"
                on:click={() => window.history.go(-2)}>
            Go Back
        </button>
    </div>
{:else}
    <article class="p-5 md:p-20">

        <ElfCard {...user}/>

        {#if isDrawingTime}
            {#if elf.isShown}
                <div in:fade={{ delay: 1000, duration:500}} class="text-center">
                    <h1 class="wide-title text-5xl font-headline tracking-tighter m-12">YOUR LITTLE ELF</h1>
                    <ElfCard {...elf}/>
                </div>
            {:else}
                {#if isElfFound}
                    <Present on:open={() => (elf = {...elf, isShown: true})}/>
                {:else}
                    <h1 class="wide-title text-2xl font-headline tracking-tighter m-12 text-center">Unfortunately, there
                        are no elves available at the moment.</h1>
                {/if}
            {/if}
        {:else}
            <SantaWait fullName={user.fullName} {startDate} {endDate}/>
        {/if}
    </article>
{/if}

<style>
    div > h1 {
        background: linear-gradient(45deg, red, wheat, red, wheat, red);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
</style>
