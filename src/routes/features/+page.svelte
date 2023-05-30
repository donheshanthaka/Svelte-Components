<script>
    import ProductFeatures from "$lib/components/ProductFeatures.svelte";

    let heading = ''
    let description = ''
    let sectionOne = ''
    let sectionOneDescription = ''

    let data =
        {
            heading: 'Technical Specifications',
            description: 'The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.',
            sectionOne: 'Origin',
            sectionOneDescription: 'Designed by Good Goods, Inc.',
            sectionTwo: 'Material',
            sectionTwoDescription: 'Solid walnut base with rare earth magnets and powder coated steel card cover',
            sectionThree: 'Dimensions',
            sectionThreeDescription: '6.25" x 3.55" x 1.15"',
            sectionFour: 'Finish',
            sectionFourDescription: 'Hand sanded and finished with natural oil',
            sectionFive: 'Includes',
            sectionFiveDescription: 'Wood card tray and 3 refill packs',
            sectionSix: 'Considerations',
            sectionSixDescription: 'Made from natural materials. Grain and color vary with each item.',
        }



    function editData() {
        data.heading = heading
        data.description = description
        data.sectionOne = sectionOne
        data.sectionOneDescription = sectionOneDescription
        console.log(data)
    }
</script>

<ProductFeatures {data}/>

<!-- Configuration Section -->
<div class="flex justify-center bg-gray-100">
    <div class="p-4 bg-gray-200 w-1/2">
        <h2 class="text-lg font-bold">Tech Spec Configuration</h2>
<!--        <div class="mt-4">-->
<!--            <label class="block">-->
<!--                <span class="text-sm font-medium text-gray-700">Card Size:</span>-->
<!--                <select class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"-->
<!--                        bind:value={newCardSize}>-->
<!--                    <option value="sm">Small</option>-->
<!--                    <option value="md">Medium</option>-->
<!--                    <option value="lg">Large</option>-->
<!--                </select>-->
<!--            </label>-->
<!--        </div>-->

<!--        <div class="mt-4">-->
<!--            <button class="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"-->
<!--                    on:click={updateCardSize}>Update Card Size-->
<!--            </button>-->
<!--        </div>-->

        <form class="mt-6 space-y-4" on:submit|preventDefault={editData}>
            <div>
                <label class="block">
                    <span class="text-sm font-medium text-gray-700">Heading:</span>
                    <input type="text"
                           class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           bind:value={heading} required/>
                </label>
            </div>

            <div>
                <label class="block">
                    <span class="text-sm font-medium text-gray-700">Description:</span>
                    <input type="text"
                           class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           bind:value={description} required/>
                </label>
            </div>

            <div>
                <label class="block">
                    <span class="text-sm font-medium text-gray-700">Section One:</span>
                    <input type="text"
                           class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           bind:value={sectionOne} required/>
                </label>
            </div>

            <div>
                <label class="block">
                    <span class="text-sm font-medium text-gray-700">Section One Description:</span>
                    <input type="text"
                           class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           bind:value={sectionOneDescription} required/>
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