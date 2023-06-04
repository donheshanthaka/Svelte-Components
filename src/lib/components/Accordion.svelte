<script>
    import { slide } from 'svelte/transition';
    export let item = {};
    export let i = 0;
    export let active = 0;

    import { createEventDispatcher } from 'svelte';
    const setActive = createEventDispatcher();

    function checkActive(state) {
        if(state === active) {
            return -1;
        }else{
            return i;
        }
    }

</script>
<div class="pt-6">
    <dt class="text-lg min-w-full">
        <button type="button" on:click="{() => setActive('activeState', checkActive(i))}" class="text-left w-full flex justify-between items-start focus:outline-offset-8 focus:outline-slate-300 text-theme-gray-blue" aria-controls="faq-{i}" aria-expanded="{active ? 'false' : 'true'}">
      <span class="hover-state {active == i ? 'text-theme-dark-blue font-bold' : 'font-medium text-theme-gray-blue'}">
        {item.question}
      </span>
            <span class="ml-6 h-7 flex items-center">
        <svg viewBox="0 0 10 7" class="h-3.5 w-3.5 transform {active == i ? 'rotate-180' : '-rotate-0'}" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
      </span>
        </button>
    </dt>
    <dd class="mt-2 pr-12" id="faq-{i}">
        {#if active == i}
            <p transition:slide class="text-base text-theme-gray-blue">
                {item.answer}
            </p>
        {/if}
    </dd>
</div>