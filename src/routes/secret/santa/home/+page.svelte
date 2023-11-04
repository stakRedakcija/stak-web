<script>
    export let data
    const {error} = data
    const {email, src, fullName, username} = data.user
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
    <div>Email: {email}</div>
    <div>Username: {fullName}</div>
    <div>Full name: {username}</div>
    <img alt={fullName + 'logo'} {src}>
{/if}

<style>
    div > h1 {
        background: linear-gradient(45deg, red, wheat, red, wheat, red);
        -webkit-background-clip: text;
        color: transparent;
    }
</style>
