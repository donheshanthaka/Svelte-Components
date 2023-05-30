<script>
    import {onMount} from 'svelte';
    import CollectionSection from '$lib/components/CollectionSection.svelte';

    let collections = [
        {
            image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
            alt: 'Description 1',
            category: 'Category 1',
            description: 'Description of Category 1',
        },
        {
            image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
            alt: 'Description 2',
            category: 'Category 2',
            description: 'Description of Category 2',
        },
        {
            image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            alt: 'Description 3',
            category: 'Category 3',
            description: 'Description of Category 3',
        },
        // Add more collections as needed
    ];

    let cardSize = 'sm';
    let newCardSize = '';

    let newImage = '';
    let newAlt = '';
    let newCategory = '';
    let newDescription = '';

    function addCollection() {
        const collection = {
            image: newImage,
            alt: newAlt,
            category: newCategory,
            description: newDescription,
        };
        collections = [...collections, collection];

        // Reset the input fields
        newImage = '';
        newAlt = '';
        newCategory = '';
        newDescription = '';
    }

    function updateCardSize() {
        cardSize = newCardSize;
        console.log(cardSize)
    }

    onMount(() => {
        // Preload existing images for improved performance
        collections.forEach((collection) => {
            const image = new Image();
            image.src = collection.image;
        });
    });
</script>

<!-- Render the CollectionSection component with the configured collections -->
<CollectionSection {collections} {cardSize}/>

<!-- Configuration Section -->
<div class="flex justify-center bg-gray-100">
    <div class="p-4 bg-gray-200 w-1/2">
        <h2 class="text-lg font-bold">Collections Configuration</h2>
        <div class="mt-4">
            <label class="block">
                <span class="text-sm font-medium text-gray-700">Card Size:</span>
                <select class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        bind:value={newCardSize}>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                </select>
            </label>
        </div>

        <div class="mt-4">
            <button class="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    on:click={updateCardSize}>Update Card Size
            </button>
        </div>

        <form class="mt-6 space-y-4" on:submit|preventDefault={addCollection}>
            <div>
                <label class="block">
                    <span class="text-sm font-medium text-gray-700">Image URL:</span>
                    <input type="text"
                           class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           bind:value={newImage} required/>
                </label>
            </div>

            <div>
                <label class="block">
                    <span class="text-sm font-medium text-gray-700">Image Alt:</span>
                    <input type="text"
                           class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           bind:value={newAlt} required/>
                </label>
            </div>

            <div>
                <label class="block">
                    <span class="text-sm font-medium text-gray-700">Category:</span>
                    <input type="text"
                           class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           bind:value={newCategory} required/>
                </label>
            </div>

            <div>
                <label class="block">
                    <span class="text-sm font-medium text-gray-700">Description:</span>
                    <input type="text"
                           class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           bind:value={newDescription} required/>
                </label>
            </div>

            <div>
                <button type="submit"
                        class="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                    Add Collection
                </button>
            </div>
        </form>
    </div>
</div>

