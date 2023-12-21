<script>
	import { onMount } from 'svelte'
	import { loadSlim } from 'tsparticles-slim'
	import snowConfig from './snowConfig.json'

	let ParticlesComponent

	onMount(async () => {
		const module = await import('svelte-particles')
		ParticlesComponent = module.default
	})

	let particlesInit = async (engine) => await loadSlim(engine)
</script>

<svelte:component
        this={ParticlesComponent}
        id="snow-particles"
        options={snowConfig}
        {particlesInit}
        class="z-0 pointer-events-none"
/>

<style global>
    #snow-particles canvas {
        pointer-events: none !important;
    }
</style>
