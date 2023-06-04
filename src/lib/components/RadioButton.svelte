<script>
    export let radioButtonData
    export let captureRadioButtonInput
    export let orientation

    function handleRadioButtonChange(event) {
        const selectedValue = event.target.value;
        captureRadioButtonInput(selectedValue)
    }

</script>

<div class="flex ">
    <div class="flex items-start gap-4 {orientation === 'columns' ? 'flex-col' : ''}">
        {#each radioButtonData as radioButton}
            <div class="flex items-center">
                <input
                        class="mr-2 form-radio text-primary cursor-pointer"
                        type="radio"
                        name={radioButton.name}
                        id={radioButton.id}
                        value={radioButton.value}
                        on:change={handleRadioButtonChange}
                />
                <label for={radioButton.id} class="text-gray-700 cursor-pointer">{radioButton.label}</label>
            </div>
        {/each}
    </div>
</div>

