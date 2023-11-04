<script>
    export let data
    const {event: {startDate: sd, endDate: ed, isDrawingTime}, error} = data
    const {email, src, fullName, username} = data.user

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

        <div class="max-w-xs mx-auto bg-white p-4 shadow-lg candy-cane-background mb-16">
            <img src={src} alt={fullName + ' logo'} class="w-20 h-20 mx-auto mb-2 rounded-full shadow-lg"/>

            <div class="text-center mb-2 bg-red-400 rounded">
                <strong class="text-lg block">{fullName} ({username})</strong>
            </div>

            <div class="text-center text-gray-800">{email}</div>
        </div>

        {#if isDrawingTime}
            <div></div>
        {:else}
            <div class="article-content mx-auto prose prose-headings:max-w-[56ch] prose-p:max-w-[56ch] text-prose text-justify text-zinc-900 dark:text-white dark:prose-invert prose-blockquote:not-italic prose-blockquote:font-handwriting prose-blockquote:border-amber-600 dark:prose-blockquote:border-amber-900">
                <h2 class="text-lg mb-10">🎄✨ Ho, Ho, Ho! 🎅✨</h2>

                <p class="text-lg mb-3">Congratulations, dear {fullName}, for joining our festive Secret Santa game! 🎁
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

    .candy-cane-background {
        background: repeating-linear-gradient(
                135deg,
                #ff7f7f,
                #ff7f7f 15px,
                #ffffff 15px,
                #ffffff 30px
        );
        border-radius: 24px;
    }
</style>
