<script>
    export let countries

    /* FILTERING countries DATA BASED ON INPUT */
    let filteredCountries = [];
    // $: console.log(filteredCountries)

    const filterCountries = () => {
        let storageArr = []
        if (inputValue) {
            countries.forEach(country => {
                if (country.toLowerCase().startsWith(inputValue.toLowerCase())) {
                    storageArr = [...storageArr, makeMatchBold(country)];
                }
            });
        }
        filteredCountries = storageArr;
    }


    /* HANDLING THE INPUT */
    let searchInput; // use with bind:this to focus element
    let inputValue = "";

    $: if (!inputValue) {
        filteredCountries = [];
        hiLiteIndex = null;
    }

    const clearInput = () => {
        inputValue = "";
        searchInput.focus();
    }

    const setInputVal = (countryName) => {
        inputValue = removeBold(countryName);
        filteredCountries = [];
        hiLiteIndex = null;
        document.querySelector('#country-input').focus();
    }

    const submitValue = () => {
        if (inputValue) {
            console.log(`${inputValue} is submitted!`);
            setTimeout(clearInput, 1000);
        } else {
            alert("You didn't type anything.")
        }
    }

    const makeMatchBold = (str) => {
        // replace part of (country name === inputValue) with strong tags
        let matched = str.substring(0, inputValue.length);
        let makeBold = `<strong>${matched}</strong>`;
        let boldedMatch = str.replace(matched, makeBold);
        return boldedMatch;
    }

    const removeBold = (str) => {
        //replace < and > all characters between
        return str.replace(/<(.)*?>/g, "");
        // return str.replace(/<(strong)>/g, "").replace(/<\/(strong)>/g, "");
    }


    /* NAVIGATING OVER THE LIST OF COUNTRIES W HIGHLIGHTING */
    let hiLiteIndex = null;
    //$: console.log(hiLiteIndex);
    $: hiLitedCountry = filteredCountries[hiLiteIndex];

    const navigateList = (e) => {
        if (e.key === "ArrowDown" && hiLiteIndex <= filteredCountries.length-1) {
            hiLiteIndex === null ? hiLiteIndex = 0 : hiLiteIndex += 1
        } else if (e.key === "ArrowUp" && hiLiteIndex !== null) {
            hiLiteIndex === 0 ? hiLiteIndex = filteredCountries.length-1 : hiLiteIndex -= 1
        } else if (e.key === "Enter") {
            setInputVal(filteredCountries[hiLiteIndex]);
        } else {
            return;
        }
    }
</script>

<svelte:window on:keydown={navigateList} />

<form autocomplete="off" on:submit|preventDefault={submitValue}>
    <div class="relative inline-block w-72">
        <input id="country-input"
               type="text"
               placeholder="Search Country Names"
               bind:this={searchInput}
               bind:value={inputValue}
               on:input={filterCountries}
               class="border border-transparent bg-gray-200 p-2 text-base w-full"
        />
    </div>

    <input type="submit" class="bg-blue-500 text-white py-2 px-4 mt-2 cursor-pointer">

    <!-- FILTERED LIST OF COUNTRIES -->
    {#if filteredCountries.length > 0}
        <ul id="autocomplete-items-list" class="relative m-0 p-0 top-0 w-72 border border-gray-300 bg-gray-300 max-h-60 overflow-y-auto">
            {#each filteredCountries as country, i}
                <li class="autocomplete-items" class:autocomplete-active={i === hiLiteIndex} on:click={() => setInputVal(country)}>{@html country}</li>
            {/each}
        </ul>
    {/if}
</form>

<style>
    .autocomplete-items {
        @apply list-none border-b-2 border-neutral-300 z-50 top-full left-0 right-0 p-4 cursor-pointer bg-white;
    }

    .autocomplete-items:hover {
        @apply bg-primary text-white;
    }

    .autocomplete-items:active {
        @apply bg-blue-500 text-white !important;
    }

    .autocomplete-active {
        @apply bg-blue-500 text-white !important;
    }
</style>

