<script>
    import Tooltip from "$lib/components/Tooltip.svelte";

    const topToolTipData = {
        linkText: 'Link with top Tooltip',
        toolTipText: 'This is the tool tip text',
        textColor: 'text-white',
        backgroundColor: 'bg-indigo-700',
        direction: 'tooltipTop',
    }
    const rightToolTipData = {
        linkText: 'Link with right Tooltip',
        toolTipText: 'This is the tool tip text',
        textColor: 'text-white',
        backgroundColor: 'bg-gray-700',
        direction: 'tooltipRight',
    }
</script>

<div class="flex justify-center items-center h-full mt-60">
    <div class="mt-10 mx-10 flex flex-col gap-12">
        <Tooltip toolTipData={topToolTipData}></Tooltip>
        <Tooltip toolTipData={rightToolTipData}></Tooltip>
    </div>
</div>


