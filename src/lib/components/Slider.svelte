<script>
    import Slider from '@bulatdashiev/svelte-slider';

    let value = [10, 100];
    let range = [20, 70];
    let range2 = [30, 40];
</script>

value: {value[0]}
<Slider bind:value />
Custom slot: left: {range[0]}
right: {range[1]}
<div>
    <Slider bind:value={range} range on:input={e => console.log(e.detail)}>
        <span slot="left" style="font-size: 20px;">&#128078;</span>
        <span slot="right" style="font-size: 20px;">&#128077;</span>
    </Slider>
</div>
Thumb order:
left: {range2[0]}
right: {range2[1]}
<Slider max="200" step="10" bind:value={range2} range order />

Using in form
<form on:submit|preventDefault={e => console.log(e)}>
    <Slider name={['input-1', 'input-2']} range />
    <button>Submit</button>
</form>

<style>
    div {
        --thumb-bg: transparent;
        --progress-bg: #ff9355;
        --track-bg: #deffd7;
    }
</style>