<script>
    import Toggle from "$lib/components/Toggle.svelte";

    const toggleData = {
        toggleColor: 'bg-indigo-600',
        focusRingColor: 'indigo-300',
    }

    const text = 'Toggle Text';
    const textColor = 'text-gray-900';

</script>

<div class="mx-10 my-10">
    <Toggle {toggleData}>
        <slot >
            <span class="ml-3 text-sm font-medium {textColor}">
                {text}
            </span>
        </slot>
    </Toggle>
</div>
