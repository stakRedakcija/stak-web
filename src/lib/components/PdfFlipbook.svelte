<script>
    import { onMount, tick } from "svelte";
    import { PageFlip } from "page-flip";
    import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

    export let pdfUrl;

    let flipbookContainer;
    let pages = [];
    let loading = true;

    onMount(async () => {
        const pdfWorkerUrl = (
            await import("pdfjs-dist/build/pdf.worker.mjs?url")
        ).default;
        pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

        try {
            const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
            const numPages = pdf.numPages;

            for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
                const page = await pdf.getPage(pageNumber);
                const scale = 1.5;
                const viewport = page.getViewport({ scale });

                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                await page.render({
                    canvasContext: context,
                    viewport: viewport,
                }).promise;

                const imgData = canvas.toDataURL("image/jpeg");
                pages.push(imgData);
            }

            loading = false;
            await tick();

            const pageFlip = new PageFlip(flipbookContainer, {
                width: 550,
                height: 733,
                size: "stretch",
                maxShadowOpacity: 0.5,
                showCover: true,
                mobileScrollSupport: true,
            });
            pageFlip.loadFromImages(pages);
        } catch (error) {
            console.error("Error loading PDF or initializing flipbook:", error);
        }
    });
</script>

<div
    bind:this={flipbookContainer}
    class="flipbook-container my-6 w-full min-h-[733px] mx-auto bg-transparent relative"
>
    {#if loading}
        <p
            class="absolute inset-0 flex items-center justify-center text-3xl font-bold leading-relaxed text-center text-gray-300 animate-pulse"
        >
            Učitavam časopis...
        </p>
    {/if}
</div>

<style>
    .flipbook-container canvas {
        background: red !important;
    }
</style>
