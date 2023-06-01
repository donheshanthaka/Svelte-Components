<script>
    export let toolTipData;
</script>

<div>
    <a href="#" class="group">
        {toolTipData.linkText}
        <span class="{toolTipData.direction} {toolTipData.backgroundColor} {toolTipData.textColor}">
            {toolTipData.toolTipText}
        </span>
    </a>
</div>


<style>

    a {
        @apply relative inline-block text-blue-500 underline hover:text-red-500 duration-300
    }

    .tooltipTop {
        @apply absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full px-2 py-1 rounded-lg text-center
        text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8
        after:border-x-transparent after:border-b-transparent after:border-t-gray-700 translate-x-5;
    }

    .tooltipRight {
        @apply absolute hidden group-hover:flex -top-1 -right-3 translate-x-full px-2 py-1 rounded-lg text-center
        text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2
        before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-gray-700;
    }

</style>
