<script>
    export let toggleColor, focusRingColor;
    export let labelStyle,
        toggleInputStyle,
        toggleBox;

    let isToggleActive = false
    export let captureToggle

    function handleToggle() {
        isToggleActive = !isToggleActive
        captureToggle(isToggleActive)
    }

</script>

<label class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" class="sr-only peer" on:change={handleToggle}>
    <div class="peer-focus:outline-none peer-focus:ring-4 dark:peer-focus:ring-indigo-800 peer-checked:after:translate-x-full
     peer-checked:after:border-white {focusRingColor} {toggleColor}"></div>
    <slot></slot>
</label>

<style>

    label {
        @apply relative inline-flex items-center cursor-pointer
    }

    div {
        @apply w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 after:content-[''] after:absolute after:top-[2px]
        after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5
        after:w-5 after:transition-all dark:border-gray-600
    }

</style>