<script>
    import {fade} from 'svelte/transition'
    import canvasConfetti from 'canvas-confetti'
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    let isPresentHovered = false
    const openPresent = () => {
        setTimeout(() => dispatch('open'), 3000)
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

<style>
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
