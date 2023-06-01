<script>
    export let categories;
    export let name;
    let isHidden = false;
    export let styles;

    function toggleVisibility() {
        isHidden = !isHidden;
    }
</script>

<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"/>

<div class="main-container">
    <div class="secondary-container {isHidden ? 'w-17' : 'w-56'} {styles.backgroundColor}">
        <div class="top-container">
            <h1 class="{styles.headingTextColor} {isHidden ? 'hidden': 'text-3xl uppercase'}">{name}</h1>
            <button class="toggle-button"
                    on:click={toggleVisibility}>
                <i class="{styles.iconColor} {isHidden ? 'bx bx-right-arrow' : 'bx bx-left-arrow'}"></i>
            </button>
        </div>
        <ul>
            {#each categories as category}
                <li class="hover:{styles.primaryColor}">
                    <a href="#"
                       class='{styles.secondaryTextColor} hover:{styles.primaryTextColor}'>
                        <span class="category {styles.iconColor}"><i
                                class="{category.icon}"></i></span>
                        <span class={isHidden ? "hidden" : "text-sm font-medium"}>{category.name}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .main-container {
        @apply h-auto flex flex-row bg-gray-100 mt-10;
    }

    .secondary-container {
        @apply flex flex-col rounded-r-3xl overflow-hidden;
    }

    .top-container {
        @apply flex items-center justify-center h-20 shadow-md;
    }

    .toggle-button {
        @apply flex items-center justify-center bg-gray-100 h-10 w-10 rounded-full mx-3;
    }

    ul {
        @apply flex flex-col py-4;
    }

    a {
        @apply flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200;
    }

    .category {
        @apply inline-flex items-center justify-center h-12 w-12 text-lg mx-3;
    }
</style>
