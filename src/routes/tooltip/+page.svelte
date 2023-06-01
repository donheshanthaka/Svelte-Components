<script>
    import Tooltip from "$lib/components/Tooltip.svelte";

    const toolTipData = {
        text: 'This is the tool tip text',
        textColor: 'text-white',
        backgroundColor: 'bg-gray-700',
        duration: ''
    }
</script>


<Tooltip {toolTipData}/>


<button class="mx-10 my-10 flex items-center justify-center px-4 py-2 font-medium text-white bg-indigo-500 transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 dark:bg-primary-400 dark:hover:bg-primary-500 dark:focus:bg-primary-500 dark:active:bg-primary-600 rounded-lg shadow"
        data-te-toggle="tooltip"
        title={toolTipData.text}>
    <span class="mr-1">Button</span>
    <span class="text-xs opacity-75">(Hover for tooltip)</span>
</button>