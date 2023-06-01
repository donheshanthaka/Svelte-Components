<script>
        export let primary = false;
</script>

<style>
    .button {
        @apply bg-gray-500 text-white px-4 py-2 rounded cursor-pointer font-bold text-base;
    }

    .primary {
        @apply bg-teal-500;
    }
</style>

<button class="button {primary ? 'primary' : ''}">
    <slot></slot>
</button>


<!--<script>-->
<!--    export let buttonColor = 'red'-->
<!--</script>-->

<!--<button style="background: var(&#45;&#45;button-color);">-->
<!--    <slot/>-->
<!--</button>-->