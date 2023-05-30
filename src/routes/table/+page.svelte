<script>
    const tableArr = [
        {
            position: '1',
            name: 'Item 1',
            symbol: 'A',
            weight: '10',
        },
        {
            position: '2',
            name: 'Item 2',
            symbol: 'B',
            weight: '15',
        },
        {
            position: '3',
            name: 'Item 3',
            symbol: 'C',
            weight: '12',
        },
        {
            position: '4',
            name: 'Item 4',
            symbol: 'D',
            weight: '8',
        },
        {
            position: '5',
            name: 'Item 5',
            symbol: 'E',
            weight: '20',
        },
    ];

</script>

<div class="table-container">
    <!-- Native Table Element -->
    <table class="table table-hover my-custom-table">
        <thead>
        <tr>
            <th class="my-custom-table-header">Position</th>
            <th class="my-custom-table-header">Name</th>
            <th class="my-custom-table-header">Symbol</th>
            <th class="my-custom-table-header">Weight</th>
        </tr>
        </thead>
        <tbody>
        {#each tableArr as row, i}
            <tr>
                <td class="my-custom-table-cell">{row.position}</td>
                <td class="my-custom-table-cell">{row.name}</td>
                <td class="my-custom-table-cell">{row.symbol}</td>
                <td class="my-custom-table-cell">{row.weight}</td>
            </tr>
        {/each}
        </tbody>
        <tfoot>
        <tr>
            <th class="my-custom-table-footer" colspan="3">Calculated Total Weight</th>
            <td class="my-custom-table-footer">45kg</td>
        </tr>
        </tfoot>
    </table>
</div>
