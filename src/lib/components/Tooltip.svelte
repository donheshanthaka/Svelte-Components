<script>
    export let toolTipData;
</script>


<div>
    <a href="#" class="mt-10 mx-10 group relative inline-block text-blue-500 underline hover:text-red-500 duration-300">
        Link with right tooltip
        <span class="tooltipRight {toolTipData.backgroundColor} {toolTipData.textColor}">This
            {toolTipData.text}
        </span>
    </a>
</div>


<div class="mt-10 mx-10">
    <a href="#" class="group relative inline-block text-blue-500 underline hover:text-red-500 duration-300">
        Link with top tooltip
        <!-- Tooltip text here -->
        <span class="tooltipTop {toolTipData.backgroundColor} {toolTipData.textColor}" >This
            {toolTipData.text}
        </span>
    </a>
</div>


<style>
    .tooltipTop {
        @apply absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-48 px-2 py-1 rounded-lg text-center text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700;
    }

    .tooltipRight {
        @apply absolute hidden group-hover:flex -top-2 -right-3 translate-x-full w-48 px-2 py-1 rounded-lg text-center text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-700;
    }

</style>
