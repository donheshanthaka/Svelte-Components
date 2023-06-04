<script>
    import Toggle from "$lib/components/Toggle.svelte";
    import {toggleStyles} from "$lib/styles/toggleStyles.js";

    const toggleCustomStyles = {
        toggleColor: 'peer-checked:bg-indigo-600',
        focusRingColor: 'peer-focus:ring-indigo-300',
    }

    const text = 'Toggle Text';
    const textColor = 'text-gray-900';

    function captureToggle(toggleState) {
        console.log(toggleState)
        // Implement any functions related to the toggle state in here
    }

</script>

<div class="mx-10 my-10">
    <Toggle {...toggleCustomStyles} {...toggleStyles} {captureToggle}>
        <slot >
            <span class="ml-3 text-sm font-medium {textColor}">
                {text}
            </span>
        </slot>
    </Toggle>
</div>
