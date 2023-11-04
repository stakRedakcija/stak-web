<script>
    export let src, fullName, username, email
</script>

<div class="max-w-xs mx-auto bg-white p-4 shadow-lg candy-cane-background mb-16">
    <img {src} alt={fullName + ' logo'} class="w-20 h-20 mx-auto mb-2 rounded-full shadow-lg"/>

    <div class="text-center mb-2 bg-red-400 rounded">
        <strong class="text-lg block">{fullName} ({username})</strong>
    </div>

    <div class="text-center text-gray-800">{email}</div>
</div>

<style>
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
