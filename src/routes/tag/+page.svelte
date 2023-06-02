<script>
    import Tag from "$lib/components/Tag.svelte";
    import {tagStyles} from "$lib/styles/tagStyles.js";

    const customStyles = {
        textColor: 'text-blue-700',
        color: 'bg-blue-200',
        width: '',
        height: '',
    }

    const label = {
        labelText: 'TAG',
        labelSize: '',
        iconClass: 'bx bx-shield-plus'
    }

    const tags = [
        [
            {
                textColor: 'text-blue-700',
                color: 'bg-blue-200',
                width: '',
                height: '',
            },
            {
                labelText: 'TAG',
                labelSize: '',
                iconClass: 'bx bx-shield-plus'
            }
        ],
        [
            {
                textColor: 'text-green-700',
                color: 'bg-green-200',
                width: '',
                height: '',
            },
            {
                labelText: 'TAG',
                labelSize: '',
                iconClass: 'bx bx-stats'
            }
        ],
        [
            {
                textColor: 'text-orange-700',
                color: 'bg-orange-200',
                width: '',
                height: '',
            },
            {
                labelText: 'TAG',
                labelSize: '',
                iconClass: 'bx bx-right-arrow-alt'
            }
        ],
        [
            {
                textColor: 'text-red-700',
                color: 'bg-red-200',
                width: '',
                height: '',
            },
            {
                labelText: 'TAG',
                labelSize: '',
                iconClass: 'bx bxl-shopify'
            }
        ],
        [
            {
                textColor: 'text-gray-700',
                color: 'bg-white',
                width: '',
                height: '',
            },
            {
                labelText: 'TAG',
                labelSize: '',
                iconClass: 'bx bx-desktop'
            }
        ],
    ]
</script>

<div class="flex justify-center items-center h-full mt-60">
    <div class="w-auto h-10 flex items-center">
        <!--        <Tag {...customStyles} {...label}/>-->
        {#each tags as tag}
            <div class="mr-2">
                <Tag {...tag[0]} {...tag[1]} {...tagStyles}/>
            </div>
        {/each}
    </div>
</div>
