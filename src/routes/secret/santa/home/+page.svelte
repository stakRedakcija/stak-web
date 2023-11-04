<script>
    import {fade} from 'svelte/transition'
    import canvasConfetti from 'canvas-confetti'
    import ElfCard from '$lib/santa/ElfCard.svelte'

    export let data
    const {event: {startDate: sd, endDate: ed, isDrawingTime}, user, error} = data
    let isElfFound = false

    const startDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(sd)
    const endDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(ed)

    let isPresentHovered = false
    const openPresent = () => {
        setTimeout(() => (isElfFound = true), 3000)
        canvasConfetti({
            angle: 90,
            spread: 360,
            startVelocity: 30,
            particleCount: 400,
            dragFriction: 0.12,
            duration: 5 * 1000,
            stagger: 3,
            colors: ['#f44336', '#2196F3', '#ffeb3b', '#4caf50', '#ff9800', '#9c27b0']
        })
    }
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

        <ElfCard {...data.user}/>

        {#if isDrawingTime}
            {#if isElfFound}
                <div in:fade={{ delay: 1000, duration:500}} class="text-center">
                    <h1 class="wide-title text-5xl font-headline tracking-tighter m-12">YOUR LITTLE
                        ELF</h1>
                    <ElfCard {...data.user}/>
                </div>
            {:else}
                <div
                        transition:fade={{ duration: 1000 }}
                        class="flex justify-center items-center shake">
                    <div
                            on:click={openPresent}
                            on:keypress={openPresent}
                            on:mouseenter={() => (isPresentHovered = true)}
                            on:mouseleave={() => (isPresentHovered = false)}
                            class:cursor-pointer={isPresentHovered}
                            class="relative">
                        <!-- Candy Cane Stripes -->
                        <div class="absolute w-1/2 h-4 bg-red-600 transform rotate-45"></div>
                        <div class="absolute w-1/2 h-4 bg-red-600 transform rotate-45 translate-y-2"></div>
                        <div class="absolute w-1/2 h-4 bg-red-600 transform rotate-45 -translate-y-2"></div>
                        <!-- Present Box with Red Background, Vertical White Stripes, Ribbon, and Shadows -->
                        <div class="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-lg shadow-2xl relative">
                            <div class="w-2 bg-red-100 h-16 absolute top-1/2 right-1/4 -translate-x-9 rounded-s -translate-y-1/2"></div>
                            <div class="w-2 bg-red-100 h-16 absolute top-1/2 right-1/4 -translate-x-5 -translate-y-1/2"></div>
                            <div class="w-2 bg-red-100 h-16 absolute top-1/2 right-1/2 translate-x-3 -translate-y-1/2"></div>
                            <div class="w-2 bg-red-100 h-16 absolute top-1/2 right-1/2 translate-x-7 rounded-e -translate-y-1/2"></div>
                            <div class="w-16 bg-red-100 h-2 absolute -translate-x-8 translate-y-2"></div>
                            <div class="w-16 bg-red-100 h-2 absolute -translate-x-8 -translate-y-4"></div>
                            <!-- Shadow -->
                            <div class="absolute bottom-0 right-0 w-16 h-2 bg-gray-800 opacity-50 rounded-full blur"></div>
                        </div>
                    </div>
                </div>
            {/if}
        {:else}
            <div class="article-content mx-auto prose prose-headings:max-w-[56ch] prose-p:max-w-[56ch] text-prose text-justify text-zinc-900 dark:text-white dark:prose-invert prose-blockquote:not-italic prose-blockquote:font-handwriting prose-blockquote:border-amber-600 dark:prose-blockquote:border-amber-900">
                <h2 class="text-lg mb-10">🎄✨ Ho, Ho, Ho! 🎅✨</h2>

                <p class="text-lg mb-3">Congratulations, dear {user.fullName}, for joining our festive Secret Santa
                    game! 🎁
                    Your
                    cheerful spirit has brought even more warmth to our Christmas celebrations! 🌟 The twinkling lights,
                    the scent of gingerbread cookies, and the joyous laughter of friends and family all make this
                    holiday season truly magical! 🎉</p>

                <p class="text-lg mb-3">Get ready to be part of the most wonderful exchange of surprises! Your
                    participation in our Secret Santa game will surely make someone's Christmas merry and bright! 🎅🎁
                    Remember, the spirit of giving is the most precious gift of all! 🌟</p>

                <p class="text-lg mb-3">As the holiday countdown begins, we're thrilled to let you know that the drawing
                    of names for your Secret Santa exchange will take place between {startDate} and {endDate}. During
                    this time, the Christmas magic will be at its peak, ensuring that every name is matched
                    with care and excitement! 🎄✨</p>

                <p class="text-lg mb-3">May your heart be filled with joy and kindness, and may your Secret Santa
                    experience be filled with delightful surprises and genuine smiles! 🌟 Wishing you a jolly and festive
                    holiday season, filled with love, laughter, and the spirit of giving! 🎅❤️</p>

                <p class="text-lg mb-3">Happy Holidays and Merry Christmas! 🎄🎅🎁</p>

                <p class="text-lg mb-3">Warmest wishes, St@k 🌟</p>
            </div>
        {/if}
    </article>
{/if}

<style>
    div > h1 {
        background: linear-gradient(45deg, red, wheat, red, wheat, red);
        -webkit-background-clip: text;
        color: transparent;
    }

    @keyframes shake {
        0%, 100% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-4px);
        }
        50% {
            transform: translateX(4px);
        }
        75% {
            transform: translateX(-4px);
        }
    }


    .shake {
        animation: shake 0.6s infinite;
    }

</style>
