<script>
    export let categories;
    export let label;
    let isHidden = false;
    export let hoverMenuColor,
        headingTextColor,
        hoverMenuTextColor,
        secondaryTextColor,
        backgroundColor,
        iconColor;

    export let mainContainer,
        secondaryContainer,
        topContainer,
        toggleButton,
        ulTag,
        categoryStyle,
        aTag;

    function toggleVisibility() {
        isHidden = !isHidden;
    }
</script>

<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"/>

<div class={mainContainer}>
    <div class="{secondaryContainer} {isHidden ? 'w-17' : 'w-56'} {backgroundColor}">
        <div class={topContainer}>
            <h1 class="{headingTextColor} {isHidden ? 'hidden': 'text-3xl uppercase'}">{label}</h1>
            <button class={toggleButton}
                    on:click={toggleVisibility}>
                <i class="{iconColor} {isHidden ? 'bx bx-right-arrow' : 'bx bx-left-arrow'}"></i>
            </button>
        </div>
        <ul class={ulTag}>
            {#each categories as category}
                <li class={hoverMenuColor}>
                    <a href="#"
                       class='{aTag} {secondaryTextColor} {hoverMenuTextColor}'>
                        <span class="{categoryStyle} {iconColor}"><i
                                class="{category.icon}"></i></span>
                        <span class={isHidden ? "hidden" : "text-sm font-medium"}>{category.name}</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>
