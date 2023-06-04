<script>
    import RadioButton from "$lib/components/RadioButton.svelte";

    const radioButtonData = [
        {
            name: 'radioButtonGroup',
            id: 'radioButtonId1',
            value: 'radioButtonValue1',
            label: 'Button one'
        },
        {
            name: 'radioButtonGroup',
            id: 'radioButtonId2',
            value: 'radioButtonValue2',
            label: 'Button two'
        },
        {
            name: 'radioButtonGroup',
            id: 'radioButtonId3',
            value: 'radioButtonValue3',
            label: 'Button three'
        },
    ]

    function captureRadioButtonInput(selection) {
        console.log(selection)
        // Implement any functions related to the selection in here
    }

</script>

<div class="flex justify-center items-center h-full mt-60">
    <RadioButton {radioButtonData} {captureRadioButtonInput} orientation=""/>
</div>

