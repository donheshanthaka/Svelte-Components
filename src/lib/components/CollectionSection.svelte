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

<div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

            <div class="mt-6 space-y-12 grid gap-x-6 space-y-0 {gridCols}">
                {#each collections as collection}
                    <div class="group relative">
                        <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <img src={collection.image} alt={collection.alt} class="h-full w-full object-cover object-center">
                        </div>
                        <h3 class="mt-6 text-sm text-gray-500">
                            <a href="#">
                                <span class="absolute inset-0"></span>
                                {collection.category}
                            </a>
                        </h3>
                        <p class="text-base font-semibold text-gray-900">{collection.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
