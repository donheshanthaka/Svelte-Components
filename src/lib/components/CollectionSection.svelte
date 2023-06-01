<!-- CollectionSection.svelte -->
<script>
    export let collections = [];
    export let cardSize = 'lg';

    // Calculate the grid layout based on the card size
    let gridCols;

    $: {
        gridCols = cardSize === 'lg' ? 'sm:grid-cols-1' : cardSize === 'md' ? 'lg:grid-cols-2' : 'lg:grid-cols-3';
    }
</script>

<div class="background-color">
    <div class="main-container">
        <div class="secondary-container">
            <h2>Collections</h2>
            <div class="grid-container {gridCols}">
                {#each collections as collection}
                    <div class="group relative">
                        <div class="grid-item">
                            <img src={collection.image} alt={collection.alt} >
                        </div>
                        <h3>
                            <a href="#">
                                <span />
                                {collection.category}
                            </a>
                        </h3>
                        <p>{collection.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>



<style>
    .background-color {
        @apply bg-gray-100
    }

    .main-container {
        @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
    }

    .secondary-container {
        @apply mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32
    }

    h2 {
        @apply text-2xl font-bold text-gray-900
    }

    .grid-container {
        @apply mt-6 mb-12 grid gap-x-6 space-y-0
    }

    .grid-item {
        @apply relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64
    }

    img {
        @apply h-full w-full object-cover object-center
    }

    h3 {
        @apply mt-6 text-sm text-gray-500
    }

    span {
        @apply absolute inset-0
    }

    p {
        @apply text-base font-semibold text-gray-900
    }
</style>